# Kafka Alerts for GKE

## Under replicated partitions alert
When there is an under replicated partition for an extended period of time, then the cluster is not healthy and cannot guarantee high availability.

## Change in number of ISRs alert
In sync replicas (ISRs) are required for proper failover. The number of in sync replicas should be static, unless the broker cluster is expanding or partitions are removed. If the number of in sync replicas deviates without the broker cluster being modified, you should investigate to maintain high availability.

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
