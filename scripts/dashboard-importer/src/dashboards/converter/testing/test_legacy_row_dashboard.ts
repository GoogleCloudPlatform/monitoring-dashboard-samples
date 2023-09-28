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

import {GrafanaDashboard} from '../../../common/types/grafana_types';

export const TEST_LEGACY_ROW_DASHBOARD: GrafanaDashboard = {
  __inputs: [
    {
      name: 'DS_PROMETHEUS',
      label: 'Prometheus',
      description: '',
      type: 'datasource',
      pluginId: 'prometheus',
      pluginName: 'Prometheus',
    },
  ],
  id: null,
  title: 'Legacy Row Tester',
  description: 'Dashboard for testing legacy row layout',
  tags: [],
  style: 'dark',
  timezone: 'browser',
  editable: true,
  hideControls: false,
  sharedCrosshair: false,
  rows: [
    {
      collapse: false,
      editable: true,
      height: '225px',
      panels: [
        {
          datasource: '${DS_PROMETHEUS}',
          height: '150px',
          id: 6,
          span: 5,
          targets: [
            {
              expr: 'rate (container_cpu_usage_seconds_total{}[1m])',
              interval: '10s',
              intervalFactor: 1,
              refId: 'A',
              step: 10,
            },
          ],
          title: 'test tile 1',
          type: 'timeseries',
        },
        {
          datasource: '${DS_PROMETHEUS}',
          height: '150px',
          id: 6,
          span: 7,
          targets: [
            {
              expr: 'rate (container_cpu_usage_seconds_total{}[1m])',
              interval: '10s',
              intervalFactor: 1,
              refId: 'A',
              step: 10,
            },
          ],
          title: 'test tile 2',
          type: 'timeseries',
        },
        {
          datasource: '${DS_PROMETHEUS}',
          height: '180px',
          id: 6,
          span: 4,
          targets: [
            {
              expr: 'rate (container_cpu_usage_seconds_total{}[1m])',
              interval: '10s',
              intervalFactor: 1,
              refId: 'A',
              step: 10,
            },
          ],
          title: 'test tile 3',
          type: 'timeseries',
        },
        {
          datasource: '${DS_PROMETHEUS}',
          height: '180px',
          id: 6,
          span: 4,
          targets: [
            {
              expr: 'rate (container_cpu_usage_seconds_total{}[1m])',
              interval: '10s',
              intervalFactor: 1,
              refId: 'A',
              step: 10,
            },
          ],
          title: 'test tile 4',
          type: 'timeseries',
        },
        {
          datasource: '${DS_PROMETHEUS}',
          height: '180px',
          id: 6,
          span: 4,
          targets: [
            {
              expr: 'rate (container_cpu_usage_seconds_total{}[1m])',
              interval: '10s',
              intervalFactor: 1,
              refId: 'A',
              step: 10,
            },
          ],
          title: 'test tile 5',
          type: 'timeseries',
        },
        {
          datasource: '${DS_PROMETHEUS}',
          height: '250px',
          id: 6,
          span: 12,
          targets: [
            {
              expr: 'rate (container_cpu_usage_seconds_total{}[1m])',
              interval: '10s',
              intervalFactor: 1,
              refId: 'A',
              step: 10,
            },
          ],
          title: 'test tile 6',
          type: 'timeseries',
        },
      ],
      showTitle: false,
      title: 'Row Group',
    },
  ],
  templating: {
    list: [],
  },
  annotations: {
    list: [],
  },
  refresh: '10s',
  schemaVersion: 12,
  version: 0,
  links: [],
} as unknown as GrafanaDashboard;
