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
import {TemplateVariable} from '../../../common/types/grafana_types';
import {
  createDashboardFilter,
  getTemplateVariableMap,
  interpolateExpression,
} from './templating';
import {runTests} from '../../../common/testing/test_utils';

const POD_TV = createQueryTemplateVariable(
  'label_values(kube_pod_info{namespace=~"$namespace"}, pod)',
  'Pod',
);
const NODE_TV = createQueryTemplateVariable(
  'label_values(kubernetes_io_hostname)',
  'Node',
);
const NAMESPACE_TV = createQueryTemplateVariable(
  'label_values(namespace)',
  'Namespace',
);

function createTemplateVariable(
  partial: Partial<TemplateVariable>,
): TemplateVariable {
  return {
    current: {},
    datasource: '${DS_PROMETHEUS}',
    includeAll: false,
    name: '',
    options: [],
    query: '',
    type: 'query',
    refresh: false,
    allFormat: '',
    ...partial,
  };
}
function createQueryTemplateVariable(
  query: string,
  name: string,
): TemplateVariable {
  return createTemplateVariable({query, name, type: 'query'});
}

function TestCreateDashboardFilter() {
  const dashboardFilter = createDashboardFilter({
    list: [POD_TV, NODE_TV, NAMESPACE_TV],
  }).result;
  assert(dashboardFilter !== null);
  assert.deepStrictEqual(dashboardFilter[0], {
    labelKey: 'pod',
    templateVariable: 'Pod',
    stringValue: '',
    filterType: 'METRIC_LABEL',
  });

  assert.deepStrictEqual(dashboardFilter[1], {
    labelKey: 'node',
    templateVariable: 'Node',
    stringValue: '',
    filterType: 'METRIC_LABEL',
  });

  assert.deepStrictEqual(dashboardFilter[2], {
    labelKey: 'namespace',
    templateVariable: 'Namespace',
    stringValue: '',
    filterType: 'RESOURCE_LABEL',
  });
}

function TestGetTemplateVariableMap() {
  const tvMap = getTemplateVariableMap({
    list: [POD_TV, NODE_TV, NAMESPACE_TV],
  }).result;
  assert.deepStrictEqual(
    tvMap,
    new Map([
      ['$Pod', '${Pod.value}'],
      ['${Pod}', '${Pod.value}'],
      ['$Node', '${Node.value}'],
      ['${Node}', '${Node.value}'],
      ['$Namespace', '${Namespace.value}'],
      ['${Namespace}', '${Namespace.value}'],
    ]),
  );
}

function TestInterpolateExpression() {
  const tvMap = getTemplateVariableMap({
    list: [POD_TV, NODE_TV, NAMESPACE_TV],
  }).result;
  assert(tvMap !== null);
  const nodeExpression = interpolateExpression(
    'node_disk_io_time_seconds_total{kubernetes_io_hostname="$Node"}[2m]',
    tvMap,
  ).result;
  assert.strictEqual(
    nodeExpression,
    'node_disk_io_time_seconds_total{node="${Node.value}"}[2m]',
  );
}

function TestIntervalTemplateVariable() {
  const INTERVAL_TV = createTemplateVariable({
    type: 'interval',
    name: 'interval',
  });
  const RESOLUTION_TV = createTemplateVariable({
    type: 'interval',
    name: 'resolution',
  });
  const tvMap = getTemplateVariableMap({
    list: [INTERVAL_TV, RESOLUTION_TV, NAMESPACE_TV],
  }).result;
  assert(tvMap !== null);
  const intervalExpression = interpolateExpression(
    'sum(irate(container_network_receive_bytes_total{namespace=~"$Namespace"}[$interval:$resolution]))',
    tvMap,
  ).result;
  assert.strictEqual(
    intervalExpression,
    'sum(irate(container_network_receive_bytes_total{namespace=~"${Namespace.value}"}[${__interval}]))',
  );
}

export default function Test() {
  runTests([
    TestCreateDashboardFilter,
    TestGetTemplateVariableMap,
    TestInterpolateExpression,
    TestIntervalTemplateVariable,
  ]);
}
