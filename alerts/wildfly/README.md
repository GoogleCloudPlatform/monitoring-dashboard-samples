# Alert Policies for Wildfly in the Ops Agent

## Server Errors

If 5 or more server errors are happening over a 1 minute interval could be an indication that something is programatically incorrect or could use further exploration into why the server errors are occurring.

## Waiting Requests

Waiting requests could be an indication of high CPU usage or perhaps slow disk I/O. It would be recommended to use some kind of CPU utilization tool like top to dig deeper.

## JDBC Connections near limit

If the JDBC connection limit is reaching its max (default=20 connections), then backend connections could end up failing.

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
