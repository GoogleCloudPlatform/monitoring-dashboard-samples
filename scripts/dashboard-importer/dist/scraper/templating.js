"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.tallyQuery = exports.analyzeTemplates = void 0;
const utils_1 = require("./utils");
function getCommas(s) {
    const len = s.replace(/\s*\{.*?\}\s*/g, '').replace(/[^,]/g, '').length;
    return len;
}
const querySummary = {}; // Count of each Query type
const queryValuesByType = {}; // Count of each query, grouped by query type
function analyzeTemplates() {
    var _a;
    const dashboards = (0, utils_1.getGrafanaDashboards)();
    const labelValuesFormat = {};
    const templateTypeSummary = {};
    const queryFormat = {};
    const queryNest = {};
    const labelValuesArgsCount = {};
    const schemaMap = {};
    for (const dashboard of dashboards) {
        (0, utils_1.tally)(schemaMap, dashboard.schemaVersion);
        (((_a = dashboard.templating) === null || _a === void 0 ? void 0 : _a.list) || []).forEach((template) => {
            var _a, _b;
            templateTypeSummary[template.type] =
                (templateTypeSummary[template.type] || 0) + 1;
            if (template.type === 'query') {
                if ((_a = template.query) === null || _a === void 0 ? void 0 : _a.query) {
                    const query = (_b = template.query) === null || _b === void 0 ? void 0 : _b.query;
                    (0, utils_1.tally)(queryNest, 'nested');
                    //console.log(template.query)
                    if (typeof query === 'string') {
                        tallyQuery(query, queryFormat);
                        if (query.startsWith('label_values')) {
                            (0, utils_1.tally)(labelValuesArgsCount, getCommas(query).toString());
                            (0, utils_1.tally)(labelValuesFormat, (query.match(/,/g) || [].length).toString());
                            querySummary[query] = (querySummary[query] || 0) + 1;
                        }
                    }
                    else {
                        (0, utils_1.tally)(queryFormat, 'object');
                    }
                }
                else {
                    //console.log(template.query);
                    (0, utils_1.tally)(queryNest, 'unnested');
                    if (typeof template.query === 'string') {
                        tallyQuery(template.query, queryFormat);
                        if (template.query.startsWith('label_values')) {
                            (0, utils_1.tally)(labelValuesArgsCount, getCommas(template.query).toString());
                            querySummary[template.query] =
                                (querySummary[template.query] || 0) + 1;
                        }
                    }
                    else {
                        (0, utils_1.tally)(queryFormat, 'object');
                    }
                }
            }
            if (template.type === 'interval') {
                console.log(template);
            }
        });
    }
    // console.log(schemaMap);
    //console.log(labelValuesArgsCount);
    //console.log(queryFormat)
    //console.log(Object.entries(querySummary).reduce((acc, curr: any) => {return acc + curr[1]}, 0));
    //console.log(queryNest)
    //Object.entries(querySummary).sort((a: any,b: any) => b[1] - a[1]).forEach(([k,v]) => console.log(k+ ", " +v));
    // console.log(Object.keys(querySummary).length);
    //console.log(templateTypeSummary);
    Object.entries(templateTypeSummary)
        .sort((a, b) => b[1] - a[1])
        .forEach(([k, v]) => console.log(k));
}
exports.analyzeTemplates = analyzeTemplates;
function tallyQuery(query, map) {
    const trackedQueries = [
        'label_values(',
        'query_result(',
        'regions(',
        'label_names(',
        // AWS Specific
        'dimension_values(',
        'dimension_keys(',
        'ec2_instance_attribute(',
        'ebs_volume_ids(',
        // AZURE Specific,
        'ResourceGroups',
        'ResourceNames',
        // INFLUXDB Specific,
        'from(bucket: v.defaultBucket)',
        'SHOW TAG VALUES',
    ];
    for (const trackedQuery of trackedQueries) {
        if (query.startsWith(trackedQuery)) {
            (0, utils_1.tally)(map, trackedQuery);
            if (!queryValuesByType[trackedQuery]) {
                queryValuesByType[trackedQuery] = {};
            }
            (0, utils_1.tally)(queryValuesByType[trackedQuery], query);
            return;
        }
    }
    //console.log(query);
    (0, utils_1.tally)(map, 'other');
}
exports.tallyQuery = tallyQuery;
//# sourceMappingURL=templating.js.map