/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

variable "project" {
  description = "The GCP project to deploy to"
  type        = string
}

variable "agent_version" {
  description = "The Linux BindPlane Agent version to install"
  type        = string
  default     = "1.0.23"
}

variable "secret_key" {
  description = "The BindPlane account's secret key"
  type        = string
}

locals {
  base_endpoint = "https://storage.googleapis.com/bindplane-agent/bpagent"
}