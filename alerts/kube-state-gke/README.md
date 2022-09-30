# Kube State Alerts for GKE

## Job failure alert
A Job failure indicates that the Job did not run successfully.

## Pod disruption budget exceeded alert
When the pod disruption budget is exceeded, the configured minimum availability is not being respected, typically due to an application failure.

## Volume reaching capacity alert
This alert triggers when a volume is beginning to reach its capacity. When a volume reaches capacity, it cannot store any more data, which can cause applications to stop working.

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
