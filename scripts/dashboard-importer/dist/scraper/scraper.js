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
exports.analyze = exports.dryRun = void 0;
const converter_1 = __importDefault(require("../dashboards/converter/converter"));
const utils_1 = require("./utils");
const dashboards = (0, utils_1.getGrafanaDashboards)();
const panelTypeMap = {};
const gridPosMap = {};
const panelsOrRows = {};
const rowsVersion = {};
const panelTypeVersionMap = {};
const scopedVarsMap = {};
const tvMap = {};
const legacySpanMap = {};
const legacyHeightMap = {};
function dryRun() {
    let error = 0;
    let success = 0;
    for (const dashboard of dashboards) {
        try {
            const converter = new converter_1.default(dashboard);
            converter.convert();
            const converted = converter.converted;
            success++;
        }
        catch (e) {
            console.log(e);
            error++;
        }
    }
    console.log(success + ',' + error);
}
exports.dryRun = dryRun;
function analyze() {
    var _a, _b, _c, _d, _e;
    for (const dashboard of dashboards) {
        (0, utils_1.tally)(tvMap, ((((_a = dashboard.templating) === null || _a === void 0 ? void 0 : _a.list) || []).length > 0).toString());
        if (((_b = dashboard.panels) === null || _b === void 0 ? void 0 : _b.length) && ((_c = dashboard.rows) === null || _c === void 0 ? void 0 : _c.length)) {
            (0, utils_1.tally)(panelsOrRows, 'both');
        }
        else if ((_d = dashboard.panels) === null || _d === void 0 ? void 0 : _d.length) {
            (0, utils_1.tally)(panelsOrRows, 'panel');
        }
        else if ((_e = dashboard.rows) === null || _e === void 0 ? void 0 : _e.length) {
            (0, utils_1.tally)(panelsOrRows, 'rows');
            (0, utils_1.tally)(rowsVersion, dashboard.schemaVersion);
        }
        else {
            (0, utils_1.tally)(panelsOrRows, 'none');
        }
        (dashboard.rows || []).forEach((row) => {
            (row.panels || []).forEach((panel) => {
                var _a, _b;
                if (((_a = panel.panels) === null || _a === void 0 ? void 0 : _a.length) || 0) {
                    panel.panels.forEach((subpanel) => {
                        var _a;
                        (0, utils_1.tally)(panelTypeMap, subpanel.type);
                        (0, utils_1.tally)(legacySpanMap, subpanel.span.toString());
                        (0, utils_1.tally)(legacyHeightMap, (_a = subpanel.height) === null || _a === void 0 ? void 0 : _a.toString());
                        tallyVersion(panelTypeVersionMap, subpanel.type, dashboard.schemaVersion);
                        tallyVersion(scopedVarsMap, (subpanel.scopedVars === undefined).toString(), dashboard.schemaVersion);
                    });
                }
                (0, utils_1.tally)(panelTypeMap, panel.type);
                tallyVersion(panelTypeVersionMap, panel.type, dashboard.schemaVersion);
                (0, utils_1.tally)(legacySpanMap, panel.span.toString());
                (0, utils_1.tally)(legacyHeightMap, (_b = panel.height) === null || _b === void 0 ? void 0 : _b.toString());
                tallyVersion(scopedVarsMap, (panel.scopedVars === undefined).toString(), dashboard.schemaVersion);
            });
        });
        (dashboard.panels || []).forEach((panel) => {
            var _a, _b, _c, _d, _e;
            if (((_a = panel.panels) === null || _a === void 0 ? void 0 : _a.length) || 0) {
                panel.panels.forEach((subpanel) => {
                    var _a, _b, _c, _d;
                    if (subpanel.target) {
                        console.log(subpanel.targe);
                    }
                    (0, utils_1.tally)(panelTypeMap, subpanel.type);
                    (0, utils_1.tally)(gridPosMap, (((_a = subpanel.gridPos) === null || _a === void 0 ? void 0 : _a.x) === undefined ||
                        ((_b = subpanel.gridPos) === null || _b === void 0 ? void 0 : _b.y) === undefined ||
                        ((_c = subpanel.gridPos) === null || _c === void 0 ? void 0 : _c.h) === undefined ||
                        ((_d = subpanel.gridPos) === null || _d === void 0 ? void 0 : _d.w) === undefined).toString());
                    tallyVersion(panelTypeVersionMap, subpanel.type, dashboard.schemaVersion);
                    tallyVersion(scopedVarsMap, (subpanel.scopedVars === undefined).toString(), dashboard.schemaVersion);
                });
            }
            (0, utils_1.tally)(gridPosMap, (((_b = panel.gridPos) === null || _b === void 0 ? void 0 : _b.x) === undefined ||
                ((_c = panel.gridPos) === null || _c === void 0 ? void 0 : _c.y) === undefined ||
                ((_d = panel.gridPos) === null || _d === void 0 ? void 0 : _d.h) === undefined ||
                ((_e = panel.gridPos) === null || _e === void 0 ? void 0 : _e.w) === undefined).toString());
            (0, utils_1.tally)(panelTypeMap, panel.type);
            tallyVersion(scopedVarsMap, (panel.scopedVars === undefined).toString(), dashboard.schemaVersion);
            tallyVersion(panelTypeVersionMap, panel.type, dashboard.schemaVersion);
        });
    }
    console.log('hello');
    console.log(legacyHeightMap);
    //Object.entries(panelTypeMap).sort((a:any,b:any) => b[1] - a[1]).forEach(x => console.log(x));
}
exports.analyze = analyze;
function tallyVersion(map, type, version) {
    if (!map[type]) {
        map[type] = {};
    }
    (0, utils_1.tally)(map[type], version);
}
//# sourceMappingURL=scraper.js.map