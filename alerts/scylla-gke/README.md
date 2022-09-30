# ScyllaDB Alerts for GKE

## High compaction load alert
High compaction load can interfere with system behavior. If compaction load remains high, you may need to set the compaction share to a static level.

## High prepared statement eviction rate alert
If the prepared statement cache is being continuously evicted, it indicates an error in application prepared-statement usage logic. This can cause performance to degrade.

### Creating Notification Channels and User Labels

It is strongly recommended to add notification channels and user labels to the alert policies. The notification channel will set the notification destination if the alert policy is triggered. User labels are used for categorization, and can be used to indicate the severity level.

### User Labels

Supplying user labels could give extra identification information about the firing alert:

i.e.

```json
    "userLabels": {
        "Severity": "Warning"
    }
```

#### Notification Channels

The ID of the notification channel to be notified.

```json
    "notificationChannels": [
        "projects/project-id/notificationChannels/1234567"
    ]
```
