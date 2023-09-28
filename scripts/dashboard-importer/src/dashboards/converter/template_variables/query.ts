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

import {DashboardFilter} from '../../../common/types/cloud_ops_types';
import {
  QueryObject,
  TemplateVariable,
} from '../../../common/types/grafana_types';
import {Result, warning} from '../../../common/result';
import {QueryTemplateVariableTypes} from './constants';
import {getDashboardFilterFromLabelKey} from './label_values';

/**
 * Gets the query string from the Grafana Template Variable query attribute
 * Query attribute can be either a string or a query object
 */
function unnestQuery(query: string | QueryObject): string {
  if (typeof query === 'string') {
    return query;
  }
  return query.query;
}

// Function for converting query type template variables
export function convertQueryTemplateVariable(
  templateVariable: TemplateVariable,
): Result<DashboardFilter> {
  const queryString = unnestQuery(templateVariable.query) || '';

  if (queryString.startsWith(QueryTemplateVariableTypes.LABEL_VALUES)) {
    return getDashboardFilterFromLabelKey(queryString, templateVariable);
  }

  return warning([
    `Template variable '${templateVariable.name}' was skipped because queries that start with '${queryString}' are not supported`,
  ]);
}
