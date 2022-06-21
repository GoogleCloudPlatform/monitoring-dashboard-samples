# Alerts for MongoDB in Ops Agent

## Connections Near Max

If connections are approaching the limit, then new connections cannot be established. By default the mongod rejects connections at around 52000. Applications may stop functioning if connections cannot be established.

## High CPU Utilization

If CPU utilization is above 90%, then the MongoDB instance is probably due to be scaled up or needs further investigation.

## High Disk Utilization

If Disk Utilization is above 80%, then it is time to look deeper into adding more storage or cleaning up old docs.

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
        "projects/project-id/notificationChannels/1234567
    ]
```
