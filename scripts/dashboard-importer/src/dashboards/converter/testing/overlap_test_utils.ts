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

import {Tile} from '../../../common/types/cloud_ops_types';

// Checks whethers tiles have overlap
export function hasNoOverlap(tiles: Tile[]): boolean {
  for (let i = 0; i < tiles.length; i++) {
    for (let j = i + 1; j < tiles.length; j++) {
      const tile1 = tiles[i];
      const tile2 = tiles[j];
      if (doTilesOverlap(tile1, tile2)) {
        return false;
      }
    }
  }

  return true;
}

function doTilesOverlap(t1: Tile, t2: Tile): boolean {
  if (t1.xPos! >= t2.xPos! + t2.width! || t2.xPos! >= t1.xPos! + t1.width!) {
    return false;
  }

  if (t1.yPos! >= t2.yPos! + t2.height! || t2.yPos! >= t1.yPos! + t1.height!) {
    return false;
  }
  return true;
}
