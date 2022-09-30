# Alerts for Zookeeper in GKE

## High average latency alert

If Zookeeper's average response latency is 100ms or higher, it shows that the server can't keep up with demand.

## High fsync duration alert

If the fsync duration is above an amount dependent on your environment (100ms by default), it could show there is an issue writing to files.

## Low open file descriptors alert

If the amount of open file descriptors is about to hit the maximum amount of open file descriptors, Zookeeper will not be able to handle any new requests and will fail to connect new clients.

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
