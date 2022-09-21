# Alerts for PostgreSQL in GKE

## Database size too large alert
If the database is growing larger than expected (100 GB by default), it may signal excess data being stored or excess records not being properly removed by an application.


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
