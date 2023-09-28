#!/usr/bin/env node
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
const test_suite_1 = __importDefault(require("./test_suite"));
const cli_1 = __importDefault(require("./dashboards/cli"));
const logger_1 = require("./common/logger");
const [, , command, arg1] = process.argv;
switch (command) {
    case 'dashboards':
        const jsonFilePath = arg1;
        (0, cli_1.default)(jsonFilePath);
        break;
    case 'test':
        (0, test_suite_1.default)();
        break;
    default:
        (0, logger_1.logError)(`invalid command: ${command}. Supported Commands are: 'dashboards' and 'test'`);
        break;
}
//# sourceMappingURL=convert.js.map
