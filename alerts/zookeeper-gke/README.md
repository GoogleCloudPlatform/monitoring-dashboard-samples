# Alerts for Zookeeper in GKE

## High average latency alert

If Zookeeper's average response latency is 100ms or higher, it shows that the server can't keep up with demand.

## High fsync duration alert

If the fsync duration is above an amount dependent on your environment (100ms by default), it could show there is an issue writing to files.

## Low open file descriptors alert

If the amount of open file descriptors is about to hit the maximum amount of open file descriptors, Zookeeper will not be able to handle any new requests and will fail to connect new clients.

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
