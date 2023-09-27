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
exports.createBasicChart = void 0;
// Creates a Basic Chart Widget (Line, Stacked Bar, Stacked Area)
function createBasicChart(plotType, title, expressions) {
    return {
        title: title,
        xyChart: {
            dataSets: expressions.map((expr) => ({
                plotType: plotType,
                timeSeriesQuery: {
                    prometheusQuery: expr === null || expr === void 0 ? void 0 : expr.expression,
                },
                legendTemplate: expr === null || expr === void 0 ? void 0 : expr.legend,
            })),
        },
    };
}
exports.createBasicChart = createBasicChart;
//# sourceMappingURL=chart.js.map