# Node Exporter Alerts for GKE

## High CPU Usage alert
This alert triggers when CPU Usage is high. This indicates that the node may degrade in performance due to too many workloads.

## Low available memory alert
This alert triggers when the amount of memory available is low. When memory is low, GKE may be unable to assign any more pods to the node.

## Low filesystem space alert
This alert triggers when the amount of space for the affected filesystem is low. When filesystem space is low, GKE may be unable to assign any more pods to the node.

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

#### Notification Channels

The ID of the notification channel to be notified.

```json
    "notificationChannels": [
        "projects/project-id/notificationChannels/1234567"
    ]
```
