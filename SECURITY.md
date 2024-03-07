Romeo Rosete
# Cloud Monitoring Dashboard Samples

This repository contains samples that may be used with the [Cloud Monitoring Dashboards API](https://cloud.google.com/monitoring/dashboards/api-dashboard).

## How to use the samples

1. Check it out from GitHub. For example, you can do it in Cloud Shell by clicking the button below:

    [![Open this project in Cloud
Shell](http://gstatic.com/cloudssh/images/open-btn.png)](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/GoogleCloudPlatform/monitoring-dashboard-samples.git)

1. Use these commands to import the dashboard.

    First, set your environment variables, replacing the following values with your values:

    *  PROJECT_ID you wish to import the dashboard to
    *  FILE_NAME with the input filename for the dashboard JSON config

    ```bash
    export PROJECT_ID=<PROJECT_ID>

    export FILE_NAME=<DASH_FILE_NAME>
    ```

1. Use the provided [script](scripts/dashboard/dashboard.sh) to create a dashboard.

    ```bash
    scripts/dashboard/dashboard.sh import $PROJECT_ID $FILE_NAME
    ```

Alternatively, you can run the following command via curl. Use the [projects.dashboards.create](https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards/create) to call the Dashboards API with the sample JSON and create a new dashboard.
Make sure you replace the __[project-id]__ and __[file-name.json]__ in the command:

```bash
curl -X POST -H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
https://monitoring.googleapis.com/v1/projects/[project-id]/dashboards -d @[file-name.json]
```

### Steps to get the JSON configuration

If you want to export a dashboard to a JSON file and share it, you can use the following steps.

1. Create the dashboard in the Monitoring UI (or even better, share one that you’ve already developed and used).

1. Open the dashboard and copy the dashboard ID from the URL (the string is in the URL after the /monitoring/dashboards/custom/ ˆprefix). For example, __10768789961894600977__ is the dashboard ID in the URL below:

    https://console.cloud.google.com/monitoring/dashboards/custom/10768789961894600977?project=sd-uxr-001&timeDomain=1h


1. Use these commands to export the JSON configuration for your dashboard.

    First, set your environment variables, replacing the following values with your values:

    *  DASH_ID with the dashboard ID copied from step #2
    *  PROJECT_ID with your project id that contains the dashboard
    *  FILE_NAME with the output filename for the dashboard JSON config

    ```bash
    export DASH_ID=<YOUR_DASH_ID>

    export PROJECT_ID=<PROJECT_ID>

    export FILE_NAME=<DASH_FILE_NAME>
    ```

1. Use the gcloud command line to export the dashboard to a JSON file.

    ```bash
    scripts/dashboard/dashboard.sh export $DASH_ID $PROJECT_ID $FILE_NAME
    ```

## Sample Dashboards Contributor Guidelines

### Screenshots

Please add a screenshot with your dashboard. All screenshots should live in the same directory as the sample dashboard specification.

### Filenames

If there is only a single screenshot, the name should match the dashboard specification but with a PNG extension. For example:

    cloudrun-monitoring.json
    cloudrun-monitoring.png

If there are multiple screenshots, a two digit number should be added between the name and file extension. For example:

    gke-cluster-monitoring.json
    gke-cluster-monitoring.01.png
    gke-cluster-monitoring.02.png

### metadata.yaml content

In order for sample dashboards to appear in the Cloud Console, the `metadata.yaml` file in your dashboard's directory needs
to be updated to include any new dashboards you are adding.

The top level of this file should include a single `sample_dashboards:` key, whose value is a list of dashboard objects.

Example:

```yaml
sample_dashboards:
  -
    category: Nginx
    id: overview
    display_name: Nginx Overview
    description: |-
      This dashboard has charts for viewing Nginx when monitored by [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/nginx#monitored-metrics), Request Rate, Current Connections, and Connections Rate from NGINX as well as charts of infrastructure related metrics for the running NGINX VMs: CPU % Top 5 VMs, Memory % Top 5 VMs, and NGINX VMs by Region for a count of VMs over time. 

      There is also a card with links to docs and Nginx logs in Cloud Logging.
    related_integrations:
      - id: nginx
        platform: GCE
```

The dashboard object is described by the following values:

| Field name | Description |
|:-----------|-------------|
| `category` | Sets the group name the dashboard will appear under in the Cloud Console. |
| `id`       | Should match the dashboard file name without the extension.         |
| `display_name` | Will be the name of the dashboard shown in the samples list of the Cloud Console. |
| `description`  | A brief description of the dashboard and its contents. Supports markdown-formatted links only. Include empty newlines for paragraph breaks. |
| `related_integrations`  | Optional. A list of integrations which collect the metrics displayed on this dashboard. |
| `related_integrations.platform` | Required for integration. For an Ops Agent application integration, use platform code `'GCE'`. |
| `related_integrations.id` | Required for integration. Should match the integration's id. |
| `related_integrations.version` | Optional. If this dashboard requires a specific revision of an integration include the version here. |

### Update README

Please also update the README.md file in the same directory of your dashboard file.
