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
exports.constructWidget = void 0;
const result_1 = require("../../../common/result");
const expression_1 = require("../expression");
const chart_1 = require("./chart");
const gauge_1 = require("./gauge");
const pie_chart_1 = require("./pie_chart");
const scorecard_1 = require("./scorecard");
const table_1 = require("./table");
const text_1 = require("./text");
// Checks against the panel type and then constructs the appropriate widget
function constructWidget(panel, targets, templateVariables = new Map()) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const title = panel.title;
    const panelType = panel.type;
    const plotType = panel.stack ||
        ['normal', 'percent'].includes(((_d = (_c = (_b = (_a = panel.fieldConfig) === null || _a === void 0 ? void 0 : _a.defaults) === null || _b === void 0 ? void 0 : _b.custom) === null || _c === void 0 ? void 0 : _c.stacking) === null || _d === void 0 ? void 0 : _d.mode) || '')
        ? 'STACKED_AREA'
        : 'LINE';
    const expressionsResult = (0, expression_1.getExpressions)(targets, title, templateVariables);
    const expressions = expressionsResult.result || [];
    const warnings = [];
    let widget;
    switch (panelType) {
        case 'gauge':
            widget = (0, gauge_1.createGaugeChart)(title, expressions[0], 0, 100);
            break;
        case 'singlestat':
            if ((_e = panel.gauge) === null || _e === void 0 ? void 0 : _e.show) {
                widget = (0, gauge_1.createGaugeChart)(title, expressions[0], (_f = panel.gauge) === null || _f === void 0 ? void 0 : _f.minValue, (_g = panel.gauge) === null || _g === void 0 ? void 0 : _g.maxValue);
                break;
            }
            widget = (0, scorecard_1.createScoreCard)(title, expressions[0]);
            break;
        case 'stat':
            widget = (0, scorecard_1.createScoreCard)(title, expressions[0]);
            break;
        case 'table':
        case 'table-old':
            widget = (0, table_1.createTable)(title, expressions[0]);
            break;
        case 'text':
            widget = (0, text_1.createTextWidget)(title, ((_h = panel.options) === null || _h === void 0 ? void 0 : _h.content) || panel.content || '');
            break;
        case 'timeseries':
            widget = (0, chart_1.createBasicChart)(plotType, title, expressions);
            break;
        // Legacy Time Series
        case 'graph':
            widget = (0, chart_1.createBasicChart)(plotType, title, expressions);
            break;
        // Legacy Bar Chart
        case 'bargauge':
            widget = (0, chart_1.createBasicChart)('STACKED_BAR', title, expressions);
            break;
        case 'heatmap':
            widget = (0, chart_1.createBasicChart)('HEATMAP', title, expressions);
            break;
        case 'piechart':
        case 'grafana-piechart-panel':
            widget = (0, pie_chart_1.createPieChart)(title, expressions[0], (_j = panel.options) === null || _j === void 0 ? void 0 : _j.pieType);
            break;
        default:
            warnings.push(`${panel.title} has type '${panelType}' which is not supported for conversion and has been replaced with a line chart`);
            widget = (0, chart_1.createBasicChart)('LINE', title, expressions);
    }
    return (0, result_1.success)(widget, [...warnings, ...expressionsResult.warnings]);
}
exports.constructWidget = constructWidget;
//# sourceMappingURL=widget.js.map