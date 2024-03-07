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

// Simple utilities to console logs in colors

// Basic Logging
export function logInfo(message: string) {
  console.log(message);
}

// Log message in green
export function logSuccess(message: string) {
  console.log(`\x1b[32m${message}\x1b[0m`);
}

// Log message in yellow
export function logWarning(message: string) {
  console.log(`\x1b[33mWarning: ${message}\x1b[0m`);
}

// Log message in red
export function logError(message: string) {
  console.log(`\x1b[31mERROR: ${message}\x1b[0m`);
}
