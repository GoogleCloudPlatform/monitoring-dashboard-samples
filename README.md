
# Cloud Monitoring Dashboard Samples

This repository contains a samples that may be used with the [Cloud Monitoring Dashboards API](https://cloud.google.com/monitoring/dashboards/api-dashboard).

## How to use the samples

1. Check it out from GitHub.
    * There is no reason to fork it.
1. Use the [gcloud monitoring dashboards create](https://cloud.google.com/sdk/gcloud/reference/monitoring/dashboards/create) command to create the dashboard.  Make sure you replace the __[file-name.json]__ in the command:

```bash
gcloud monitoring dashboards create --config-from-file=[file_name.json]
```

Alternatively, you can run the following command via curl. Use the [projects.dashboards.create](https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards/create) to call the Dashboards API with the sample JSON and create a new dashboard.
Make sure you replace the __[project-id]__ and __[file-name.json]__ in the command:

```bash
curl -X POST -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
-H "Content-Type: application/json; charset=utf-8" \
https://monitoring.googleapis.com/v1/projects/[project-id]/dashboards -d @[file-name.json]
```

### Steps to get the JSON configuration

If you want to export a dashboard to a JSON file and share it, you can use the following steps.

1. Create the dashboard in the Monitoring UI (or even better, share one that you’ve already developed and used).
 
1. Open the Dashboard and copy dashboard ID from the URL (the string is in the URL after the /monitoring/dashboards/custom/ ˆprefix). For example, __10768789961894600977__ is the dashboard ID in the URL below:

    https://console.cloud.google.com/monitoring/dashboards/custom/10768789961894600977?project=sd-uxr-001&timeDomain=1h


1. Use these commands to export the JSON configuration for your dashboard.

    Frist, set your environment variables, replacing the following values with your values:

    *  DASH_ID with the dashboard ID copied from step #2
    *  YOUR_PROJECT_ID with your project id that contains the dashboard
    *  FILE_NAME with the output filename for the dashboard JSON config 

    ```bash
    export DASH_ID=<YOUR_DASH_ID>

    export PROJECT_NUMBER=$(gcloud projects describe <YOUR_PROJECT_ID> 
        --format="value(projectNumber)")

    export FILE_NAME=<DASH_FILE_NAME>
    ```

1. Use the gcloud command line to export the dashboard to a JSON file.

    ```bash
    gcloud monitoring dashboards describe \
    projects/$PROJECT_NUMBER/dashboards/$DASH_ID > $FILE_NAME \
    --format=json
    ```

1. Remove the etag / name fields. If you’re using a MAC, you’ll need to use the "MAC version of the sed commands”.

    ```bash
    sed -i '/"name":/d' $FILE_NAME
    sed -i '/"etag":/d' $FILE_NAME
    ```

    MAC version of the sed commands. Note the '' addition.

    ```bash
    sed -i '' '/"etag":/d' $FILE_NAME
    sed -i '' '/"name":/d' $FILE_NAME
    ```