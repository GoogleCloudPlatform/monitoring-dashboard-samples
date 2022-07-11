# Alerts for Couchbase in the Ops Agent

## Spiking Evictions

If ‘bucket.item.ejection.count’ begins to spike this could indicate that there is unexpected memory pressure. The default threshold is set to 10 for the alert policy and this can be customized for your environment.

## Unrecoverable OOM Errors

If `bucket.error.oom.count` that are `unrecoverable` increase above 0 should be a cause for concern because it implies the couchbase server is either underprovisioned or an application is over-utilizing the couchbase server.

## High Memory Usage

If `bucket.memory.usage` bytes is higher than what is anticipated it could show that the bucket needs to be allocated more. Subjective to environment and this alert can be customized for your environment.

### Creating Notification Channels and User Labels

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
