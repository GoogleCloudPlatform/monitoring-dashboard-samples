
# Alerts for IIS in the Ops Agent

## Site Down

If `iis.uptime` is `0` then the site is down or has restarted.

## Long Request Queue

If `iis.request.queue.count` increases above a threshold dependent on your system, it could show the server is overloaded.

## High Connections

If `iis.connection.active` Spikes above a threshold dependent on your system (default: `10`), it can show a security Issue.

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