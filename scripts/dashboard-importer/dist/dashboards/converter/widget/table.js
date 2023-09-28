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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = void 0;
// Creates a Table Widget
function createTable(expressions) {
    return {
        timeSeriesTable: {
            columnSettings: [
                {
                    column: 'value',
                    visible: false,
                },
            ],
            dataSets: [
                ...expressions.map((expr) => ({
                    timeSeriesQuery: {
                        prometheusQuery: expr['expression'],
                    },
                    outputFullDuration: true,
                })),
            ],
            metricVisualization: 'NUMBER',
        },
    };
}
exports.createTable = createTable;
//# sourceMappingURL=table.js.map