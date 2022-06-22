# Alerts for Zookeeper in the Ops Agent

## High Average Latency

if `zookeeper.latency.avg` is 100ms or higher, it shows that the server can't keep up with demand and performance improvements should be sought after.

## High fsync Duration

if `zookeeper.fsync.exceeded_threshold.count` is above an amount dependent on your environment it could show either the fsync duration  threshold set is too low or there is an issue writing to files.

## Low Open File Descriptors

if `workload.googleapis.com/zookeeper.file_descriptor.open` is about to hit `workload.googleapis.com/zookeeper.file_descriptor.limit` zookeeper will not be able to handle any new requests and will fail to connect new clients.

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
