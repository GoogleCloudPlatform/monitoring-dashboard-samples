# Alert Policies for Apache HBase in the Ops Agent

## Slow Operations

Slow operations can be an indication that the HDFS may be in an unhealthy state.

## HBase Server Stopped

If the HBase has unexpected downtime, this alert will help teams discern that the server is stopped and unable to function in their environment.

Required Log Query:

```sh
logName="projects/<project_id>/logs/hbase_system"
jsonPayload.message="regionserver.HeapMemoryManager: Stopping"
```

Replace <project_id> with your Project ID

## Authentication Errors

Authentication errors could indicate that clients do not have correct credentials or somebody is maliciously trying to access the HBase system.

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
