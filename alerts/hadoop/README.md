# Alerts for Hadoop in the Ops Agent

## Low available capacity alert
A low available capacity means that the total disk space usage across all HDFS clusters is over 80% of the capacity limit and therefore the capacity limit should be increased.

## Volume failure alert
A failed volume means a hardware failure has occurred. With replication, no data should be lost, but the failed hardware should be replaced.

## Dead data nodes alert
A dead data node can cause network activity problems as the NameNode initiates replication of blocks lost on the data nodes. When multiple data nodes are lost, data loss can occur.

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
