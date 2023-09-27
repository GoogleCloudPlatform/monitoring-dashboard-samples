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
exports.createDashboardFilter = exports.interpolateExpression = exports.getTemplateVariableMap = void 0;
const result_1 = require("../../../common/result");
const constants_1 = require("./constants");
const query_1 = require("./query");
// Generates a map that contains template variable mappings
function getTemplateVariableMap(templating) {
    const interpolationMap = new Map();
    if (templating.enable === false) {
        return (0, result_1.success)(interpolationMap, [
            'Templating was skipped because templating.enable was false',
        ]);
    }
    const warnings = [];
    // iterates through the tv and sets the mapping depending on type
    for (const templateVariable of templating.list) {
        const type = templateVariable.type;
        const name = templateVariable.name;
        switch (type) {
            case 'query':
                interpolationMap.set(`$${name}`, `$\{${name}.value}`);
                interpolationMap.set(`$\{${name}}`, `$\{${name}.value}`);
                break;
            case 'interval':
                interpolationMap.set(`$${name}`, '${__interval}');
                interpolationMap.set(`$\{${name}}`, '${__interval}');
                break;
            default:
                warnings.push(`Template variable '${name}' was skipped because its type '${type}' is not supported`);
        }
    }
    return (0, result_1.success)(interpolationMap, warnings);
}
exports.getTemplateVariableMap = getTemplateVariableMap;
// Replaces template/global variables and unsupported properties in expression
// To be used as part of widget construction
function interpolateExpression(expr, templateVariableMap) {
    let interpolatedExpr = expr;
    // Interpolate global variables and unsupported properties
    for (const [key, value] of constants_1.GLOBAL_VARIABLE_MAP) {
        interpolatedExpr = interpolatedExpr.replaceAll(key, value);
    }
    // Interpolate template variables
    for (const [key, value] of templateVariableMap) {
        interpolatedExpr = interpolatedExpr.replaceAll(key, value);
    }
    // Post Processing
    // Handle edge case of interval variables being used to denote resolution
    interpolatedExpr = interpolatedExpr.replaceAll(`[$\{__interval}:$\{__interval}]`, `[$\{__interval}]`);
    return (0, result_1.success)(interpolatedExpr);
}
exports.interpolateExpression = interpolateExpression;
// Constructs a Cloud Ops Dashboard Filter given a Grafana Templating Object
function createDashboardFilter(templating) {
    const dashboardFilters = [];
    const warnings = [];
    for (const templateVariable of templating.list) {
        // query template variables are the only tv type that we support
        if (templateVariable.type !== 'query')
            continue;
        const result = (0, query_1.convertQueryTemplateVariable)(templateVariable);
        warnings.push(...result.warnings);
        if (result.result !== null) {
            dashboardFilters.push(result.result);
        }
    }
    return (0, result_1.success)(dashboardFilters, warnings);
}
exports.createDashboardFilter = createDashboardFilter;
//# sourceMappingURL=templating.js.map