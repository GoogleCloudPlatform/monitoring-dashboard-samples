
# Alerts for Memcached in the Ops Agent

## High CPU Usage

if `memcached.cpu.usage` is higher than what is anticipated it could show that the Server us overloaded and efforts to improve performance may be necessary. Subjective to environment, configure threshold knowingly.

## High Evictions

if `memcached.evictions` increase above `0` that shows that items are being evicted due to high memory usage and should be a cause for concern.

## No Connections

if `memcached.connections.current` reaches `0` that should be cause for concern because memcached should always have at least 1 connection.

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