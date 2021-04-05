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

variable "script_endpoint_windows" {
  description = "The endpoint for the Windows agent script"
  type        = string
  default     = "https://packages.cloud.google.com/yuck/repos/google-cloud-ops-agent-windows-all"
}

variable "agent_version_windows" {
  // https://cloud.google.com/stackdriver/docs/solutions/ops-agent/installation#agent-install-latest-windows
  description = "The Windows Ops Agent version to install"
  type        = string
  default     = "1.0.1@1"
}

data "template_file" "google-cloud-opts-agent-windows" {
  template = file("${path.module}/scripts/install.ps1")
  vars = {
    scriptEndpoint = var.script_endpoint_windows
    agentVersion   = var.agent_version_windows
  }
}

/**

Caution: Windows requires more resources than Linux, this example uses a larger
instance type and ssd storage.

**/

resource "google_compute_instance" "windows2019" {
  project      = var.project
  name         = "windows-2019-opts-agent"
  machine_type = "n1-standard-1"
  zone         = "us-east1-b"

  boot_disk {
    initialize_params {
      image = "windows-cloud/windows-2019"
      type  = "pd-ssd"
      size  = "120"
    }
  }

  network_interface {
    network = "default"

    access_config {
      // Ephemeral IP
    }
  }

  metadata = {
    windows-startup-script-ps1 = "${data.template_file.google-cloud-opts-agent-windows.rendered}"
  }
}


output "windows-service-command" {
  value = "Get-Service google-cloud-ops-agent"
}
