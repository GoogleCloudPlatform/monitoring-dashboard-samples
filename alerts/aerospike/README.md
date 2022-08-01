# Alerts for Aerospike in the Ops Agent

## High Memory Utilization

This alert is triggered when a dangerously low percentage of system memory is free for an Aerospike node. By default this threshold is 5%. If this alert is triggered, the user should investigate memory usage and potentially allocate more RAM or add additional nodes.

## High Namespace Memory Utilization

This alert is triggered when a dangerously low percentage of allocated memory is free to an Aerospike namespace on a single node. By default this threshold is 5%. If this value reaches the configured “High Water Memory” or “Stop Writes” thresholds, writes to the namespace could be blocked until more memory is available. It indicates that more capacity should be added.

## High Namespace Disk Utilization

This alert is triggered when a dangerously low percentage of contiguous disk space is free to an Aerospike namespace on a single node. By default this threshold is 5%. Similar to free memory, if this value reaches the configured “Min Available Percent” threshold, writes to the namespace could be blocked until more disk space is available. It indicates that defragmentation isn’t keeping up, and/or more capacity should be added.

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

The ID of the notification channel to be notifed.

```json
    "notificationChannels": [
        "projects/project-id/notificationChannels/1234567"
    ]
```
