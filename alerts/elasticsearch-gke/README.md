# Elasticsearch Alerts for GKE

## Yellow cluster status alert
When the cluster has a "yellow" status, at least one primary shard is missing, and data is missing.

## Red cluster status alert
When the cluster has a "red" status, at least one primary shard is missing, and data is missing.

## High JVM memory heap usage alert
When the ratio of heap used to max heap becomes high, then application's performance may start to degrade.

### Creating notification Channels and User Labels

Whether these alert policies are being used as standalones or base templates for a deployment strategy like terraform, one thing that should be utilized is notification channels and user labels.

### User Labels

Supplying user labels could give extra identification information about the firing alert:

i.e.

```json
    "userLabels": {
        "datacenter": "central"
    }
```

### Notification Channels

The ID of the notification channel to be notified.

```json
    "notificationChannels": [
        "projects/project-id/notificationChannels/1234567"
    ]
```
