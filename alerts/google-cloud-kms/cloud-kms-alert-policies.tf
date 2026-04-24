locals {
  alert_policies = {
    for pair in setproduct(var.location, keys(var.quota_metrics)) :
    "${pair[0]}-${pair[1]}" => {
      location     = pair[0]
      quota_metric = pair[1]
      limit_name   = var.quota_metrics[pair[1]]
    }
  }
}

resource "google_monitoring_alert_policy" "cloud_kms_quota_usage" {
  for_each     = local.alert_policies
  project      = var.project_id
  display_name = "Quota usage - Cloud KMS API - Token usage per minute per region - ${each.value.quota_metric} (${each.value.location})"
  combiner     = "OR"
  enabled      = true

  conditions {
    display_name = "Quota usage reached defined threshold"
    condition_prometheus_query_language {
      duration            = var.alert_duration
      evaluation_interval = var.alert_evaluation_interval
      query               = <<-EOT
        max_over_time(
          sum(
            label_replace(
              increase(
                serviceruntime_googleapis_com:quota_rate_net_usage{
                  project_id='${var.project_id}',
                  monitored_resource='consumer_quota',
                  quota_metric='${each.value.quota_metric}',
                  location='${each.value.location}'
                }[1m]
              ),
              'limit_name', '${each.value.limit_name}', '', ''
            )
          ) by (service, limit_name, project_id, quota_metric, location)[4m:1m]
        )
        /
        min(
          ${each.value.quota_metric == "cloudkms.googleapis.com/external_kms_usage" ? 60 : 1} * last_over_time(
            serviceruntime_googleapis_com:quota_limit{
              project_id='${var.project_id}',
              monitored_resource='consumer_quota',
              quota_metric='${each.value.quota_metric}',
              location='${each.value.location}',
              limit_name='${each.value.limit_name}'
            }[1d]
          )
        ) by (service, limit_name, project_id, quota_metric, location)
        > ${var.alert_threshold}
      EOT
    }
  }

  documentation {
    content   = "To resolve this issue, click [here](https://console.cloud.google.com/iam-admin/quotas?service=$${resource.label.service}&metric=$${metric.label.quota_metric}&limit=$${metric.label.limit_name}&dimensions=%7B%22region%22%3A%22$${resource.label.location}%22%7D&project=${var.project_id}&fromNotifications=1) to review quota usage and optionally request a quota increase."
    mime_type = "text/markdown"
  }

  alert_strategy {
    auto_close           = var.alert_auto_close
    notification_prompts = ["OPENED"]
  }

  notification_channels = var.notification_channels
}
