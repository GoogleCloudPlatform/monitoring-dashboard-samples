# Sap Hana Alerts for Ops Agent

### Notification Channels
For all alerts, a notification channel needs to be set up or the alert will fire silently.

### User Labels
User labels can be used for these policies by modifying the userLabels fields of the policies. i.e.

```json
{ 
  "userLabels": {
    "datacenter": "central"
  }
}
```

# High priority alert
High priority alert occurs when `saphana.alert.count` produces a rating 5 alert for critical error messages.

# Old backups alert
If `backup.latest` is older than 24 hours there can be an issue with creating new backups.

### Server down alert
When the `saphana.uptime` metric is absent, an alert is triggered indicating server downtime.
