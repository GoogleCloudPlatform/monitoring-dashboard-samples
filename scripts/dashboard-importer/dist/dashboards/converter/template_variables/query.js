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
exports.convertQueryTemplateVariable = void 0;
const result_1 = require("../../../common/result");
const constants_1 = require("./constants");
const label_values_1 = require("./label_values");
/**
 * Gets the query string from the Grafana Template Variable query attribute
 * Query attribute can be either a string or a query object
 */
function unnestQuery(query) {
    if (typeof query === 'string') {
        return query;
    }
    return query.query;
}
// Function for converting query type template variables
function convertQueryTemplateVariable(templateVariable) {
    const queryString = unnestQuery(templateVariable.query) || '';
    if (queryString.startsWith(constants_1.QueryTemplateVariableTypes.LABEL_VALUES)) {
        return (0, label_values_1.getDashboardFilterFromLabelKey)(queryString, templateVariable);
    }
    return (0, result_1.warning)([
        `Template variable '${templateVariable.name}' was skipped because queries that start with '${queryString}' are not supported`,
    ]);
}
exports.convertQueryTemplateVariable = convertQueryTemplateVariable;
//# sourceMappingURL=query.js.map