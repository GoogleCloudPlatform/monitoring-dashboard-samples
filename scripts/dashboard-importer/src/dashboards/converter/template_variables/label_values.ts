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

import {Result, success, warning} from '../../../common/result';
import {DashboardFilter} from '../../../common/types/cloud_ops_types';
import {TemplateVariable} from '../../../common/types/grafana_types';
import {RESOURCE_LABELS} from './constants';

// Utility functions for parsing TV queries that start with 'label_values'

//Removes the promql for a label_values query string
function removePromql(query: string): string {
  return query.replace(/\s*\{.*?\}\s*/g, '');
}

// Gets the number of arguments in a label_values query string
function getNumArguments(query: string): number {
  return removePromql(query).replace(/[^,]/g, '').length + 1;
}

// label_values can have one or two arguments, this gets the last argument
function getLastArgument(query: string): string | undefined {
  return removePromql(query).split(',').at(-1)?.split(')')[0].trim();
}

/**
 * Extracts the Label key from a 'label_values' query by parsing the query for
 * the last argument
 */
export function getLabelKey(query: string): Result<string> {
  const numArguments = getNumArguments(query);
  switch (numArguments) {
    case 1:
      return success(
        removePromql(query).split('(').at(-1)?.split(')')[0].trim() || '',
      );
    case 2:
      const lastArgument = getLastArgument(query);
      if (lastArgument === undefined) {
        return warning([
          `unable to get the last argument for label_value query ${query}`,
        ]);
      }
      return success(lastArgument);
    default:
      return warning([
        `label_value query ${query} had a number of arguments that is unsupported: ${numArguments}`,
      ]);
  }
}

/**
 * Constructs a dashboard filter from a query by extracting the label key and
 * figuring out if it's a resource or metric label
 */
export function getDashboardFilterFromLabelKey(
  queryString: string,
  templateVariable: TemplateVariable,
): Result<DashboardFilter> {
  const labelKeyResult = getLabelKey(queryString);
  let labelKey = labelKeyResult.result;
  if (labelKey === 'kubernetes_io_hostname') {
    labelKey = 'node';
  }
  if (labelKey === null) {
    return warning(labelKeyResult.warnings);
  }

  const stringValue = typeof templateVariable.current?.value === 'string' ?
      templateVariable.current?.value :
      '';

  const dashboardFilter: DashboardFilter = {
    labelKey,
    templateVariable: templateVariable.name,
    stringValue,
    filterType: RESOURCE_LABELS.includes(labelKey)
      ? 'RESOURCE_LABEL'
      : 'METRIC_LABEL',
  };

  // Some Grafana TVs have select all value option
  // We instead have a * value that is implicitly added.
  if (dashboardFilter.stringValue === '$__all') {
    dashboardFilter.stringValue = '';
  }

  return success(
    dashboardFilter,
    [...labelKeyResult.warnings],
    [...labelKeyResult.errors],
  );
}
