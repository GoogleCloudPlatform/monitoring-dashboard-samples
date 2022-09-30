# Jenkins Alerts for GKE

## Health score below 1 alert
If the Jenkins health score is below 1, then at least one health check has failed. To view which health checks have failed, see `${JENKINS_URL}/metrics/currentUser/healthcheck?pretty=true`.

## Plugin failure alert
A plugin failure indicates that a plugin has failed to start. Usually, this can be resolved by explicitly disabling the failing plugin, or by resolving dependency issues with the plugin. See the Jenkins logs to determine the exact cause of the plugin failure.

### Creating Notification Channels and User Labels

It is strongly recommended to add notification channels and user labels to the alert policies. The notification channel will set the notification destination if the alert policy is triggered. User labels are used for categorization, and can be used to indicate the severity level.

### User Labels

Supplying user labels could give extra identification information about the firing alert:

i.e.

```json
    "userLabels": {
        "Severity": "Warning"
    }
```

### Notification Channels

The ID of the notification channel to be notified.

```json
    "notificationChannels": [
        "projects/project-id/notificationChannels/1234567"
    ]
```
