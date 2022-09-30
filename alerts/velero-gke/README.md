# Velero Alerts for GKE

## Backup failure alert
This alert triggers when a backup fails. If this occurs, then a backup failed, and data will be missing. Inspect the logs for Velero in order to further determine the cause.

## Partial backup failure alert
This alert triggers when a backup partially fails. This indicates that a full backup could not be made, and the resulting backup only partially describes the cluster. Inspect the logs for Velero in order to further determine the cause.

## Restore failure alert
This alert triggers when a restore operation fails. Inspect the logs for Velero in order to further determine the cause.

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
