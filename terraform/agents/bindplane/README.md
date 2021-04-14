# Deploying BindPlane Agent with Terraform

This directory serves as an example on how to leverage Terraform's [template_file](https://registry.terraform.io/providers/hashicorp/template/latest/docs/data-sources/file) to deploy the BindPlanbe Agent to Linux and Windows.

[BindPlane](https://docs.bindplane.bluemedora.com/docs) is a service that Google Cloud user's can use to stream metrics and logs to Google Cloud. BindPlane does not add any additional cost, you are billed by Google for your metric / log ingestion the same way you would be if you used the Cloud Ops agent. [Click here to learn more](https://cloud.google.com/blog/products/management-tools/use-bluemedoras-bindplane-with-google-cloud).

## Prerequisite

- [BindPlane Account](https://bindplane.bluemedora.com/)
- BindPlane secret key
  - Go to Univeral Agents, Add agent, Linux, Copy the "SECRET_KEY" value
- [Gcloud SDK](https://cloud.google.com/sdk/docs/install)
- [Terraform](https://www.terraform.io/downloads.html)
- run `gcloud auth login`
- run `gcloud auth application-default login`


## Usage

This example will deploy a Linux and Windows compute instance, with the BindPlane Agent install during deployment.

1. Deploy

```bash
terraform init
terraform plan \
  -var project=<your project id> \
  -var secret_key=<your secret key>
terraform apply \
  -var project=<your project id> \
  -var secret_key=<your secret key>
```

2. Test

Log into both compute instances and check the status of the BindPlane agent. The BindPlane web interface will show both agents.

Linux
```
sudo systemctl status bpagent
```

Windows (Powershell 'as Administrator')
```
Get-Service bpagent
```

3. Cleanup

```
terraform destroy \
  -var project=<your project id> \
  -var secret_key=<your secret key>
```
