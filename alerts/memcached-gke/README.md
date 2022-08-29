
# Alerts for Memcached in GKE

## High evictions alert

If the number of evicted items increases by 1 or more that shows that items are being evicted due to high memory usage, which could indicate not enough memory, or too many objects being inserted.

## No connections alert

If the number of connections reaches 0, there are no applications connected to Memcached, which may indicate a network issue between your application and Memcached.

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
