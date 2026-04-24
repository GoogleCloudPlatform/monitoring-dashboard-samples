variable "project_id" {
  description = "Target Project ID"
  type        = string
}

variable "location" {
  description = "Cloud KMS resources location"
  type        = list(string)
  default     = ["europe-west3"]
}

variable "notification_channels" {
  description = "List of notification channels to attach to alert policies"
  type        = list(string)
}

variable "quota_metrics" {
  description = "Map of Cloud KMS quota metrics to their corresponding limit names"
  type        = map(string)
  default = {
    "cloudkms.googleapis.com/write_usage"    = "WriteTokensUsagePerMinutePerProjectPerRegion"
    "cloudkms.googleapis.com/read_usage"     = "ReadTokensUsagePerMinutePerProjectPerRegion"
    "cloudkms.googleapis.com/software_usage" = "SoftwareTokensUsagePerMinutePerProjectPerRegion"
    "cloudkms.googleapis.com/hsm_usage"      = "HsmTokensUsagePerMinutePerProjectPerRegion"
    "cloudkms.googleapis.com/external_kms_usage" = "ExternalTokensUsagePerMinutePerProjectPerRegion"
  }
}

variable "alert_duration" {
  description = "The duration for which the condition must be met before an alert is triggered"
  type        = string
  default     = "60s"
}

variable "alert_evaluation_interval" {
  description = "The interval at which the condition is evaluated"
  type        = string
  default     = "60s"
}

variable "alert_auto_close" {
  description = "The duration after which an open incident is automatically closed"
  type        = string
  default     = "604800s"
}

variable "alert_threshold" {
  description = "The threshold for the quota usage alert (fraction of limit)"
  type        = number
  default     = 0.8
}
