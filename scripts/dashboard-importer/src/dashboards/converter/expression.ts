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

import {Result, success} from '../../common/result';
import {Expression} from '../../common/types/cloud_ops_types';
import {Target} from '../../common/types/grafana_types';
import {replaceDoubleBraces} from './legend';
import {interpolateExpression} from './template_variables/templating';

// Extracts expression from the panel target and interpolates template vars
export function getExpressions(
  targets: Target[],
  panelTitle: string,
  templateVariables = new Map<string, string>(),
): Result<Expression[]> {
  const expressions: Expression[] = [];
  const warnings = [];
  let index = 0;
  for (const target of targets) {
    if (target.expr === undefined) {
      warnings.push(
        `panel ${panelTitle} target at index ${index} does not have an expression`,
      );
      continue;
    }
    const interpolationAttempt = interpolateExpression(
      target.expr,
      templateVariables,
    );
    warnings.push(
      ...interpolationAttempt.warnings.map(
        (warning: string) => `panel ${panelTitle}: ${warning}`,
      ),
    );
    const expr = interpolationAttempt.result;
    if (expr) {
      const legend = replaceDoubleBraces(target.legendFormat || '');
      expressions.push({
        expression: convertMatchToRegexMatch(expr),
        legend: legend
      });
    }
    index++;
  }
  return success(expressions, warnings);
}


/**
 * Function replaces regular matches with TVs with regex match
 */
export function convertMatchToRegexMatch(expression: String) {
  // this regex matches against 3 groups
  // $1 expression lhs - non-whitespace characters and trailing white space
  // $2 = - an equal sign
  // $3 expression rhs - text that starts with $ in quotes
  return expression.replaceAll(/(\w+\s*)(=)(\s*"\$[^\s\"]+")/g, '$1=~$3');
}
