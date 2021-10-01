### Dashboards for Redis

#### Notes

- These dashboards are primarily separated via where the metrics are populated from. Metrics can come from the [BindPlane integration](https://docs.bindplane.bluemedora.com/docs/redis), the builtin [Memorystore integration](https://cloud.google.com/memorystore/docs/redis), or [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party) for Redis.

|Redis Overview|
|:------------------|
|Filename: [overview.json](overview.json)|
|This dashboard has 13 charts for the related [BindPlate metrics for Redis](https://docs.bindplane.bluemedora.com/docs/redis), including metrics like `CPU Usage`, `Memory Usage`, `Cache Hit Rate`, `Client Count`, and `Average Execution`.|

&nbsp;

|Redis Usage|
|:-----------------------|
|Filename: [redis-usage.json](redis-usage.json)|
|This dashboard has 6 charts that are built for Redis running in GCP Memorystore built around the [Memorystore for Redis metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-redis), including `Memory Usage`, `Keys`, `Connected Clients`, `Average TTL`, and `Calls`.|

&nbsp;

|Redis GCE Overview|
|:-----------------------|
|Filename: [redis-gce-overview.json](redis-gce-overview.json)|
|This dashboard has 9 charts that are built for Redis running in [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/redis#monitored-metrics), including `Commands`, `Clients`, `Up Status`, `Network`, `Memory`, `Keys`, `Keyspace`, `Connections`, and `Commands Processed`|

&nbsp;

|Redis GCE Usage|
|:-----------------------|
|Filename: [redis-gce-usage.json](redis-gce-usage.json)|
|This dashboard has 9 charts that are built for Redis running in [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/redis#monitored-metrics), including `Buffer`, `RDB Changes`, `Memory Fragment Ratio`, `CPU Consumed`, `Latest Fork`, `Replication Backlog`, `Slaves Connected`, `CPU % Top 5 VMs`, and `Hosts by Region`| 


