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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertScoreCardPrometheusExpression = exports.assertTablePrometheusExpression = exports.assertPlotType = exports.assertChartPrometheusExpression = exports.assertPos = exports.assertTitle = void 0;
const assert_1 = __importDefault(require("assert"));
// Asserts equality of tile title
function assertTitle(tile, title) {
    var _a;
    assert_1.default.deepStrictEqual((_a = tile.widget) === null || _a === void 0 ? void 0 : _a.title, title);
}
exports.assertTitle = assertTitle;
// Asserts equality of tile positioning
function assertPos(tile, x, y, w, h) {
    assert_1.default.deepStrictEqual(tile.xPos, x);
    assert_1.default.deepStrictEqual(tile.yPos, y);
    assert_1.default.deepStrictEqual(tile.width, w);
    assert_1.default.deepStrictEqual(tile.height, h);
}
exports.assertPos = assertPos;
// Asserts equality of tile expression
function assertChartPrometheusExpression(tile, expression) {
    var _a, _b;
    assert_1.default.deepStrictEqual((_b = (_a = getChartFirstDataSet(tile)) === null || _a === void 0 ? void 0 : _a.timeSeriesQuery) === null || _b === void 0 ? void 0 : _b.prometheusQuery, expression);
}
exports.assertChartPrometheusExpression = assertChartPrometheusExpression;
// Asserts equality of tile plot type
function assertPlotType(tile, plotType) {
    var _a;
    assert_1.default.deepStrictEqual((_a = getChartFirstDataSet(tile)) === null || _a === void 0 ? void 0 : _a.plotType, plotType);
}
exports.assertPlotType = assertPlotType;
function getChartFirstDataSet(tile) {
    var _a, _b;
    const dataSet = ((_b = (_a = tile.widget) === null || _a === void 0 ? void 0 : _a.xyChart) === null || _b === void 0 ? void 0 : _b.dataSets) || [];
    return dataSet[0];
}
// Asserts equality of table tile's prometheus expression
function assertTablePrometheusExpression(tile, expression) {
    var _a, _b, _c;
    assert_1.default.deepStrictEqual((_c = (((_b = (_a = tile.widget) === null || _a === void 0 ? void 0 : _a.timeSeriesTable) === null || _b === void 0 ? void 0 : _b.dataSets) || [])[0].timeSeriesQuery) === null || _c === void 0 ? void 0 : _c.prometheusQuery, expression);
}
exports.assertTablePrometheusExpression = assertTablePrometheusExpression;
// Asserts equality of scorecard tile's prometheus expression
function assertScoreCardPrometheusExpression(tile, expression) {
    var _a, _b, _c;
    assert_1.default.deepStrictEqual((_c = (_b = (_a = tile.widget) === null || _a === void 0 ? void 0 : _a.scorecard) === null || _b === void 0 ? void 0 : _b.timeSeriesQuery) === null || _c === void 0 ? void 0 : _c.prometheusQuery, expression);
}
exports.assertScoreCardPrometheusExpression = assertScoreCardPrometheusExpression;
//# sourceMappingURL=tile_test_utils.js.map