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

import {Expression, Widget} from '../../../common/types/cloud_ops_types';

// Creates a Table Widget
export function createTable(title: string, expression: Expression): Widget {
  return {
    title,
    timeSeriesTable: {
      columnSettings: [
        {
          column: 'value',
          visible: false,
        },
      ],
      dataSets: [
        {
          timeSeriesQuery: {
            prometheusQuery: expression?.expression,
          },
        },
      ],
      metricVisualization: 'NUMBER',
    },
  };
}
