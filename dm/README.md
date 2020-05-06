# Using Google Cloud Deployment Manager to deploy monitoring dashboards

Currently, the Google Cloud Deployment Manager does not support deploying Cloud Monitoring dashboards natively. However, we can create a custom type provider with the dashboard API endpoint to get around it.

## HowTo

### Add custom dashboard type
```bash
gcloud beta deployment-manager type-providers create monitoring-dashboardv1type --api-options-file=options.yaml --descriptor-url='https://monitoring.googleapis.com/$discovery/rest?version=v1'
```

### Look up the new type
```bash
gcloud beta deployment-manager type-providers describe monitoring-dashboardv1type
```

## Create dashboard

Replace `[PROJECT-ID]` in `dashboard.yaml` with your GCP project id.

Replace `[JSON-FILE]` in `dashboard.yaml` with your json file.

Run the following command:

```bash
gcloud deployment-manager deployments create example-dashboard --config dashboard.yaml
```

## Check dashboard
https://console.cloud.google.com/monitoring/dashboards

## Delete dashboard
```bash
gcloud deployment-manager deployments delete example-dashboard
```

## Delete type provider
```bash
gcloud beta deployment-manager type-providers delete monitoring-dashboardv1type
```

## Resources:
* [Adding an API as a Type Provider](https://cloud.google.com/deployment-manager/docs/configuration/type-providers/creating-type-provider)
* [Calling a Type Provider in a Configuration](https://cloud.google.com/deployment-manager/docs/configuration/type-providers/calling-type-provider)
* [REST Resource: projects.dashboards](https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards)
* [Using Google Cloud Deployment Manager shared types](https://medium.com/google-cloud/using-google-cloud-deployment-manager-shared-types-f5c3609687b0)
* [Additional deployment manager examples](https://github.com/GoogleCloudPlatform/cloud-foundation-toolkit/tree/master/dm)
