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
exports.getDashboardFilterFromLabelKey = exports.getLabelKey = void 0;
const result_1 = require("../../../common/result");
const constants_1 = require("./constants");
// Utility functions for parsing TV queries that start with 'label_values'
//Removes the promql for a label_values query string
function removePromql(query) {
    return query.replace(/\s*\{.*?\}\s*/g, '');
}
// Gets the number of arguments in a label_values query string
function getNumArguments(query) {
    return removePromql(query).replace(/[^,]/g, '').length + 1;
}
// label_values can have one or two arguments, this gets the last argument
function getLastArgument(query) {
    var _a;
    return (_a = removePromql(query).split(',').at(-1)) === null || _a === void 0 ? void 0 : _a.split(')')[0].trim();
}
/**
 * Extracts the Label key from a 'label_values' query by parsing the query for
 * the last argument
 */
function getLabelKey(query) {
    var _a;
    const numArguments = getNumArguments(query);
    switch (numArguments) {
        case 1:
            return (0, result_1.success)(((_a = removePromql(query).split('(').at(-1)) === null || _a === void 0 ? void 0 : _a.split(')')[0].trim()) || '');
        case 2:
            const lastArgument = getLastArgument(query);
            if (lastArgument === undefined) {
                return (0, result_1.warning)([
                    `unable to get the last argument for label_value query ${query}`,
                ]);
            }
            return (0, result_1.success)(lastArgument);
        default:
            return (0, result_1.warning)([
                `label_value query ${query} had a number of arguments that is unsupported: ${numArguments}`,
            ]);
    }
}
exports.getLabelKey = getLabelKey;
/**
 * Constructs a dashboard filter from a query by extracting the label key and
 * figuring out if it's a resource or metric label
 */
function getDashboardFilterFromLabelKey(queryString, templateVariable) {
    var _a, _b;
    const labelKeyResult = getLabelKey(queryString);
    let labelKey = labelKeyResult.result;
    if (labelKey === 'kubernetes_io_hostname') {
        labelKey = 'node';
    }
    if (labelKey === null) {
        return (0, result_1.warning)(labelKeyResult.warnings);
    }
    const stringValue = typeof ((_a = templateVariable.current) === null || _a === void 0 ? void 0 : _a.value) === 'string' ?
        (_b = templateVariable.current) === null || _b === void 0 ? void 0 : _b.value :
        '';
    const dashboardFilter = {
        labelKey,
        templateVariable: templateVariable.name,
        stringValue,
        filterType: constants_1.RESOURCE_LABELS.includes(labelKey)
            ? 'RESOURCE_LABEL'
            : 'METRIC_LABEL',
    };
    // Some Grafana TVs have select all value option
    // We instead have a * value that is implicitly added.
    if (dashboardFilter.stringValue === '$__all') {
        dashboardFilter.stringValue = '';
    }
    return (0, result_1.success)(dashboardFilter, [...labelKeyResult.warnings], [...labelKeyResult.errors]);
}
exports.getDashboardFilterFromLabelKey = getDashboardFilterFromLabelKey;
//# sourceMappingURL=label_values.js.map