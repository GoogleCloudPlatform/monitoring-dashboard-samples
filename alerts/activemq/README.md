# ActiveMQ Alerts for Ops Agent

## High disk storage alert
When the broker's disk storage is near its limit(90%), then the producer flow control may cause producers to stop sending messages.

## High temp storage alert
When the broker's non-persistent storage is near its limit(90%), messages are moved to a temp file system. If that temp file system fills up, then producers will stop sending messages until storage space is freed.

## Dropped connection alert
When the connection count is zero, then there are networking problems and clients cannot connect to the ActiveMQ server.

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
