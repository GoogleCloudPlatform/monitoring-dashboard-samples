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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertScoreCardPrometheusExpression = exports.assertTablePrometheusExpression = exports.assertPlotType = exports.assertChartPrometheusExpression = exports.assertPos = exports.assertTitle = void 0;
const assert_1 = __importDefault(require("assert"));
function assertTitle(tile, title) {
    var _a;
    assert_1.default.deepEqual((_a = tile.widget) === null || _a === void 0 ? void 0 : _a.title, title);
}
exports.assertTitle = assertTitle;
function assertPos(tile, x, y, w, h) {
    assert_1.default.deepEqual(tile.xPos, x);
    assert_1.default.deepEqual(tile.yPos, y);
    assert_1.default.deepEqual(tile.width, w);
    assert_1.default.deepEqual(tile.height, h);
}
exports.assertPos = assertPos;
function assertChartPrometheusExpression(tile, expression) {
    var _a, _b;
    assert_1.default.deepEqual((_b = ((_a = getChartFirstDataSet(tile)) === null || _a === void 0 ? void 0 : _a.timeSeriesQuery)) === null || _b === void 0 ? void 0 : _b.prometheusQuery, expression);
}
exports.assertChartPrometheusExpression = assertChartPrometheusExpression;
function assertPlotType(tile, plotType) {
    var _a;
    assert_1.default.deepEqual((_a = getChartFirstDataSet(tile)) === null || _a === void 0 ? void 0 : _a.plotType, plotType);
}
exports.assertPlotType = assertPlotType;
function getChartFirstDataSet(tile) {
    var _a, _b;
    const dataSet = ((_b = (_a = tile.widget) === null || _a === void 0 ? void 0 : _a.xyChart) === null || _b === void 0 ? void 0 : _b.dataSets) || [];
    return dataSet[0];
}
function assertTablePrometheusExpression(tile, expression) {
    var _a, _b, _c;
    assert_1.default.deepEqual((_c = (((_b = (_a = tile.widget) === null || _a === void 0 ? void 0 : _a.timeSeriesTable) === null || _b === void 0 ? void 0 : _b.dataSets) || [])[0].timeSeriesQuery) === null || _c === void 0 ? void 0 : _c.prometheusQuery, expression);
}
exports.assertTablePrometheusExpression = assertTablePrometheusExpression;
function assertScoreCardPrometheusExpression(tile, expression) {
}
exports.assertScoreCardPrometheusExpression = assertScoreCardPrometheusExpression;
//# sourceMappingURL=tile_utils.js.map