 # Alert policies for Cloud KMS service monitoring

This contains alert policies and Terraform script to deploy them for [new generation](https://docs.cloud.google.com/kms/quotas#new-quotas) Cloud KMS quotas alert polciies.

The following alert policies are included:
- Key Read Usage quota metric `cloudkms.googleapis.com​/read_usage`
- Key Write Usage quota metric `cloudkms.googleapis.com​/write_usage`
- Software Key Crypto quota metric `cloudkms.googleapis.com​/software_usage`
- Hardware Key Crypto quota metric `cloudkms.googleapis.com​/hsm`
- External Key Crypto quota metric `cloudkms.googleapis.com​/external_kms_usage`

The alert policies are created for each location specified in the `location` variable. A separate alert policy is created for each quota metric.

Example of alert policy for "Write Usage" quota metric in "europe-west3" location:
```
{
  "displayName": "Quota usage - Cloud KMS API - Token usage per minute per region - cloudkms.googleapis.com/write_usage (europe-west3)",
  "documentation": {
    "content": "To resolve this issue, click [here](https://console.cloud.google.com/iam-admin/quotas?service=${resource.label.service}&metric=${metric.label.quota_metric}&limit=${metric.label.limit_name}&dimensions=%7B%22region%22%3A%22${resource.label.location}%22%7D&project=PROJET_ID&fromNotifications=1) to review quota usage and optionally request a quota increase.",
    "mimeType": "text/markdown"
  },
  "conditions": [
    {
      "displayName": "Quota usage reached defined threshold",
      "conditionThreshold": {
        "aggregations": [
          {
            "alignmentPeriod": "60s",
            "perSeriesAligner": "ALIGN_RATE"
          }
        ],
        "comparison": "COMPARISON_GT",
        "duration": "60s",
        "filter": "metric.type = \"serviceruntime.googleapis.com/quota_rate_net_usage\" AND metric.label.quota_metric = \"cloudkms.googleapis.com/write_usage\" AND resource.type = \"consumer_quota\" AND resource.label.location = \"europe-west3\" AND resource.label.quota_metric = \"cloudkms.googleapis.com/write_usage\" AND resource.label.limit_name = \"WriteTokensUsagePerMinutePerProjectPerRegion\" AND metric.label.limit_name = \"WriteTokensUsagePerMinutePerProjectPerRegion\" AND metric.label.project_id = \"PROJET_ID\" AND resource.label.project_id = \"PROJET_ID\"",
        "thresholdValue": 544,
        "trigger": {
          "count": 1
        }
      }
    }
  ],
  "alertStrategy": {
    "autoClose": "604800s"
  },
  "combiner": "OR",
  "enabled": true
}
```