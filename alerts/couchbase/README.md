# Alerts for Couchbase in the Ops Agent

## Spiking Evictions

if ‘bucket.item.ejection.count’ begins to spike by 10 or a user defined threshold it could show that there is unexpected memory pressure.

## Unrecoverable OOM Errors

if `bucket.error.oom.count` that are `unrecoverable` increase above 0 should be a cause for concern

## High Memory Usage

if `bucket.memory.usage` bytes is higher than what is anticipated it could show that the bucket needs to be allocated more. Subjective to environment, configure threshold knowingly.

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
