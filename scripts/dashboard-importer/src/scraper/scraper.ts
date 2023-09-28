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

import GrafanaDashboardConverter from '../dashboards/converter/converter';
import {getGrafanaDashboards, tally} from './utils';

const dashboards = getGrafanaDashboards();
const panelTypeMap: any = {};
const gridPosMap: any = {};
const panelsOrRows: any = {};
const rowsVersion: any = {};
const panelTypeVersionMap: any = {};
const scopedVarsMap: any = {};
const tvMap: any = {};
const legacySpanMap: any = {};
const legacyHeightMap: any = {};
export function dryRun() {
  let error = 0;
  let success = 0;
  for (const dashboard of dashboards) {
    try {
      const converter = new GrafanaDashboardConverter(dashboard);
      converter.convert();
      const converted = converter.converted;
      success++;
    } catch (e: any) {
      console.log(e);
      error++;
    }
  }
  console.log(success + ',' + error);
}
export function analyze() {
  for (const dashboard of dashboards) {
    tally(tvMap, ((dashboard.templating?.list || []).length > 0).toString());
    if (dashboard.panels?.length && dashboard.rows?.length) {
      tally(panelsOrRows, 'both');
    } else if (dashboard.panels?.length) {
      tally(panelsOrRows, 'panel');
    } else if (dashboard.rows?.length) {
      tally(panelsOrRows, 'rows');
      tally(rowsVersion, dashboard.schemaVersion);
    } else {
      tally(panelsOrRows, 'none');
    }

    (dashboard.rows || []).forEach((row: any) => {
      (row.panels || []).forEach((panel: any) => {
        if (panel.panels?.length || 0) {
          panel.panels.forEach((subpanel: any) => {
            tally(panelTypeMap, subpanel.type);
            tally(legacySpanMap, subpanel.span.toString());
            tally(legacyHeightMap, subpanel.height?.toString());

            tallyVersion(
              panelTypeVersionMap,
              subpanel.type,
              dashboard.schemaVersion,
            );
            tallyVersion(
              scopedVarsMap,
              (subpanel.scopedVars === undefined).toString(),
              dashboard.schemaVersion,
            );
          });
        }
        tally(panelTypeMap, panel.type);
        tallyVersion(panelTypeVersionMap, panel.type, dashboard.schemaVersion);
        tally(legacySpanMap, panel.span.toString());
        tally(legacyHeightMap, panel.height?.toString());

        tallyVersion(
          scopedVarsMap,
          (panel.scopedVars === undefined).toString(),
          dashboard.schemaVersion,
        );
      });
    });

    (dashboard.panels || []).forEach((panel: any) => {
      if (panel.panels?.length || 0) {
        panel.panels.forEach((subpanel: any) => {
          if (subpanel.target) {
            console.log(subpanel.targe);
          }
          tally(panelTypeMap, subpanel.type);
          tally(
            gridPosMap,
            (
              subpanel.gridPos?.x === undefined ||
              subpanel.gridPos?.y === undefined ||
              subpanel.gridPos?.h === undefined ||
              subpanel.gridPos?.w === undefined
            ).toString(),
          );
          tallyVersion(
            panelTypeVersionMap,
            subpanel.type,
            dashboard.schemaVersion,
          );
          tallyVersion(
            scopedVarsMap,
            (subpanel.scopedVars === undefined).toString(),
            dashboard.schemaVersion,
          );
        });
      }
      tally(
        gridPosMap,
        (
          panel.gridPos?.x === undefined ||
          panel.gridPos?.y === undefined ||
          panel.gridPos?.h === undefined ||
          panel.gridPos?.w === undefined
        ).toString(),
      );
      tally(panelTypeMap, panel.type);
      tallyVersion(
        scopedVarsMap,
        (panel.scopedVars === undefined).toString(),
        dashboard.schemaVersion,
      );
      tallyVersion(panelTypeVersionMap, panel.type, dashboard.schemaVersion);
    });
  }
  console.log('hello');
  console.log(legacyHeightMap);
  //Object.entries(panelTypeMap).sort((a:any,b:any) => b[1] - a[1]).forEach(x => console.log(x));
}

function tallyVersion(map: any, type: string, version: string) {
  if (!map[type]) {
    map[type] = {};
  }
  tally(map[type], version);
}
