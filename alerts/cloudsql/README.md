# Alerts for CloudSQL in the Ops Agent

## Spiking Evictions

If `cloudsql.googleapis.com/database/postgresql/vacuum/oldest_transaction_age` is higher than `10` it indicates that postgres is having issues keeping up with the amount of queries. 

## Replication in Error State

If any instance in `cloudsql.googleapis.com/database/replication/state` has a state of `Error` this error fires indicating that a replica is no longer working.

## Instance in Error State

If any instance in `cloudsql.googleapis.com/database/instance_state` has a state of `FAILED` this error fires indicating that an instance is no longer working.

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
        "projects/project-id/notificationChannels/1234567"
    ]
```
