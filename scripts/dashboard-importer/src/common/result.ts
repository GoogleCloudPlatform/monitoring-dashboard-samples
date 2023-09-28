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

// The common results type that allows us to include warnings and errors for each step of the conversion process
export interface Result<T> {
  result: T | null;
  warnings: string[]; // Smaller bypassable errors
  errors: string[]; // Large errors that break the importer
  isSuccess: boolean;
}

// Function that constructs a sucesss results object
export function success<T>(
  result: T,
  warnings: string[] = [],
  errors: string[] = [],
): Result<T> {
  return {
    result,
    warnings,
    errors,
    isSuccess: true,
  };
}

// Function that constructs an error results object
export function error<T>(errors: string[]): Result<T> {
  return {
    result: null,
    warnings: [],
    errors,
    isSuccess: false,
  };
}

// Function that constructs an warning results object
export function warning<T>(warnings: string[]): Result<T> {
  return {
    result: null,
    warnings,
    errors: [],
    isSuccess: false,
  };
}
