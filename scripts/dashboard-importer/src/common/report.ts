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

// Conversion Report for Converting One or More Dashboards
export interface DashboardsConversionReport {
  id: string; // ID of the conversion job
  results: DashboardConversionResult[]; // List of dashboard conversion results
  date: string; // YYYY-MM-DD
  sourcePath: string; // Input path or file argument
  outputPath: string; // Directory where the output files were generated
}

// Individual Dashboard Conversion Result
export interface DashboardConversionResult {
  sourcePath: string; // Where the input json came from
  outputPath?: string; // Where the converted json was outputed
  warnings: string[];
  displayName: string;
  errors: string[];
}

// Function that generates a date string for report directories
export function getDateString(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

// Function that generates a time based report ID for a job
export function createReportId(date: Date): string {
  const hour = padZeros(date.getHours());
  const minute = padZeros(date.getMinutes());
  const second = padZeros(date.getSeconds());
  return `${hour}:${minute}:${second}`;
}

// Function that pads a integer time with necessary leading zeros
export function padZeros(num: number): string {
  const s = num.toString();
  return s.length === 1 ? `0${s}` : s;
}

// Function that generates an empty report object based on the file path
export function generateEmptyReport(
  jsonFilePath: string,
): DashboardsConversionReport {
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
