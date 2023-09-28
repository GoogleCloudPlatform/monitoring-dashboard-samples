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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLabelKey = void 0;
const types_1 = require("../../types");
function removePromql(query) {
    return query.replace(/\s*\{.*?\}\s*/g, '');
}
function getNumArguments(query) {
    return removePromql(query).replace(/[^,]/g, '').length;
}
function getLastArgument(query) {
    var _a;
    return (_a = removePromql(query).split(',').at(-1)) === null || _a === void 0 ? void 0 : _a.split(')')[0].trim();
}
function getLabelKey(query) {
    const numArguments = getNumArguments(query);
    switch (numArguments) {
        case 1:
        case 2:
            const lastArgument = getLastArgument(query);
            if (lastArgument === undefined) {
                return (0, types_1.warning)([
                    `unable to get the last argument for label_value query ${query}`,
                ]);
            }
            return (0, types_1.success)(lastArgument);
        default:
            return (0, types_1.warning)([
                `label_value query ${query} had a number of arguments that is unsupported: ${numArguments}`,
            ]);
    }
}
exports.getLabelKey = getLabelKey;
//# sourceMappingURL=label_values.js.map