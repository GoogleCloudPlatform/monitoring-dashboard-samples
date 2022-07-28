# Alerts for Cassandra in Ops Agent

## High Write Throughput

This Alert generally is looking at unexpected increases of throughput in the Cassandra requests. The threshold will be mostly determined based off normalcy of the environment the node is in, but the alert is defaulted to 20000 writes-per-second. Feel free to adjust threshold to fit your environment. It is generally good to keep an eye on the number of write requests going into detect any anomalies in either lack of writes or overbearance of rights.

## High Errors

This alert policy looks at the amount of requests made and the amount of errors received. An alert is triggered alerts if the number of exceptions exceeds 10% of the total amount of requests. Things captured in this alert could include timeouts, write exceptions, unavailable exceptions, etc. These generally require further investigation and indicate an issue with the Cassandra node.

## High Read Latency

Read latency is generally considered the slower operation in Cassandra due to hardware limitations or the data model. Read latency is a good indicator of how well those affectors are fitting to the Cassandra environment and if read latency is high, it might be time to update the hardware or dig deeper into why Cassandra is losing performance. Feel free to tune this alert for your hardware and latency tolerance, but 4000 µs was the initial threshold specified in this alert. For this alert the median 50th percentile was chosen.

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

The ID of the notification channel to be notifed.

```json
    "notificationChannels": [
        "projects/project-id/notificationChannels/1234567
    ]
```
