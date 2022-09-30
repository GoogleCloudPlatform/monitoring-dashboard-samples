# Kafka Alerts for GKE

## Under replicated partitions alert
When there is an under replicated partition for an extended period of time, then the cluster is not healthy and cannot guarantee high availability.

## Change in number of ISRs alert
In-Sync Replicas (ISRs) are required for proper failover. The number of In-Sync Replicas should be static, unless the broker cluster is expanding or partitions are removed. If the number of In-Sync Replicas deviates without the broker cluster being modified, you should investigate to maintain high availability.

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
