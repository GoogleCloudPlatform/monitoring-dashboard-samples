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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rows_1 = require("./converter/layout/rows");
const templating_1 = require("./converter/template_variables/templating");
const constants_1 = require("./converter/layout/constants");
const widget_1 = require("./converter/widgets/widget");
class GrafanaDashboardConverter {
    constructor(dashboard, result) {
        this.converted = null;
        this.warnings = [];
        this.errors = [];
        this.grid = new Set();
        this.title = dashboard.title || dashboard.description || '';
        this.templating = dashboard.templating;
        this.templateVariables =
            (0, templating_1.getTemplateVariableMap)(this.templating).result ||
                new Map();
        this.yOffSet = 0;
        this.conversionResult = result;
        this.panels = dashboard.panels || [];
        // Rows are a legacy Grafana schema for panel layout
        if (dashboard.rows) {
            // Convert Rows format by calculating and adding x, y, h, w attributes
            this.panels = [...(0, rows_1.parseRowPanels)(dashboard.rows)];
        }
        this.tiles = [];
    }
    // Constructs dashboard by creating dashboard filters and converting panels
    convert() {
        console.log(`\n\nConverting: ${this.title}`);
        const createDashboardFiltersAttempt = (0, templating_1.createDashboardFilter)(this.templating);
        this.conversionResult.warnings.push(...createDashboardFiltersAttempt.warnings);
        for (const panel of this.panels) {
            this.convertPanel(panel);
        }
        this.converted = {
            displayName: this.title,
            dashboardFilters: createDashboardFiltersAttempt.result || [],
            mosaicLayout: {
                columns: constants_1.DEFAULT_COLS,
                tiles: this.tiles,
            },
            labels: {
                'goog-imported-via-script': '',
                'cloud-ops-grafana-importer': '',
            },
        };
    }
    // converts panels to tiles by looping through panels and subpanels
    convertPanel(panel) {
        const targets = panel.targets || [];
        if (panel.type === 'row') {
            this.conversionResult.warnings.push(`Panel ${panel.title}: Collapsible groups currently are not yet fully supported. Charts will be unnested`);
        }
        if (panel.panels && panel.panels.length > 0) {
            const panels = panel.panels || [];
            for (const subpanel of panels) {
                this.convertPanel(subpanel);
            }
        }
        else {
            const tile = this.constructTile(panel, targets);
            // update the grid to track which coordinates are in use
            this.updateGrid(tile);
            // Monitoring dashboard API has a hard cap of 40 tiles per dashboard
            if (this.tiles.length === 40) {
                this.conversionResult.warnings.push(`${panel.title} was skipped as the maximum number of tiles: 40 has been reached`);
            }
            if (tile && Object.keys(tile).length && this.tiles.length < 40) {
                this.tiles.push(tile);
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
            this.conversionResult.warnings.push(`Panel ${panel.title} was missing one of (x, y, h, w) attributes and so the tile was skipped`);
            return {};
        }
        if (height < constants_1.MIN_HEIGHT) {
            if (panel.type !== 'row') {
                this.conversionResult.warnings.push(`Panel ${panel.title} is a smaller height than the min allowed height of 2 and so the tile was skipped`);
            }
            return {};
        }
        // Check for overlap and apply reconciliation if necessary
        this.updateYOffsetToFit(xPos, yPos, width, height);
        const widgetConstructionResult = (0, widget_1.constructWidget)(panel, targets, this.templateVariables);
        const widget = widgetConstructionResult.result;
        this.conversionResult.warnings.push(...widgetConstructionResult.warnings);
        if (widget === null) {
            this.conversionResult.errors.push(`${panel.title} encountered an unexpected error and was unable to be converted to a widget`);
            return {};
        }
        return {
            widget,
            xPos,
            yPos: yPos + this.yOffSet,
            height,
            width,
        };
    }
    /**
     *  This algorithm reconciles tile overlaps by repeatedly shifting tiles down
     *  one level if an overlap exists.
     */
    updateYOffsetToFit(xPos, yPos, width, height) {
        let overlapping = true;
        while (overlapping) {
            let succeeded = true;
            outer: for (let y = yPos; y < yPos + height; y++) {
                for (let x = xPos; x < xPos + width; x++) {
                    // Check for overlap
                    if (this.grid.has(x + ',' + (y + this.yOffSet))) {
                        // If tiles overlap vertically offset all subsequent tiles by 1
                        this.yOffSet++;
                        succeeded = false;
                        break outer;
                    }
                }
            }
            if (succeeded) {
                overlapping = false;
            }
        }
    }
    // Function keeps track of all the occupied tiles
    updateGrid(tile) {
        const { xPos, yPos, width, height } = tile;
        for (let x = xPos; x < xPos + width; x++) {
            for (let y = yPos; y < yPos + height; y++) {
                this.grid.add(x + ',' + y);
            }
        }
    }
}
exports.default = GrafanaDashboardConverter;
//# sourceMappingURL=converter.js.map