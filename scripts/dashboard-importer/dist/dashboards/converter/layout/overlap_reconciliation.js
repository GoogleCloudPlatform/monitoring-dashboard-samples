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
// Contains Utility Functions for Tile Overlap Reconciliation
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGrid = exports.getYOffsetToFit = void 0;
/**
 *  This algorithm returns what the yOffset should be to prevent overlaps
 *
 *  The function calculates this by seeing if the slated tile has any overlaps
 *  and repeatedly shifting vertically down until the overlap is reconciled
 */
function getYOffsetToFit(gridPos, // Grid Position of panel that is we're trying to add
grid, // Grid of occupied string coordinates
yOffSet) {
    const { x: xPos, y: yPos, h: height, w: width } = gridPos;
    let newYOffSet = yOffSet;
    let overlapping = true;
    while (overlapping) {
        let succeeded = true;
        outer: for (let y = yPos; y < yPos + height; y++) {
            for (let x = xPos; x < xPos + width; x++) {
                // Check for overlap
                if (grid.has(x + ',' + (y + newYOffSet))) {
                    // If tiles overlap vertically offset all subsequent tiles by 1
                    newYOffSet++;
                    succeeded = false;
                    break outer;
                }
            }
        }
        if (succeeded) {
            overlapping = false;
        }
    }
    return newYOffSet;
}
exports.getYOffsetToFit = getYOffsetToFit;
/**
 * Checks if the slated tile has any overlaps and updates the grid if there are
 * no overlap
 *
 * Returns a boolean based on whether there were any overlaps
 */
function updateGrid(tile, grid) {
    const { xPos, yPos, width, height } = tile;
    for (let x = xPos; x < xPos + width; x++) {
        for (let y = yPos; y < yPos + height; y++) {
            const coordinate = `${x},${y}`;
            if (grid.has(coordinate)) {
                return false;
            }
        }
    }
    for (let x = xPos; x < xPos + width; x++) {
        for (let y = yPos; y < yPos + height; y++) {
            const coordinate = `${x},${y}`;
            grid.add(coordinate);
        }
    }
    return true;
}
exports.updateGrid = updateGrid;
//# sourceMappingURL=overlap_reconciliation.js.map