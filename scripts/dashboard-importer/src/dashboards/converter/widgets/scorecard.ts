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

import {
  Expression,
  Widget,
  SparkChartViewSparkChartType,
} from '../../../common/types/cloud_ops_types';

// Creates a Scorecard Widget
export function createScoreCard(
  title: string,
  expr: Expression,
  sparkChartType: SparkChartViewSparkChartType = 'SPARK_LINE',
): Widget {
  return {
    scorecard: {
      sparkChartView: {
        sparkChartType,
      },
      thresholds: [],
      timeSeriesQuery: {
        // expr might be undefined for non-prometheus datasources
        prometheusQuery: expr?.expression,
      },
    },
    title: title,
  };
}
