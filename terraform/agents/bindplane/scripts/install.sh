#!/usr/bin/env bash
# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# exit early if bpagent is already installed, otherwise it will install
# over itself and polute the agents page in the BindPlane UI
sudo systemctl status bpagent
if [ $? = 0 ]; then
    # bpagent service exists
    exit 0
fi

curl -s ${endpoint} -o /tmp/agent.sh
sudo chmod +x /tmp/agent.sh
sudo /tmp/agent.sh \
    --accept-defaults \
    --secret-key ${secret_key}
