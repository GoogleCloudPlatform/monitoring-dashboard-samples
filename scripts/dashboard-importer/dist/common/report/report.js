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
exports.padZeros = exports.getDateString = exports.createReportId = void 0;
function createReportId(date) {
    const hour = padZeros(date.getHours());
    const minute = padZeros(date.getMinutes());
    const second = padZeros(date.getSeconds());
    return `${hour}:${minute}:${second}`;
}
exports.createReportId = createReportId;
function getDateString(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}-${day}-${year}`;
}
exports.getDateString = getDateString;
function padZeros(num) {
    const s = num.toString();
    return s.length === 1 ? `0${s}` : s;
}
exports.padZeros = padZeros;
//# sourceMappingURL=report.js.map