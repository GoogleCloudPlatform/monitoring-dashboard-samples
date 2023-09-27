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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callCreateDashboard = void 0;
const monitoring_dashboards_1 = require("@google-cloud/monitoring-dashboards");
const ds = new monitoring_dashboards_1.DashboardsServiceClient();
// parent = 'projects/my-project', // Project to list dashboards for.
function callCreateDashboard(projectId, dashboard, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        // Construct request
        const request = {
            parent: `projects/${projectId}`,
            dashboard,
        };
        // Run request
        // Single any used here to circumvent nightmare of minor reconciling typing nuances
        const response = yield ds.createDashboard(request);
        const dashboardId = response[0].name.split('dashboards')[1];
        const url = `https://console.cloud.google.com/monitoring/dashboards/builder${dashboardId}?project=${projectId}`;
        yield callback(response, projectId);
        return { response, url };
    });
}
exports.callCreateDashboard = callCreateDashboard;
//# sourceMappingURL=gcloud.js.map