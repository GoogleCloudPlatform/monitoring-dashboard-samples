# Kibana Alerts for GKE

## High memory usage alert
This alert triggers when there is a high amount of memory in use. Memory pressure can cause excessive garbage collection, leading to performance degradation.

## High cpu usage alert
This alert triggers when there is a high amount of CPU usage. High CPU usage indicates that Kibana is running out of compute resources, and performance may degrade.

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
