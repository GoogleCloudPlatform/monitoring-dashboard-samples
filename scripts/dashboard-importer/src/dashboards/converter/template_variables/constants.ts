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

// List of potential starting values of query strings
export enum QueryTemplateVariableTypes {
  LABEL_VALUES = 'label_values',
  QUERY_RESULT = 'query_result',
  LABEL_NAMES = 'label_names',
  // AWS Specific
  REGIONS = 'regions',
  DIMENSION_VALUES = 'dimension_values',
  DIMENSION_KEYS = 'dimension_keys',
  EC2_INSTANCE_ATTRIBUTE = 'ec2_instance_attribute',
  EBS_VOLUME_IDS = 'ebs_volume_ids',
  // AZURE Specific,
  RESOURCE_GROUPS = 'ResourceGroups',
  RESOURCE_NAMES = 'ResourceNames',
  // INFLUXDB Specific,
  FROM_BUCKET = 'from(bucket: v.defaultBucket)',
  SHOW_TAG_VALUES = 'SHOW TAG VALUES',
}

// static list of prometheus resource labels
// see: https://cloud.google.com/monitoring/api/resources#tag_prometheus_target
export const RESOURCE_LABELS = [
  'project_id',
  'location',
  'cluster',
  'namespace',
  'job',
  'instance',
];

// List of interpolatable Global Grafana Variables and unsupported properties
// See: https://grafana.com/docs/grafana/latest/dashboards/variables/add-template-variables/#global-variables
export const GLOBAL_VARIABLE_MAP = new Map<string, string>([
  [`$__rate_interval`, '${__interval}'],
  ['$__interval_ms', '${__interval}'],
  ['$__interval_ms', '${__interval}'],
  ['$__interval', '${__interval}'],
  // Unsupported Property conversions
  ['kubernetes_io_hostname', 'node'],
  ['pod_name', 'pod'],
]);
