# Alerts for Redis in the Ops Agent

## Redis - Memory Fragmentation Ratio < 1

A fragmentation ratio less than 1.0 means that Redis requires more memory than is available on the system and so it has resorted to using swap memory resources.

## Redis - Keys Getting Evicted

Under memory pressure, the system will evict keys to free up memory. This is an indicator of memory pressure of the redis configuration. This alert fires if at least 5 keys are evicted.

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

#### Notification Channels

The ID of the notification channel to be notified.

```json
    "notificationChannels": [
        "projects/project-id/notificationChannels/1234567
    ]
```
