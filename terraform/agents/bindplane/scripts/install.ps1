# Injecting environment variables

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

$serviceName = 'bpagent'

# exit early if bpagent is already installed, otherwise it will install
# over itself and polute the agents page in the BindPlane UI
If (Get-Service $serviceName -ErrorAction SilentlyContinue) {
    exit 0
}

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$env:SECRET_KEY = '${secret_key}'
Invoke-Expression ((New-Object net.webclient).DownloadString('${endpoint}')); BindPlane-Agent-Install  --accept_defaults