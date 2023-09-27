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

import {Result, success} from '../../../common/result';
import {Widget} from '../../../common/types/cloud_ops_types';
import {Panel, Target} from '../../../common/types/grafana_types';
import {getExpressions} from '../expression';
import {createBasicChart} from './chart';
import {createGaugeChart} from './gauge';
import {createPieChart} from './pie_chart';
import {createScoreCard} from './scorecard';
import {createTable} from './table';
import {createTextWidget} from './text';

// Checks against the panel type and then constructs the appropriate widget
export function constructWidget(
  panel: Panel,
  targets: Target[],
  templateVariables = new Map<string, string>(),
): Result<Widget> {
  const title = panel.title;
  const panelType = panel.type;
  const plotType =
    panel.stack ||
    ['normal', 'percent'].includes(
      panel.fieldConfig?.defaults?.custom?.stacking?.mode || '',
    )
      ? 'STACKED_AREA'
      : 'LINE';

  const expressionsResult = getExpressions(targets, title, templateVariables);
  const expressions = expressionsResult.result || [];
  const warnings = [];

  let widget: Widget;

  switch (panelType) {
    case 'gauge':
      widget = createGaugeChart(title, expressions[0], 0, 100);
      break;
    case 'singlestat':
      if (panel.gauge?.show) {
        widget = createGaugeChart(
          title,
          expressions[0],
          panel.gauge?.minValue,
          panel.gauge?.maxValue,
        );
        break;
      }
      widget = createScoreCard(title, expressions[0]);
      break;
    case 'stat':
      widget = createScoreCard(title, expressions[0]);
      break;
    case 'table':
    case 'table-old':
      widget = createTable(title, expressions[0]);
      break;
    case 'text':
      widget = createTextWidget(
        title,
        panel.options?.content || panel.content || '',
      );
      break;
    case 'timeseries':
      widget = createBasicChart(plotType, title, expressions);
      break;
    // Legacy Time Series
    case 'graph':
      widget = createBasicChart(plotType, title, expressions);
      break;
    // Legacy Bar Chart
    case 'bargauge':
      widget = createBasicChart('STACKED_BAR', title, expressions);
      break;
    case 'heatmap':
      widget = createBasicChart('HEATMAP', title, expressions);
      break;
    case 'piechart':
    case 'grafana-piechart-panel':
      widget = createPieChart(title, expressions[0], panel.options?.pieType);
      break;
    default:
      warnings.push(
        `${panel.title} has type '${panelType}' which is not supported for conversion and has been replaced with a line chart`,
      );
      widget = createBasicChart('LINE', title, expressions);
  }
  return success(widget, [...warnings, ...expressionsResult.warnings]);
}
