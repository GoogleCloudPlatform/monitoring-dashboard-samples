
# Cloud Monitoring Dashboard Samples

This repository contains a samples that may be used with the [Cloud Monitoring Dashboards API](https://cloud.google.com/monitoring/dashboards/api-dashboard).

## How to use the samples

1. Check it out from GitHub.
    * There is no reason to fork it.
1. Use the [gcloud beta monitoring dashboards create](https://cloud.google.com/sdk/gcloud/reference/monitoring/dashboards/create) command to create the dashboard.  Make sure you replace the __[file-name.json]__ in the command:

```bash
gcloud beta monitoring dashboards create --config-from-file=[file_name.json]
```

Alternatively, you can run the following command via curl. Use the [projects.dashboards.create](https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards/create) to call the Dashboards API with the sample JSON and create a new dashboard.
Make sure you replace the __[project-id]__ and __[file-name.json]__ in the command:

```bash
curl -X POST -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
-H "Content-Type: application/json; charset=utf-8" \
https://monitoring.googleapis.com/v1/projects/[project-id]/dashboards -d @[file-name.json]
```

