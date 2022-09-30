# HAProxy Alerts for GKE

## Frontend sessions near limit alert
When the session limit is reached, any new incoming connections will be rejected. This is typically caused by a sudden influx of traffic, and may indicate the configured max number of sessions needs to be adjusted.


## Server down alert
When the server is down, it means that it cannot accept any requests due to degraded health.

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
