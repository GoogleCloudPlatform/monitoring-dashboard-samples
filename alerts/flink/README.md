# Flink Alerts for Ops Agent

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

## High job restarts alert
When the job restarts delta value exceeds a threshold value, that indicates the flink jobs are not running in a healthy state.

## High failed checkpoints alert
When the checkpoint delta value exceeds a threshold value, that indicates that your system may be overworking having higher processing time and lower throughput.

## High jvm memory heap usage alert
When the jvm heap ratio of heap used over max heap exceeds a threshold, then application's performance may start to degrade. This alert can trigger when for a jobmanager or a taskmanager. To specify a jobmanager, the resource_type should be jobmanager. To specify a taskmanager, the taskmanager_id filter should target the correct taskmanager instance.

## High jvm memory non-heap usage
When the jvm nonheap ratio of nonheap used over max nonheap exceeds a threshold, then application's performance may start to degrade. This alert can trigger when for a jobmanager or a taskmanager. To specify a jobmanager, the resource_type should be jobmanager. To specify a taskmanager, the taskmanager_id filter should target the correct taskmanager instance.
