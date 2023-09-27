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
exports.generateEmptyReport = exports.padZeros = exports.createReportId = exports.getDateString = void 0;
// Function that generates a date string for report directories
function getDateString(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
}
exports.getDateString = getDateString;
// Function that generates a time based report ID for a job
function createReportId(date) {
    const hour = padZeros(date.getHours());
    const minute = padZeros(date.getMinutes());
    const second = padZeros(date.getSeconds());
    return `${hour}:${minute}:${second}`;
}
exports.createReportId = createReportId;
// Function that pads a integer time with necessary leading zeros
function padZeros(num) {
    const s = num.toString();
    return s.length === 1 ? `0${s}` : s;
}
exports.padZeros = padZeros;
// Function that generates an empty report object based on the file path
function generateEmptyReport(jsonFilePath) {
    const date = new Date();
    const id = createReportId(date);
    const dateString = getDateString(date);
    const reportDateFilePath = `reports/${dateString}/`;
    const outputPath = `${reportDateFilePath}${id}/`;
    return {
        id,
        results: [],
        sourcePath: jsonFilePath,
        outputPath,
        date: dateString,
    };
}
exports.generateEmptyReport = generateEmptyReport;
//# sourceMappingURL=report.js.map