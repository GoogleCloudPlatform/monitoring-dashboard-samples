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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const report_1 = require("../common/report");
const logger_1 = require("../common/logger");
const converter_1 = __importDefault(require("./converter/converter"));
/**
 * Calls the correct converter function based on arguments, generates reports
 * and prints logs
 */
function handleDashboardsCommand(jsonFilePath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!jsonFilePath) {
            (0, logger_1.logInfo)('No input JSON file path was received');
            process.exit(9);
        }
        const report = (0, report_1.generateEmptyReport)(jsonFilePath);
        const outputPath = report.outputPath;
        if (!fs.existsSync(outputPath)) {
            fs.mkdirSync(outputPath, { recursive: true });
        }
        if (fs.lstatSync(jsonFilePath).isDirectory()) {
            const formattedFilePath = jsonFilePath.slice(-1) === '/' ? jsonFilePath : `${jsonFilePath}/`;
            const results = yield convertAllDashboardsInDirectory(formattedFilePath, report);
            report.results = [...results];
        }
        else if (jsonFilePath.endsWith('.json')) {
            const fileName = jsonFilePath.replace(/^.*[\\\/]/, '');
            const filePath = jsonFilePath.split(fileName)[0];
            const result = yield convertSingleDashboard(filePath, fileName, report);
            report.results.push(result);
        }
        else {
            throw new Error(`Path ${jsonFilePath} is not a directory or a json file.`);
        }
        const jsonFilepath = `${outputPath}report.json`;
        const jsonString = JSON.stringify(report, null, 4);
        fs.writeFileSync(jsonFilepath, jsonString);
        (0, logger_1.logInfo)(`\nConversion of ${report.sourcePath} complete. Conversion Report located at: \x1b[34m${outputPath}report.json\x1b[0m`);
        (0, logger_1.logInfo)(`\n\nTo upload these dashboard(s) manually, you can run: \n\x1b[34m./upload.sh ${outputPath} <PROJECT_ID>\x1b[0m\n`);
    });
}
exports.default = handleDashboardsCommand;
// Converts all the dashboards jsons in a given directory
function convertAllDashboardsInDirectory(filePath, report) {
    return __awaiter(this, void 0, void 0, function* () {
        const files = fs.readdirSync(filePath);
        const jsonFileNames = files.filter((fileName) => fileName.endsWith('.json'));
        const results = [];
        for (const jsonFileName of jsonFileNames) {
            results.push(yield convertSingleDashboard(filePath, jsonFileName, report));
        }
        return results;
    });
}
// Converts a single dashboard json
function convertSingleDashboard(filePath, fileName, report) {
    return __awaiter(this, void 0, void 0, function* () {
        const jsonFilePath = `${filePath}${fileName}`;
        const jsonFileContents = fs.readFileSync(jsonFilePath);
        const dashboard = JSON.parse(jsonFileContents.toString());
        const conversionResult = {
            displayName: dashboard.title,
            sourcePath: jsonFilePath,
            warnings: [],
            errors: [],
        };
        let converted = null;
        try {
            const converter = new converter_1.default(dashboard);
            converter.convert();
            converted = converter.converted;
            const fileNameLabel = getSystemFileNameLabel(fileName);
            if ((converted === null || converted === void 0 ? void 0 : converted.labels) && fileNameLabel) {
                converted.labels[fileNameLabel] = '';
            }
            conversionResult.warnings.push(...converter.warnings);
            conversionResult.errors.push(...converter.errors);
        }
        catch (e) {
            (0, logger_1.logError)(`✘ ${dashboard.title} encountered an error, and was unable to be converted. Please see report for full details.`);
            conversionResult.errors.push(e);
        }
        if (conversionResult.warnings.length) {
            (0, logger_1.logWarning)(`Conversion generated ${conversionResult.warnings.length} warnings, please see report for full details.`);
        }
        (0, logger_1.logSuccess)(`✓ ${dashboard.title} converted successfully`);
        const jsonFilepath = `${report.outputPath}${fileName}`;
        conversionResult.outputPath = jsonFilepath;
        const jsonString = JSON.stringify(converted, null, 4);
        fs.writeFileSync(jsonFilepath, jsonString);
        return conversionResult;
    });
}
function getSystemFileNameLabel(fileName) {
    if (fileName.indexOf('.json') === -1)
        return null;
    // Match against alphanumeric dash and underscore
    const match = (fileName.split('.json')[0] || '').match(/^[a-zA-Z0-9-_]+$/);
    if (match === null || match[0].length > 30)
        return null;
    return `goog-imported-grafana-file-name-${match[0]}`;
}
//# sourceMappingURL=cli.js.map