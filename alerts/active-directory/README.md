# Alerts for Active Directory Ops Agent

## LDAP Connections Higher than Recommended

It is recommended to keep LDAP connections below 8000. If this value is exceeding then there may be real performance impacts.

## Long Replications

Alert configured for if a replication takes longer than 30 minutes, feel free to modify this window to fit your environment. This could be an indication that replication is taking longer than expected.

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
