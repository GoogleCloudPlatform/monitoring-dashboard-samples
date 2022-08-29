# Elasticsearch Alerts for GKE

## Yellow cluster status alert
When the cluster has a "yellow" status, at least one replica shard is unallocated or missing.

## Red cluster status alert
When the cluster has a "red" status, at least one primary shard is missing, and data is missing.

## High JVM memory heap usage alert
When the ratio of heap used to max heap becomes high, then application's performance may start to degrade.

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
