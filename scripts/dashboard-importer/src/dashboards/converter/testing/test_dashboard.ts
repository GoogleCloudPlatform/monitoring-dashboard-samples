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

export const TEST_GENERIC_DASHBOARD: GrafanaDashboard = {
  annotations: {
    list: [
      {
        builtIn: 1,
        datasource: '-- Grafana --',
        enable: true,
        hide: true,
        iconColor: 'rgba(0, 211, 255, 1)',
        name: 'Annotations & Alerts',
        target: {
          limit: 100,
          matchAny: false,
          tags: [],
          type: 'dashboard',
        },
        type: 'dashboard',
      },
    ],
  },
  editable: true,
  fiscalYearStartMonth: 0,
  graphTooltip: 0,
  id: 30,
  links: [],
  liveNow: false,
  panels: [
    {
      datasource: {
        type: 'prometheus',
        uid: 'P1809F7CD0C75ACF3',
      },
      fieldConfig: {
        defaults: {
          color: {
            mode: 'palette-classic',
          },
          custom: {
            axisLabel: '',
            axisPlacement: 'auto',
            barAlignment: 0,
            drawStyle: 'line',
            fillOpacity: 0,
            gradientMode: 'none',
            hideFrom: {
              legend: false,
              tooltip: false,
              viz: false,
            },
            lineInterpolation: 'linear',
            lineWidth: 1,
            pointSize: 5,
            scaleDistribution: {
              type: 'linear',
            },
            showPoints: 'auto',
            spanNulls: false,
            stacking: {
              group: 'A',
              mode: 'none',
            },
            thresholdsStyle: {
              mode: 'off',
            },
          },
          mappings: [],
          thresholds: {
            mode: 'absolute',
            steps: [
              {
                color: 'green',
                value: null,
              },
              {
                color: 'red',
                value: 80,
              },
            ],
          },
        },
        overrides: [],
      },
      gridPos: {
        h: 9,
        w: 12,
        x: 0,
        y: 0,
      },
      id: 2,
      options: {
        legend: {
          calcs: [],
          displayMode: 'list',
          placement: 'bottom',
        },
        tooltip: {
          mode: 'single',
        },
      },
      targets: [
        {
          datasource: {
            type: 'prometheus',
            uid: 'P1809F7CD0C75ACF3',
          },
          exemplar: true,
          expr: 'rate(node_cpu_seconds_total{mode="idle"}[${__interval}])',
          interval: '',
          legendFormat: '',
          refId: 'A',
        },
      ],
      title: 'Test Time Series',
      type: 'timeseries',
    },
    {
      datasource: {
        type: 'prometheus',
        uid: 'P1809F7CD0C75ACF3',
      },
      fieldConfig: {
        defaults: {
          color: {
            mode: 'palette-classic',
          },
          custom: {
            axisLabel: '',
            axisPlacement: 'auto',
            barAlignment: 0,
            drawStyle: 'line',
            fillOpacity: 0,
            gradientMode: 'none',
            hideFrom: {
              legend: false,
              tooltip: false,
              viz: false,
            },
            lineInterpolation: 'linear',
            lineWidth: 1,
            pointSize: 5,
            scaleDistribution: {
              type: 'linear',
            },
            showPoints: 'auto',
            spanNulls: false,
            stacking: {
              group: 'A',
              mode: 'normal',
            },
            thresholdsStyle: {
              mode: 'off',
            },
          },
          mappings: [],
          thresholds: {
            mode: 'absolute',
            steps: [
              {
                color: 'green',
                value: null,
              },
              {
                color: 'red',
                value: 80,
              },
            ],
          },
        },
        overrides: [],
      },
      gridPos: {
        h: 9,
        w: 12,
        x: 12,
        y: 0,
      },
      id: 9,
      options: {
        legend: {
          calcs: [],
          displayMode: 'list',
          placement: 'bottom',
        },
        tooltip: {
          mode: 'single',
        },
      },
      targets: [
        {
          datasource: {
            type: 'prometheus',
            uid: 'P1809F7CD0C75ACF3',
          },
          exemplar: true,
          expr: 'rate(node_cpu_seconds_total{mode="idle"}[${__interval}])',
          interval: '',
          legendFormat: '',
          refId: 'A',
        },
      ],
      title: 'Test Stacked Area Chart',
      type: 'timeseries',
    },
    {
      aliasColors: {},
      bars: false,
      dashLength: 10,
      dashes: false,
      datasource: {
        type: 'prometheus',
        uid: 'P1809F7CD0C75ACF3',
      },
      fill: 1,
      fillGradient: 0,
      gridPos: {
        h: 8,
        w: 9,
        x: 0,
        y: 9,
      },
      hiddenSeries: false,
      id: 8,
      legend: {
        avg: false,
        current: false,
        max: false,
        min: false,
        show: true,
        total: false,
        values: false,
      },
      lines: true,
      linewidth: 1,
      nullPointMode: 'null',
      options: {
        alertThreshold: true,
      },
      percentage: false,
      pluginVersion: '8.3.3',
      pointradius: 2,
      points: false,
      renderer: 'flot',
      seriesOverrides: [],
      spaceLength: 10,
      stack: false,
      steppedLine: false,
      targets: [
        {
          datasource: {
            type: 'prometheus',
            uid: 'P1809F7CD0C75ACF3',
          },
          exemplar: true,
          expr: 'rate(node_cpu_seconds_total{mode="idle"}[${__interval}])',
          interval: '',
          legendFormat: '',
          refId: 'A',
        },
      ],
      thresholds: [],
      timeRegions: [],
      title: 'Test Graph Old',
      tooltip: {
        shared: true,
        sort: 0,
        value_type: 'individual',
      },
      type: 'graph',
      xaxis: {
        mode: 'time',
        show: true,
        values: [],
      },
      yaxes: [
        {
          format: 'short',
          logBase: 1,
          show: true,
        },
        {
          format: 'short',
          logBase: 1,
          show: true,
        },
      ],
      yaxis: {
        align: false,
      },
    },
    {
      datasource: {
        type: 'prometheus',
        uid: 'P1809F7CD0C75ACF3',
      },
      fieldConfig: {
        defaults: {
          color: {
            mode: 'thresholds',
          },
          mappings: [],
          thresholds: {
            mode: 'absolute',
            steps: [
              {
                color: 'green',
                value: null,
              },
              {
                color: 'red',
                value: 80,
              },
            ],
          },
        },
        overrides: [],
      },
      gridPos: {
        h: 8,
        w: 7,
        x: 9,
        y: 9,
      },
      id: 5,
      options: {
        displayMode: 'gradient',
        orientation: 'auto',
        reduceOptions: {
          calcs: ['lastNotNull'],
          fields: '',
          values: false,
        },
        showUnfilled: true,
      },
      pluginVersion: '8.3.3',
      targets: [
        {
          datasource: {
            type: 'prometheus',
            uid: 'P1809F7CD0C75ACF3',
          },
          exemplar: true,
          expr: 'rate(node_cpu_seconds_total{mode="idle"}[${__interval}])',
          interval: '',
          legendFormat: '',
          refId: 'A',
        },
      ],
      title: 'Test Bar Gauge',
      type: 'bargauge',
    },
    {
      datasource: {
        type: 'prometheus',
        uid: 'P1809F7CD0C75ACF3',
      },
      fieldConfig: {
        defaults: {
          color: {
            mode: 'thresholds',
          },
          custom: {
            align: 'auto',
            displayMode: 'auto',
          },
          mappings: [],
          thresholds: {
            mode: 'absolute',
            steps: [
              {
                color: 'green',
                value: null,
              },
              {
                color: 'red',
                value: 80,
              },
            ],
          },
        },
        overrides: [],
      },
      gridPos: {
        h: 8,
        w: 8,
        x: 16,
        y: 9,
      },
      id: 3,
      options: {
        footer: {
          fields: '',
          reducer: ['sum'],
          show: false,
        },
        showHeader: true,
      },
      pluginVersion: '8.3.3',
      targets: [
        {
          datasource: {
            type: 'prometheus',
            uid: 'P1809F7CD0C75ACF3',
          },
          exemplar: true,
          expr: 'rate(node_cpu_seconds_total{mode="idle"}[${__interval}])',
          interval: '',
          legendFormat: '',
          refId: 'A',
        },
      ],
      title: 'Test Table',
      type: 'table',
    },
    {
      datasource: {
        type: 'prometheus',
        uid: 'P1809F7CD0C75ACF3',
      },
      fieldConfig: {
        defaults: {
          color: {
            mode: 'thresholds',
          },
          mappings: [],
          thresholds: {
            mode: 'absolute',
            steps: [
              {
                color: 'green',
                value: null,
              },
              {
                color: 'red',
                value: 80,
              },
            ],
          },
        },
        overrides: [],
      },
      gridPos: {
        h: 8,
        w: 7,
        x: 0,
        y: 17,
      },
      id: 11,
      options: {
        orientation: 'auto',
        reduceOptions: {
          calcs: ['lastNotNull'],
          fields: '',
          values: false,
        },
        showThresholdLabels: false,
        showThresholdMarkers: true,
      },
      pluginVersion: '8.3.3',
      targets: [
        {
          datasource: {
            type: 'prometheus',
            uid: 'P1809F7CD0C75ACF3',
          },
          exemplar: true,
          expr: '(sum(node_memory_MemFree_bytes{}) / sum(node_memory_MemTotal_bytes{})) * 100',
          interval: '',
          legendFormat: '',
          refId: 'A',
        },
      ],
      title: 'Test Gauge Chart',
      type: 'gauge',
    },
    {
      datasource: {
        type: 'prometheus',
        uid: 'P1809F7CD0C75ACF3',
      },
      fieldConfig: {
        defaults: {
          color: {
            mode: 'thresholds',
          },
          mappings: [],
          thresholds: {
            mode: 'absolute',
            steps: [
              {
                color: 'green',
                value: null,
              },
              {
                color: 'red',
                value: 80,
              },
            ],
          },
        },
        overrides: [],
      },
      gridPos: {
        h: 8,
        w: 9,
        x: 7,
        y: 17,
      },
      id: 12,
      options: {
        colorMode: 'value',
        graphMode: 'area',
        justifyMode: 'auto',
        orientation: 'auto',
        reduceOptions: {
          calcs: ['lastNotNull'],
          fields: '',
          values: false,
        },
        textMode: 'auto',
      },
      pluginVersion: '8.3.3',
      targets: [
        {
          datasource: {
            type: 'prometheus',
            uid: 'P1809F7CD0C75ACF3',
          },
          exemplar: true,
          expr: '(sum(node_memory_MemFree_bytes{}) / sum(node_memory_MemTotal_bytes{})) * 100',
          interval: '',
          legendFormat: '',
          refId: 'A',
        },
      ],
      title: 'Test Stat',
      type: 'stat',
    },
    {
      gridPos: {
        h: 8,
        w: 8,
        x: 16,
        y: 17,
      },
      id: 7,
      options: {
        content: 'Test Text Content',
        mode: 'markdown',
      },
      pluginVersion: '8.3.3',
      title: 'Test Text',
      type: 'text',
    },
  ],
  schemaVersion: 34,
  style: 'dark',
  tags: [],
  templating: {
    list: [
      {
        current: {
          isNone: true,
          selected: false,
          text: 'None',
          value: '',
        },
        datasource: {
          type: 'prometheus',
          uid: 'P1809F7CD0C75ACF3',
        },
        definition: 'label_values(kube_node_info, cluster)',
        hide: 0,
        includeAll: false,
        label: 'testLabel',
        multi: false,
        name: 'testTv',
        options: [],
        query: {
          query: 'label_values(kube_node_info, cluster)',
          refId: 'StandardVariableQuery',
        },
        refresh: 1,
        regex: '',
        skipUrlSync: false,
        sort: 0,
        type: 'query',
      },
      {
        current: {
          isNone: true,
          selected: false,
          text: ['all'],
          value: ['$__all'],
        },
        datasource: {
          type: 'prometheus',
          uid: 'P1809F7CD0C75ACF3',
        },
        definition: 'label_values(kubernetes_io_hostname)',
        hide: 0,
        includeAll: false,
        label: 'testNodeLabel',
        multi: false,
        name: 'testNodeTv',
        options: [],
        query: {
          query: 'label_values(kubernetes_io_hostname)',
          refId: 'StandardVariableQuery',
        },
        refresh: 1,
        regex: '',
        skipUrlSync: false,
        sort: 0,
        type: 'query',
      }
    ],
  },
  time: {
    from: 'now-6h',
    to: 'now',
  },
  timepicker: {},
  timezone: '',
  title: 'Test Dashboard',
  uid: '3zQsc-zSk',
  version: 1,
  weekStart: '',
} as unknown as GrafanaDashboard;
