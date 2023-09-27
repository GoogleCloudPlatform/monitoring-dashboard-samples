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
exports.MAX_TILE_COUNT = exports.MIN_HEIGHT = exports.DEFAULT_COLS = exports.DEFAULT_HEIGHT = void 0;
// Height of 3 is the shortest usable height for line charts
exports.DEFAULT_HEIGHT = 3;
// Default number of columns in row (by Grafana)
exports.DEFAULT_COLS = 24;
// Cloud ops tiles must have a height of 2 or more
exports.MIN_HEIGHT = 2;
// Maximum number of tiles for cloud ops
exports.MAX_TILE_COUNT = 40;
//# sourceMappingURL=constants.js.map