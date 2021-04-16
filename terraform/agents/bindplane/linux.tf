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

data "template_file" "bindplane-agent-linux" {
  template = file("${path.module}/scripts/install.sh")
  vars = {
    secret_key = var.secret_key
    endpoint   = "${local.base_endpoint}/${var.agent_version}/linux-amd64/installer/bpagent-installer.sh"
  }
}

resource "google_compute_instance" "debian10" {
  project      = var.project
  name         = "debian-10-bindplane-agent"
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

  metadata_startup_script = "${data.template_file.bindplane-agent-linux.rendered};"
}


output "linux-service-command" {
  value = "sudo systemctl status bpagent"
}
