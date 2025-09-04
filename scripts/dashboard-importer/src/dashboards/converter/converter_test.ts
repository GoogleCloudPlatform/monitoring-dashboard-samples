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

import GrafanaDashboardConverter from '../converter/converter';
import assert from 'assert';

import {TEST_GENERIC_DASHBOARD} from './testing/test_dashboard';
import {
  assertTitle,
  assertChartPrometheusExpression,
  assertPlotType,
  assertTablePrometheusExpression,
  assertScoreCardPrometheusExpression,
  assertPos,
} from './testing/tile_test_utils';
import {runTests} from '../../common/testing/test_utils';
import {TEST_LEGACY_ROW_DASHBOARD} from './testing/test_legacy_row_dashboard';
import {TEST_OVERLAP_DASHBOARD} from './testing/test_overlap_dashboard';
import {hasNoOverlap} from './testing/overlap_test_utils';
import {GrafanaDashboard} from '../../common/types/grafana_types';
import {Dashboard} from '../../common/types/cloud_ops_types';

function convertDashboard(dashboard: GrafanaDashboard): Dashboard {
  const converter = new GrafanaDashboardConverter(dashboard, 'test-file');
  converter.convert();
  const converted = converter.converted;
  if (converted === null) {
    throw new Error(`Unable to convert dashboard ${dashboard.title} for test`);
  }
  return converted;
}

// Tests fundamental dashboard conversion behavior
function testDashboardConversion() {
  const converter = new GrafanaDashboardConverter(TEST_GENERIC_DASHBOARD, 'test-file');
  converter.convert();
  const convertedDashboard = converter.converted;
  const tiles = convertedDashboard?.mosaicLayout?.tiles || [];

  assert.deepStrictEqual(converter?.warnings, []);
  assert.deepStrictEqual(converter?.errors, []);

  // Validate Dashboard Filter
  const dashboardFilter = convertedDashboard?.dashboardFilters;
  assert.deepStrictEqual(dashboardFilter, [
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
  assert(hasNoOverlap(tiles));

  // First tile is a regular time series
  assertTitle(tiles[0], 'Test Time Series');
  assertChartPrometheusExpression(
    tiles[0],
    'rate(node_cpu_seconds_total{mode="idle"}[${__interval}])',
  );
  assertPlotType(tiles[0], 'LINE');

  assertTitle(tiles[1], 'Test Stacked Area Chart');
  assertChartPrometheusExpression(
    tiles[1],
    'rate(node_cpu_seconds_total{mode="idle"}[${__interval}])',
  );
  assertPlotType(tiles[1], 'STACKED_AREA');

  assertTitle(tiles[2], 'Test Graph Old');
  assertChartPrometheusExpression(
    tiles[2],
    'rate(node_cpu_seconds_total{mode="idle"}[${__interval}])',
  );
  assertPlotType(tiles[2], 'LINE');

  assertTitle(tiles[3], 'Test Bar Gauge');
  assertChartPrometheusExpression(
    tiles[3],
    'rate(node_cpu_seconds_total{mode="idle"}[${__interval}])',
  );
  assertPlotType(tiles[3], 'STACKED_BAR');

  assertTitle(tiles[4], 'Test Table');
  assertTablePrometheusExpression(
    tiles[4],
    'rate(node_cpu_seconds_total{mode="idle"}[${__interval}])',
  );

  assertTitle(tiles[5], 'Test Gauge Chart');
  assertScoreCardPrometheusExpression(
    tiles[5],
    '(sum(node_memory_MemFree_bytes{}) / sum(node_memory_MemTotal_bytes{})) * 100',
  );

  assertTitle(tiles[6], 'Test Stat');
  assertScoreCardPrometheusExpression(
    tiles[6],
    '(sum(node_memory_MemFree_bytes{}) / sum(node_memory_MemTotal_bytes{})) * 100',
  );

  assertTitle(tiles[7], 'Test Text');
  assert.deepStrictEqual(tiles[7].widget?.text?.content, 'Test Text Content');
}

function testLegacyRowHandling() {
  const convertedDashboard = convertDashboard(TEST_LEGACY_ROW_DASHBOARD);
  const tiles = convertedDashboard?.mosaicLayout?.tiles || [];
  // x, y, w, h
  assertPos(tiles[0], 0, 0, 10, 5);
  assertPos(tiles[1], 10, 0, 14, 5);
  assertPos(tiles[2], 0, 8, 8, 6);
  assertPos(tiles[3], 8, 8, 8, 6);
  assertPos(tiles[4], 16, 8, 8, 6);
  assertPos(tiles[5], 0, 16, 24, 9);
  assert(hasNoOverlap(tiles));
}

function testOverlapReconciliation() {
  const convertedDashboard = convertDashboard(TEST_OVERLAP_DASHBOARD);
  const tiles = convertedDashboard?.mosaicLayout?.tiles || [];
  assert(hasNoOverlap(tiles));
}

export default function test() {
  runTests([
    testDashboardConversion,
    testLegacyRowHandling,
    testOverlapReconciliation,
  ]);
}
