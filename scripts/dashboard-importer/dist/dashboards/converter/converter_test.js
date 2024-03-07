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
const converter_1 = __importDefault(require("../converter/converter"));
const assert_1 = __importDefault(require("assert"));
const test_dashboard_1 = require("./testing/test_dashboard");
const tile_test_utils_1 = require("./testing/tile_test_utils");
const test_utils_1 = require("../../common/testing/test_utils");
const test_legacy_row_dashboard_1 = require("./testing/test_legacy_row_dashboard");
const test_overlap_dashboard_1 = require("./testing/test_overlap_dashboard");
const overlap_test_utils_1 = require("./testing/overlap_test_utils");
function convertDashboard(dashboard) {
    const converter = new converter_1.default(dashboard, 'test-file');
    converter.convert();
    const converted = converter.converted;
    if (converted === null) {
        throw new Error(`Unable to convert dashboard ${dashboard.title} for test`);
    }
    return converted;
}
// Tests fundamental dashboard conversion behavior
function testDashboardConversion() {
    var _a, _b, _c;
    const converter = new converter_1.default(test_dashboard_1.TEST_GENERIC_DASHBOARD, 'test-file');
    converter.convert();
    const convertedDashboard = converter.converted;
    const tiles = ((_a = convertedDashboard === null || convertedDashboard === void 0 ? void 0 : convertedDashboard.mosaicLayout) === null || _a === void 0 ? void 0 : _a.tiles) || [];
    assert_1.default.deepStrictEqual(converter === null || converter === void 0 ? void 0 : converter.warnings, []);
    assert_1.default.deepStrictEqual(converter === null || converter === void 0 ? void 0 : converter.errors, []);
    // Validate Dashboard Filter
    const dashboardFilter = convertedDashboard === null || convertedDashboard === void 0 ? void 0 : convertedDashboard.dashboardFilters;
    assert_1.default.deepStrictEqual(dashboardFilter, [
        {
            filterType: 'RESOURCE_LABEL',
            labelKey: 'cluster',
            stringValue: '',
            templateVariable: 'testTv',
        },
        {
            filterType: 'METRIC_LABEL',
            labelKey: 'node',
            stringValue: '',
            templateVariable: 'testNodeTv',
        }
    ]);
    // Validate Tiles
    (0, assert_1.default)((0, overlap_test_utils_1.hasNoOverlap)(tiles));
    // First tile is a regular time series
    (0, tile_test_utils_1.assertTitle)(tiles[0], 'Test Time Series');
    (0, tile_test_utils_1.assertChartPrometheusExpression)(tiles[0], 'rate(node_cpu_seconds_total{mode="idle"}[5m])');
    (0, tile_test_utils_1.assertPlotType)(tiles[0], 'LINE');
    (0, tile_test_utils_1.assertTitle)(tiles[1], 'Test Stacked Area Chart');
    (0, tile_test_utils_1.assertChartPrometheusExpression)(tiles[1], 'rate(node_cpu_seconds_total{mode="idle"}[5m])');
    (0, tile_test_utils_1.assertPlotType)(tiles[1], 'STACKED_AREA');
    (0, tile_test_utils_1.assertTitle)(tiles[2], 'Test Graph Old');
    (0, tile_test_utils_1.assertChartPrometheusExpression)(tiles[2], 'rate(node_cpu_seconds_total{mode="idle"}[5m])');
    (0, tile_test_utils_1.assertPlotType)(tiles[2], 'LINE');
    (0, tile_test_utils_1.assertTitle)(tiles[3], 'Test Bar Gauge');
    (0, tile_test_utils_1.assertChartPrometheusExpression)(tiles[3], 'rate(node_cpu_seconds_total{mode="idle"}[5m])');
    (0, tile_test_utils_1.assertPlotType)(tiles[3], 'STACKED_BAR');
    (0, tile_test_utils_1.assertTitle)(tiles[4], 'Test Table');
    (0, tile_test_utils_1.assertTablePrometheusExpression)(tiles[4], 'rate(node_cpu_seconds_total{mode="idle"}[5m])');
    (0, tile_test_utils_1.assertTitle)(tiles[5], 'Test Gauge Chart');
    (0, tile_test_utils_1.assertScoreCardPrometheusExpression)(tiles[5], '(sum(node_memory_MemFree_bytes{}) / sum(node_memory_MemTotal_bytes{})) * 100');
    (0, tile_test_utils_1.assertTitle)(tiles[6], 'Test Stat');
    (0, tile_test_utils_1.assertScoreCardPrometheusExpression)(tiles[6], '(sum(node_memory_MemFree_bytes{}) / sum(node_memory_MemTotal_bytes{})) * 100');
    (0, tile_test_utils_1.assertTitle)(tiles[7], 'Test Text');
    assert_1.default.deepStrictEqual((_c = (_b = tiles[7].widget) === null || _b === void 0 ? void 0 : _b.text) === null || _c === void 0 ? void 0 : _c.content, 'Test Text Content');
}
function testLegacyRowHandling() {
    var _a;
    const convertedDashboard = convertDashboard(test_legacy_row_dashboard_1.TEST_LEGACY_ROW_DASHBOARD);
    const tiles = ((_a = convertedDashboard === null || convertedDashboard === void 0 ? void 0 : convertedDashboard.mosaicLayout) === null || _a === void 0 ? void 0 : _a.tiles) || [];
    // x, y, w, h
    (0, tile_test_utils_1.assertPos)(tiles[0], 0, 0, 10, 5);
    (0, tile_test_utils_1.assertPos)(tiles[1], 10, 0, 14, 5);
    (0, tile_test_utils_1.assertPos)(tiles[2], 0, 8, 8, 6);
    (0, tile_test_utils_1.assertPos)(tiles[3], 8, 8, 8, 6);
    (0, tile_test_utils_1.assertPos)(tiles[4], 16, 8, 8, 6);
    (0, tile_test_utils_1.assertPos)(tiles[5], 0, 16, 24, 9);
    (0, assert_1.default)((0, overlap_test_utils_1.hasNoOverlap)(tiles));
}
function testOverlapReconciliation() {
    var _a;
    const convertedDashboard = convertDashboard(test_overlap_dashboard_1.TEST_OVERLAP_DASHBOARD);
    const tiles = ((_a = convertedDashboard === null || convertedDashboard === void 0 ? void 0 : convertedDashboard.mosaicLayout) === null || _a === void 0 ? void 0 : _a.tiles) || [];
    (0, assert_1.default)((0, overlap_test_utils_1.hasNoOverlap)(tiles));
}
function test() {
    (0, test_utils_1.runTests)([
        testDashboardConversion,
        testLegacyRowHandling,
        testOverlapReconciliation,
    ]);
}
exports.default = test;
//# sourceMappingURL=converter_test.js.map