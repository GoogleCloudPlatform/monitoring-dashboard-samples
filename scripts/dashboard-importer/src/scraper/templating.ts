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

import {getGrafanaDashboards, tally} from './utils';

function getCommas(s: string): number {
  const len = s.replace(/\s*\{.*?\}\s*/g, '').replace(/[^,]/g, '').length;
  return len;
}
const querySummary: any = {}; // Count of each Query type
const queryValuesByType: any = {}; // Count of each query, grouped by query type

export function analyzeTemplates() {
  const dashboards = getGrafanaDashboards();
  const labelValuesFormat: any = {};
  const templateTypeSummary: any = {};
  const queryFormat: any = {};
  const queryNest: any = {};
  const labelValuesArgsCount: any = {};
  const schemaMap: any = {};

  for (const dashboard of dashboards) {
    tally(schemaMap, dashboard.schemaVersion);
    (dashboard.templating?.list || []).forEach((template: any) => {
      templateTypeSummary[template.type] =
        (templateTypeSummary[template.type] || 0) + 1;
      if (template.type === 'query') {
        if (template.query?.query) {
          const query = template.query?.query;
          tally(queryNest, 'nested');
          //console.log(template.query)
          if (typeof query === 'string') {
            tallyQuery(query, queryFormat);
            if (query.startsWith('label_values')) {
              tally(labelValuesArgsCount, getCommas(query).toString());
              tally(
                labelValuesFormat,
                (query.match(/,/g) || [].length).toString(),
              );
              querySummary[query] = (querySummary[query] || 0) + 1;
            }
          } else {
            tally(queryFormat, 'object');
          }
        } else {
          //console.log(template.query);
          tally(queryNest, 'unnested');
          if (typeof template.query === 'string') {
            tallyQuery(template.query, queryFormat);
            if (template.query.startsWith('label_values')) {
              tally(labelValuesArgsCount, getCommas(template.query).toString());
              querySummary[template.query] =
                (querySummary[template.query] || 0) + 1;
            }
          } else {
            tally(queryFormat, 'object');
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
    .sort((a: any, b: any) => b[1] - a[1])
    .forEach(([k, v]) => console.log(k));
}

export function tallyQuery(query: string, map: any) {
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
      tally(map, trackedQuery);

      if (!queryValuesByType[trackedQuery]) {
        queryValuesByType[trackedQuery] = {};
      }
      tally(queryValuesByType[trackedQuery], query);
      return;
    }
  }
  //console.log(query);
  tally(map, 'other');
}
