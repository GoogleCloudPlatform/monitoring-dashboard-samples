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
exports.createGaugeChart = void 0;
// Creates a Gauge Widget
function createGaugeChart(title, expr, lower_bound = 0, upper_bound = 1) {
    return {
        scorecard: {
            gaugeView: {
                lowerBound: lower_bound,
                upperBound: upper_bound,
            },
            thresholds: [],
            timeSeriesQuery: {
                // figure out why some expressions are coming back empty
                prometheusQuery: expr === null || expr === void 0 ? void 0 : expr.expression,
            },
        },
        title: title,
    };
}
exports.createGaugeChart = createGaugeChart;
//# sourceMappingURL=gauge.js.map