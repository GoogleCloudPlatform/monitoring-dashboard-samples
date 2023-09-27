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

import assert from 'assert';
import {
  DataSet,
  DataSetPlotType,
  Tile,
} from '../../../common/types/cloud_ops_types';

// Asserts equality of tile title
export function assertTitle(tile: Tile, title: string) {
  assert.deepStrictEqual(tile.widget?.title, title);
}

// Asserts equality of tile positioning
export function assertPos(
  tile: Tile,
  x: number,
  y: number,
  w: number,
  h: number,
) {
  assert.deepStrictEqual(tile.xPos, x);
  assert.deepStrictEqual(tile.yPos, y);
  assert.deepStrictEqual(tile.width, w);
  assert.deepStrictEqual(tile.height, h);
}

// Asserts equality of tile expression
export function assertChartPrometheusExpression(
  tile: Tile,
  expression: string,
) {
  assert.deepStrictEqual(
    getChartFirstDataSet(tile)?.timeSeriesQuery?.prometheusQuery,
    expression,
  );
}

// Asserts equality of tile plot type
export function assertPlotType(tile: Tile, plotType: DataSetPlotType) {
  assert.deepStrictEqual(getChartFirstDataSet(tile)?.plotType, plotType);
}

function getChartFirstDataSet(tile: Tile): DataSet | undefined {
  const dataSet = tile.widget?.xyChart?.dataSets || [];
  return dataSet[0];
}

// Asserts equality of table tile's prometheus expression
export function assertTablePrometheusExpression(
  tile: Tile,
  expression: string,
) {
  assert.deepStrictEqual(
    (tile.widget?.timeSeriesTable?.dataSets || [])[0].timeSeriesQuery
      ?.prometheusQuery,
    expression,
  );
}

// Asserts equality of scorecard tile's prometheus expression
export function assertScoreCardPrometheusExpression(
  tile: Tile,
  expression: string,
) {
  assert.deepStrictEqual(
    tile.widget?.scorecard?.timeSeriesQuery?.prometheusQuery,
    expression,
  );
}
