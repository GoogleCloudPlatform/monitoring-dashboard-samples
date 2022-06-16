# Elasticsearch Alerts for Ops Agent

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

## Yellow cluster status alert
When red cluster status duration exceeds 5 minute, at least one replica shard is unallocated or missing.

## Red cluster status alert
When red cluster status duration is exceeds minute, at least one primary shard is missing, and you are missing data.

## High jvm memory heap usage alert
When the jvm heap ratio of heap used over max heap exceeds a threshold, then application's performance may start to degrade.
