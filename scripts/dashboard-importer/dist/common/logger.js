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
exports.logError = exports.logWarning = exports.logSuccess = exports.logInfo = void 0;
// Simple utilities to console logs in colors
// Basic Logging
function logInfo(message) {
    console.log(message);
}
exports.logInfo = logInfo;
// Log message in green
function logSuccess(message) {
    console.log(`\x1b[32m${message}\x1b[0m`);
}
exports.logSuccess = logSuccess;
// Log message in yellow
function logWarning(message) {
    console.log(`\x1b[33mWarning: ${message}\x1b[0m`);
}
exports.logWarning = logWarning;
// Log message in red
function logError(message) {
    console.log(`\x1b[31mERROR: ${message}\x1b[0m`);
}
exports.logError = logError;
//# sourceMappingURL=logger.js.map