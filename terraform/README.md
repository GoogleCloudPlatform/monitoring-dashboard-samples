# Using Terraform to deploy monitoring dashboards

This directory contains an example allow you to deploy Cloud Monitoring dashboards using [Terraform](https://www.terraform.io/). If it's your first time using Terraform on GCP, you can read the materials listed in the resource section below.

## Usage
The [dashboards](../dashboards) directory contains JSON examples for monitoring dashboards.

Under this directory, run the following commands and provide proper arguments:

```bash
terraform init
terraform plan
terraform apply
```

You can also provide the arguments directly in the CLI, for example:

```bash
terraform apply -var 'dashboard_json_file=../dashboards/storage/cloud-storage-monitoring.json' \
 -var 'project_id=[your_project_id]'
```

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| dashboard\_json\_file | The JSON file of the dashboard | string | n/a | yes |
| project\_id | The ID of the project in which the dashboard will be created | string | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| project\_id | The project in which the dashboard was created |
| resource\_id | The resource id for the dashboard |
| console\_link | The destination console URL for the dashboard |

## Resources:
* [Terraform - Getting Started with the Google Provide](https://www.terraform.io/docs/providers/google/guides/getting_started.html)
* [Terraform - Google monitoring dashboard](https://www.terraform.io/docs/providers/google/r/monitoring_dashboard.html)
* [Use the Dashboard API to build your own monitoring dashboard](https://cloud.google.com/blog/products/management-tools/cloud-monitoring-dashboards-using-an-api)
* [REST Resource: projects.dashboards](https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards)
* [Getting started with Terraform on Google Cloud Platform](https://cloud.google.com/community/tutorials/getting-started-on-gcp-with-terraform)
* [Additional Terraform examples](https://github.com/GoogleCloudPlatform/cloud-foundation-toolkit/blob/master/docs/terraform.md)
