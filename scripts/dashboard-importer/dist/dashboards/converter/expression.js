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
exports.convertMatchToRegexMatch = exports.getExpressions = void 0;
const result_1 = require("../../common/result");
const legend_1 = require("./legend");
const templating_1 = require("./template_variables/templating");
// Extracts expression from the panel target and interpolates template vars
function getExpressions(targets, panelTitle, templateVariables = new Map()) {
    const expressions = [];
    const warnings = [];
    let index = 0;
    for (const target of targets) {
        if (target.expr === undefined) {
            warnings.push(`panel ${panelTitle} target at index ${index} does not have an expression`);
            continue;
        }
        const interpolationAttempt = (0, templating_1.interpolateExpression)(target.expr, templateVariables);
        warnings.push(...interpolationAttempt.warnings.map((warning) => `panel ${panelTitle}: ${warning}`));
        const expr = interpolationAttempt.result;
        if (expr) {
            const legend = (0, legend_1.replaceDoubleBraces)(target.legendFormat || '');
            expressions.push({
                expression: convertMatchToRegexMatch(expr),
                legend: legend
            });
        }
        index++;
    }
    return (0, result_1.success)(expressions, warnings);
}
exports.getExpressions = getExpressions;
/**
 * Function replaces regular matches with TVs with regex match
 */
function convertMatchToRegexMatch(expression) {
    // this regex matches against 3 groups
    // $1 expression lhs - non-whitespace characters and trailing white space
    // $2 = - an equal sign
    // $3 expression rhs - text that starts with $ in quotes
    return expression.replaceAll(/(\w+\s*)(=)(\s*"\$[^\s\"]+")/g, '$1=~$3');
}
exports.convertMatchToRegexMatch = convertMatchToRegexMatch;
//# sourceMappingURL=expression.js.map