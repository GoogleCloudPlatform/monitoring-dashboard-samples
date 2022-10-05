# Alerts for Oracle Database in Ops Agent

## High Session Utilization

Alerts whenever the database is nearing the session limit, which could result in connections being refused.

## High Tablespace Utilization

Alert fires when a tablespace should be resized as it approaches high utilization, before an interruption in service occurs.

## High Process Utilization

Alert fires when the database is nearing the process limit, which could result in new processes being blocked from starting.

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