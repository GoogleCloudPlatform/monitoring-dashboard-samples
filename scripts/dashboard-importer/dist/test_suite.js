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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const templating_test_1 = __importDefault(require("./dashboards/converter/template_variables/templating_test"));
const converter_test_1 = __importDefault(require("./dashboards/converter/converter_test"));
function runTestSuite() {
    (0, templating_test_1.default)();
    (0, converter_test_1.default)();
}
exports.default = runTestSuite;
//# sourceMappingURL=test_suite.js.map