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

import {Panel, Row} from '../../../common/types/grafana_types';
import {DEFAULT_HEIGHT} from './constants';

/**
 * Grafana Dashboards use a legacy 'rows' attribute to store panels
 * Panels in the 'rows' attribute do not contain x, y, h, w
 *
 * This row attribute is used in Grafana schemas 12, 13, 14
 */

// Using row information parses and enriches legacy panels with x, y, h, w
export function parseRowPanels(rows: Row[]): Panel[] {
  let y = 0;
  const outputPanels: Panel[] = [];

  for (const row of rows) {
    // row height is in px and needs to be converted by dividing 30
    const rowH = Math.max(
      Math.ceil(parseInt(row.height, 10) / 30) || DEFAULT_HEIGHT,
      DEFAULT_HEIGHT,
    );
    const panels = row.panels || [];
    if (panels.length === 0) continue;

    let x = 0;
    let maxRowH = rowH;
    for (const panel of row.panels) {
      //Get the height on panel and if it doesn't exist fallback to row height
      const panelHeight = panel.height
        ? Math.max(Math.ceil(parseInt(panel.height, 10) / 30), DEFAULT_HEIGHT)
        : rowH;
      // span is the width attribute of legacy panels that range from 1 - 12
      const panelWidth = Math.floor(panel.span ? panel.span * 2 : 6);

      // If we can't accomdate the tile on the current row, move to next row
      if (x + panelWidth > 24) {
        y += maxRowH;
        maxRowH = rowH;
        x = 0;
      }

      const gridPos = {
        x,
        y,
        w: panelWidth,
        h: panelHeight,
      };
      panel.gridPos = gridPos;
      x += panelWidth;
      maxRowH = Math.max(panelHeight, maxRowH);
      outputPanels.push(panel);
    }
    y += maxRowH;
  }
  return outputPanels;
}
