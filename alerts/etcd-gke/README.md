# etcd Alerts for GKE

## Long fsync duration alert
When the WAL (Write-Ahead Logging) fsync time is too long, performance is degrading, often due to disk issues. This could cause cluster instability, or high latency for client requests.

## Rapid leader changes alert
When the leader of the cluster changes often, it indicates that the leader is unstable, often due to network issues or high load.

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
