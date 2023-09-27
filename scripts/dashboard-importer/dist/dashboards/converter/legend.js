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
exports.replaceDoubleBraces = void 0;
/**
 * Grafana legends follow the format of {{var}}
 * Cloud ops legends using prometheus metrics follow the form ${labels.var}
 */
function replaceDoubleBraces(legend) {
    return legend.replace(/{{(.+?)}}/g, (_, legendVar) => `$\{labels.${legendVar.trim()}}`);
}
exports.replaceDoubleBraces = replaceDoubleBraces;
//# sourceMappingURL=legend.js.map