# Kafka Alerts for Ops Agent

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

## Under replicated partitions alert
When there is an under replicated partitions for an extended period of time, then the cluster is not healthy and cannot guarantee high availability.

## Offline partition alert
When the offline partition is greater than 0, then the partition has no active leaders which can cause service interruptions. Both consumers and producers of that partition will be blocked until a leader becomes available.

## High failed broker request rate alert
The high failed broker request rate represents the number of fetch and produce requests to the broker resulting in a failure. When spikes in failed request errors occur, kafka logs should be investigated for further diagnosis.
