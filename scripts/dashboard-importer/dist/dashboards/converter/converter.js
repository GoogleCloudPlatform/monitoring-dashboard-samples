"use strict";
/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const legacy_rows_1 = require("./layout/legacy_rows");
const templating_1 = require("./template_variables/templating");
const constants_1 = require("./layout/constants");
const widget_1 = require("./widgets/widget");
const logger_1 = require("../../common/logger");
const layout_utils_1 = require("./layout/layout_utils");
const text_1 = require("./widgets/text");
const report_1 = require("../../common/report");
class GrafanaDashboardConverter {
    constructor(dashboard, fileName) {
        this.converted = null;
        this.fileName = fileName;
        this.grid = new Set();
        this.title = dashboard.title || dashboard.description || '';
        this.gnetId = typeof dashboard.gnetId === 'number' ? dashboard.gnetId :
            undefined;
        this.version = typeof dashboard.version === 'number' ? dashboard.version : 1;
        this.warnings = [];
        this.errors = [];
        this.templating = dashboard.templating;
        this.templateVariables = this.getResult((0, templating_1.getTemplateVariableMap)(this.templating), new Map());
        this.yOffSet = 0;
        this.dashboardHeight = 0;
        this.panels = dashboard.panels || [];
        // Rows are a Grafana schema for panel layout used from version 12 - 14
        if (dashboard.rows) {
            // Convert Rows format by calculating and adding x, y, h, w attributes
            this.panels = [...(0, legacy_rows_1.parseRowPanels)(dashboard.rows)];
        }
        this.tiles = [];
    }
    // Constructs dashboard by creating dashboard filters and converting panels
    convert() {
        (0, logger_1.logInfo)(`\n\nConverting: ${this.title}`);
        const dashboardFilters = this.getResult((0, templating_1.createDashboardFilter)(this.templating), []);
        for (const panel of this.panels) {
            this.convertPanel(panel);
        }
        this.addTroubleshootingTile();
        this.converted = {
            displayName: this.title,
            dashboardFilters: dashboardFilters,
            mosaicLayout: {
                columns: constants_1.DEFAULT_COLS,
                tiles: this.tiles,
            },
            labels: Object.assign({ 'goog-imported-via-script': '', 'cloud-ops-grafana-importer': '', 'goog-imported-grafana-dashboard': '', [`goog-imported-grafana-revision-${this.version}`]: '' }, (this.gnetId && { [`goog-imported-grafana-id-${this.gnetId}`]: '' })),
        };
    }
    // converts panels to tiles by looping through panels and subpanels
    convertPanel(panel) {
        const targets = panel.targets || [];
        if (panel.type === 'row') {
            this.warnings.push(`Panel '${panel.title}': Collapsible groups currently are not yet fully supported. Charts will be unnested`);
        }
        if (panel.panels && panel.panels.length > 0) {
            const panels = panel.panels || [];
            for (const subpanel of panels) {
                this.convertPanel(subpanel);
            }
        }
        else {
            const tile = this.constructTile(panel, targets);
            // Monitoring dashboard API has a hard cap of 40 tiles per dashboard
            if (this.tiles.length === constants_1.MAX_TILE_COUNT) {
                this.warnings.push(`Panel '${panel.title}' was skipped as the maximum number of tiles: ${constants_1.MAX_TILE_COUNT} has been reached`);
            }
            if (tile &&
                Object.keys(tile).length &&
                this.tiles.length < constants_1.MAX_TILE_COUNT) {
                // update the grid to track which coordinates are in use
                const updateGridSuceeded = (0, layout_utils_1.updateGrid)(tile, this.grid);
                if (updateGridSuceeded) {
                    this.tiles.push(tile);
                }
                else {
                    this.warnings.push(`Panel '${panel.title}' unexpectedly overlaps with existing tiles and was skipped`);
                }
            }
        }
    }
    // Constructs a tile with appropriate widget and calculated x, y, h, w
    constructTile(panel, targets) {
        const { x: xPos, y: yPos, h: height, w: width } = panel.gridPos || {};
        if (xPos === undefined ||
            yPos === undefined ||
            height === undefined ||
            width === undefined) {
            this.warnings.push(`Panel '${panel.title}' was missing one of (x, y, h, w) attributes and so the tile was skipped`);
            return {};
        }
        // Cloud Ops Tiles have a minimum height of 2
        if (height < constants_1.MIN_HEIGHT) {
            if (panel.type !== 'row') {
                this.warnings.push(`Panel '${panel.title}' has height ${height}, which is a smaller height than the min allowed height of 2 and so the tile was skipped`);
            }
            return {};
        }
        // Check for overlap and apply reconciliation if necessary
        this.yOffSet = (0, layout_utils_1.getYOffsetToFit)(panel.gridPos, this.grid, this.yOffSet);
        const widget = this.getResult((0, widget_1.constructWidget)(panel, targets, this.templateVariables), null);
        if (widget === null) {
            this.errors.push(`Panel '${panel.title}' encountered an unexpected error and was unable to be converted to a widget`);
            return {};
        }
        this.dashboardHeight = Math.max(this.dashboardHeight, yPos + this.yOffSet + height);
        return {
            widget,
            xPos,
            yPos: yPos + this.yOffSet,
            height,
            width,
        };
    }
    addTroubleshootingTile() {
        const warningSummary = `##### Generated Warnings\n\n${(0, report_1.generateWarningSummary)(this.warnings, this.panels.length)}`;
        const troubleshootingDocsText = 'For conversion issues such as no data in charts or missing tiles, please see our [troubleshooting docs](https://github.com/GoogleCloudPlatform/monitoring-dashboard-samples/blob/master/scripts/dashboard-importer/README.md#conversion-issues)';
        const date = new Date();
        const dateTimeText = `Converted from ${this.fileName} on ${(0, report_1.getDateString)(date)} at ${(0, report_1.createReportId)(date)}`;
        const text = [dateTimeText, troubleshootingDocsText, warningSummary].join('\n\n');
        const height = 4 + Math.floor(warningSummary.split("\n").length / 3);
        this.tiles.push({
            widget: (0, text_1.createTextWidget)('Conversion info', text),
            xPos: 0,
            yPos: this.dashboardHeight,
            height,
            width: 24,
        });
    }
    /**
     * Utility Function that pushes warnings and errors from a result obj
     * and returns the nested result
     */
    getResult(result, fallback) {
        this.warnings.push(...result.warnings);
        this.errors.push(...result.errors);
        if (result.result !== null) {
            return result.result;
        }
        return fallback;
    }
}
exports.default = GrafanaDashboardConverter;
//# sourceMappingURL=converter.js.map