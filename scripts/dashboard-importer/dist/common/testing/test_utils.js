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
exports.runTests = void 0;
const logger_1 = require("../logger");
// Function that runs the list of provided tests and logs the status
function runTests(tests) {
    for (const test of tests) {
        const testName = test.name.replace(/([a-z])([A-Z])/g, '$1 $2');
        try {
            test();
            (0, logger_1.logSuccess)(`✔ ${testName} passed`);
        }
        catch (e) {
            (0, logger_1.logInfo)(e);
            (0, logger_1.logError)(`✘ ${testName} failed`);
        }
    }
}
exports.runTests = runTests;
//# sourceMappingURL=test_utils.js.map