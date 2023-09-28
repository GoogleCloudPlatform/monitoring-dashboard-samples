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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESOURCE_LABELS = exports.QueryTemplateVariableTypes = void 0;
// List of potential starting values of query strings
var QueryTemplateVariableTypes;
(function (QueryTemplateVariableTypes) {
    QueryTemplateVariableTypes["LABEL_VALUES"] = "label_values";
    QueryTemplateVariableTypes["QUERY_RESULT"] = "query_result";
    QueryTemplateVariableTypes["LABEL_NAMES"] = "label_names";
    // AWS Specific
    QueryTemplateVariableTypes["REGIONS"] = "regions";
    QueryTemplateVariableTypes["DIMENSION_VALUES"] = "dimension_values";
    QueryTemplateVariableTypes["DIMENSION_KEYS"] = "dimension_keys";
    QueryTemplateVariableTypes["EC2_INSTANCE_ATTRIBUTE"] = "ec2_instance_attribute";
    QueryTemplateVariableTypes["EBS_VOLUME_IDS"] = "ebs_volume_ids";
    // AZURE Specific,
    QueryTemplateVariableTypes["RESOURCE_GROUPS"] = "ResourceGroups";
    QueryTemplateVariableTypes["RESOURCE_NAMES"] = "ResourceNames";
    // INFLUXDB Specific,
    QueryTemplateVariableTypes["FROM_BUCKET"] = "from(bucket: v.defaultBucket)";
    QueryTemplateVariableTypes["SHOW_TAG_VALUES"] = "SHOW TAG VALUES";
})(QueryTemplateVariableTypes || (exports.QueryTemplateVariableTypes = QueryTemplateVariableTypes = {}));
// static list of prometheus resource labels
// see: https://cloud.google.com/monitoring/api/resources#tag_prometheus_target
exports.RESOURCE_LABELS = [
    'project_id',
    'location',
    'cluster',
    'namespace',
    'job',
    'instance',
];
//# sourceMappingURL=constants.js.map