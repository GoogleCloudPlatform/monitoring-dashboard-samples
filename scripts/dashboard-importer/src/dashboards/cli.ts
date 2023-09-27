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

import * as fs from 'fs';
import {
  DashboardConversionResult,
  DashboardsConversionReport,
  createReportId,
  generateEmptyReport,
  getDateString,
} from '../common/report';
import {logError, logInfo, logSuccess, logWarning} from '../common/logger';
import GrafanaDashboardConverter from './converter/converter';
import {Dashboard} from '../common/types/cloud_ops_types';

/**
 * Calls the correct converter function based on arguments, generates reports
 * and prints logs
 */
export default async function handleDashboardsCommand(jsonFilePath: string) {
  if (!jsonFilePath) {
    logInfo('No input JSON file path was received');
    process.exit(9);
  }

  const report: DashboardsConversionReport = generateEmptyReport(jsonFilePath);
  const outputPath = report.outputPath;
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, {recursive: true});
  }

  if (fs.lstatSync(jsonFilePath).isDirectory()) {
    const results = await convertAllDashboardsInDirectory(jsonFilePath, report);
    report.results = [...results];
  } else if (jsonFilePath.endsWith('.json')) {
    const fileName = jsonFilePath.replace(/^.*[\\\/]/, '');
    const filePath = jsonFilePath.split(fileName)[0];
    const result = await convertSingleDashboard(filePath, fileName, report);
    report.results.push(result);
  } else {
    throw new Error(`Path ${jsonFilePath} is not a directory or a json file.`);
  }
  const jsonFilepath = `${outputPath}report.json`;
  const jsonString = JSON.stringify(report, null, 4);
  fs.writeFileSync(jsonFilepath, jsonString);
  logInfo(
    `\nConversion of ${report.sourcePath} complete. Conversion Report located at: \x1b[34m${outputPath}report.json\x1b[0m`,
  );
  logInfo(
    `\n\nTo upload these dashboard(s) manually, you can run: \n\x1b[34m./upload.sh ${outputPath} <PROJECT_ID>\x1b[0m\n`,
  );
}

// Converts all the dashboards jsons in a given directory
async function convertAllDashboardsInDirectory(
  filePath: string,
  report: DashboardsConversionReport,
): Promise<DashboardConversionResult[]> {
  const files = fs.readdirSync(filePath);
  const jsonFileNames = files.filter((fileName) => fileName.endsWith('.json'));
  const results: DashboardConversionResult[] = [];

  for (const jsonFileName of jsonFileNames) {
    results.push(await convertSingleDashboard(filePath, jsonFileName, report));
  }
  return results;
}

// Converts a single dashboard json
async function convertSingleDashboard(
  filePath: string,
  fileName: string,
  report: DashboardsConversionReport,
): Promise<DashboardConversionResult> {
  const jsonFilePath = `${filePath}${fileName}`;
  const jsonFileContents = fs.readFileSync(jsonFilePath);
  const dashboard = JSON.parse(jsonFileContents.toString());
  const conversionResult: DashboardConversionResult = {
    displayName: dashboard.title,
    sourcePath: jsonFilePath,
    warnings: [],
    errors: [],
  };

  let converted: Dashboard | null = null;

  try {
    const converter: GrafanaDashboardConverter = new GrafanaDashboardConverter(
      dashboard,
    );
    converter.convert();
    converted = converter.converted;
    const fileNameLabel = getSystemFileNameLabel(fileName);
    if (converted?.labels && fileNameLabel) {
      converted.labels[fileNameLabel] = ''
    }
    conversionResult.warnings.push(...converter.warnings);
    conversionResult.errors.push(...converter.errors);
  } catch (e) {
    logError(
      `✘ ${dashboard.title} encountered an error, and was unable to be converted. Please see report for full details.`,
    );
    conversionResult.errors.push(e as string);
  }

  if (conversionResult.warnings.length) {
    logWarning(
      `Conversion generated ${conversionResult.warnings.length} warnings, please see report for full details.`,
    );
  }
  logSuccess(`✓ ${dashboard.title} converted successfully`);
  const jsonFilepath = `${report.outputPath}${fileName}`;
  conversionResult.outputPath = jsonFilepath;
  const jsonString = JSON.stringify(converted, null, 4);

  fs.writeFileSync(jsonFilepath, jsonString);
  return conversionResult;
}

function getSystemFileNameLabel(fileName: string): string | null {
  if (fileName.indexOf('.json') === -1) return null;
  // Match against alphanumeric dash and underscore
  const match = (fileName.split('.json')[0] || '').match(/^[a-zA-Z0-9-_]+$/);
  if (match === null || match[0].length > 30) return null;
  return `goog-imported-grafana-file-name-${match[0]}`;
}
