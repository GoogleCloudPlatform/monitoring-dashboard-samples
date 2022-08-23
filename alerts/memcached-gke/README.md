
# Alerts for Memcached in GKE

## High evictions alert

If the number of evicted items increases by 1 or more that shows that items are being evicted due to high memory usage, which could indicate not enough memory, or too many objects being inserted.

## No connections alert

If the number of connections reaches 0, there are no applications connected to Memcached, which may indicate a network issue between your application and Memcached.

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
