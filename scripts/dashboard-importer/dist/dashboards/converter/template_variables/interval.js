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
const result_1 = require("../../../common/result");
function getIntervalMapping(tv) {
    var _a, _b, _c, _d;
    if (tv.type !== 'interval') {
        return (0, result_1.warning)([
            `getIntervalMapping received type ${tv.type} instead of interval`,
        ]);
    }
    const name = tv.name;
    const options = tv.options || [];
    const tvCurrentValue = typeof ((_a = tv.current) === null || _a === void 0 ? void 0 : _a.value) === 'string' ? (_b = tv.current) === null || _b === void 0 ? void 0 : _b.value : '';
    const selectedValue = ((_c = options.filter((option) => option.selected)[0]) === null || _c === void 0 ? void 0 : _c.value) ||
        tvCurrentValue ||
        ((_d = options[0]) === null || _d === void 0 ? void 0 : _d.value);
    if (selectedValue === undefined) {
        return (0, result_1.warning)([`No suitable mapping found for template variable ${name}`]);
    }
    if (selectedValue.startsWith('$')) {
        return (0, result_1.success)([name, '${__interval}']);
    }
    return (0, result_1.success)([name, selectedValue]);
}
//# sourceMappingURL=interval.js.map