### Dashboards for Kafka

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).


|Kafka GCE Overview|
|:------------------|
|Filename: [kafka-gce-overview.json](kafka-gce-overview.json)|
|This dashboard has 12 charts for viewing Kafka when monitored by 
[Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/kafka#monitored-metrics), including `Messages`, `Network IO`, `Requests`, `Failed Requests`, `Purgatory`, `Partitions`, `Offline Partitions`, `Under Replicated Partitions`, `ISR Operations`, `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`.
