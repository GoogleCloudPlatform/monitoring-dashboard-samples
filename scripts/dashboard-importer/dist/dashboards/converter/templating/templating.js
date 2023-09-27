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
exports.convertQueryTemplateVariable = exports.convertTemplating = exports.getTemplateVariableMap = exports.interpolateExpression = void 0;
const types_1 = require("../../types");
const constants_1 = require("./constants");
const label_values_1 = require("./label_values");
// To be used as part of widget construction
function interpolateExpression(expr, templateVariableMap) {
    let interpolatedExpr = expr;
    for (const [key, value] of templateVariableMap) {
        interpolatedExpr = interpolatedExpr.replaceAll(key, value);
    }
    return (0, types_1.success)(interpolatedExpr);
}
exports.interpolateExpression = interpolateExpression;
// Generates a map that contains template variable conversions
function getTemplateVariableMap(templating) {
    const interpolationMap = new Map();
    if (templating.enable === false) {
        return (0, types_1.success)(interpolationMap, ['Templating was skipped because templating.enabled was false']);
    }
    const warnings = [];
    for (const templateVariable of templating.list) {
        const type = templateVariable.type;
        const name = templateVariable.name;
        switch (type) {
            case "query":
                interpolationMap.set(`$${name}`, `$\{${name}.value}`);
                interpolationMap.set(`$\{${name}}`, `$\{${name}.value}`);
                break;
            case "interval":
                interpolationMap.set(`$${name}`, '${__interval}');
                interpolationMap.set(`$\{${name}}`, '${__interval}');
                break;
            default:
                warnings.push(`${type} template variable with name ${name} was skipped because it's type was not supported`);
        }
    }
    return (0, types_1.success)(interpolationMap, warnings);
}
exports.getTemplateVariableMap = getTemplateVariableMap;
function convertTemplating(templating) {
    const dashboardFilters = [];
    const warnings = [];
    for (const templateVariable of templating.list) {
        if (templateVariable.type !== 'query')
            continue;
        const result = convertQueryTemplateVariable(templateVariable);
        warnings.push(...result.warnings);
        if (result.result !== null) {
            dashboardFilters.push(result.result);
        }
    }
    return (0, types_1.success)(dashboardFilters, warnings);
}
exports.convertTemplating = convertTemplating;
function unnestQuery(query) {
    if (typeof query === 'string') {
        return query;
    }
    return query.query;
}
function convertQueryTemplateVariable(templateVariable) {
    var _a;
    const queryString = unnestQuery(templateVariable.query);
    if (queryString.startsWith(constants_1.QueryTemplateVariableTypes.LABEL_VALUES)) {
        const labelKeyResult = (0, label_values_1.getLabelKey)(queryString);
        const labelKey = labelKeyResult.result;
        if (labelKey === null) {
            return (0, types_1.warning)(labelKeyResult.warnings);
        }
        const dashboardFilter = {
            labelKey,
            templateVariable: templateVariable.name,
            stringValue: ((_a = templateVariable.current) === null || _a === void 0 ? void 0 : _a.value) || "",
            filterType: constants_1.RESOURCE_LABELS.includes(labelKey)
                ? 'RESOURCE_LABEL'
                : 'METRIC_LABEL',
        };
        return (0, types_1.success)(dashboardFilter, [...labelKeyResult.warnings], [...labelKeyResult.errors]);
    }
    return (0, types_1.warning)([
        `Query ${queryString} is currently a template variable format that is unsupported and so was skipped`,
    ]);
}
exports.convertQueryTemplateVariable = convertQueryTemplateVariable;
//# sourceMappingURL=templating.js.map