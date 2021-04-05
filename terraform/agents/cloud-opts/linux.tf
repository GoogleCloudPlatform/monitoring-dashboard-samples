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

variable "script_endpoint_linux" {
  description = "The endpoint for the Linux agent script"
  type        = string
  default     = "https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh"
}

variable "agent_version_linux" {
  description = "The Linux Ops Agent version to install"
  type        = string
  default     = "1.0.2"
}

data "template_file" "google-cloud-opts-agent-linux" {
  template = file("${path.module}/scripts/install.sh")
  vars = {
    script_endpoint = var.script_endpoint_linux
    agent_version   = var.agent_version_linux
  }
}

resource "google_compute_instance" "debian10" {
  project      = var.project
  name         = "debian-10-opts-agent"
  machine_type = "e2-small"
  zone         = "us-east1-b"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-10"
    }
  }

  network_interface {
    network = "default"

    access_config {
      // Ephemeral IP
    }
  }

  metadata_startup_script = "${data.template_file.google-cloud-opts-agent-linux.rendered};"
}


output "linux-service-command" {
  value = "sudo systemctl status google-cloud-ops-agent*"
}
