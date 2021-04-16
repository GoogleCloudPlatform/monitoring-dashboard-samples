# Deploying Cloud Opts Agent with Terraform

This directory serves as an example on how to leverage Terraform's [template_file](https://registry.terraform.io/providers/hashicorp/template/latest/docs/data-sources/file) to deploy the Ops Agent to Linux and Windows.

## Prerequisite

- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)
- [Terraform](https://www.terraform.io/downloads.html)
- run `gcloud auth login`
- run `gcloud auth application-default login`

## Usage

This example will deploy a Linux and Windows compute instance, with the Ops Agent install during deployment.

1. Deploy

```bash
terraform init
terraform plan -var project=<your project id>
terraform apply -var project=<your project id>
```

2. Test

Log into both compute instances and check the status of the cloud ops agent

Linux
```
sudo systemctl status google-cloud-ops-agent*
```

Windows (Powershell 'as Administrator')
```
Get-Service google-cloud-ops-agent
```

3. Cleanup

```
terraform destroy -var project=<your project id>
```
