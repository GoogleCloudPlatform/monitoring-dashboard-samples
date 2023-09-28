#!/usr/bin/env node
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

import runTestSuite from './test_suite';
import handleDashboardsCommand from './dashboards/cli';
import {logError} from './common/logger';

const [, , command, arg1]: string[] = process.argv;

switch (command) {
  case 'dashboards':
    const jsonFilePath = arg1;
    handleDashboardsCommand(jsonFilePath);
    break;
  case 'test':
    runTestSuite();
    break;
  default:
    logError(
      `invalid command: ${command}. Supported Commands are: 'dashboards' and 'test'`,
    );
    break;
}
