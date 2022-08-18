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
|This dashboard has 17 charts for viewing Redis when monitored by [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/redis#monitored-metrics), including `Clients`, `Connections`, `Commands Processed`, `Network`, `Memory`, `Memory Fragment Ratio`, `Keys`, `Keyspace`, `CPU Consumed`, `Buffer`, `RDB Changes`, `Slaves Connected`, `Replication`, `Latest Fork`, `CPU % Top 5 VMs`, `Memory % Top 5 VMs` and `Hosts by Region`. It also includes a markdown card with links to Redis logs in Cloud Logging and to monitoring setup documentation.|

#### Notes

- This dashboard is based on prometheus metrics coming from an [exporter](https://github.com/oliver006/redis_exporter).

|Redis Prometheus|
|:-----------------------|
|Filename: [redis-prometheus.json](redis-prometheus.json)|
|This dashboard has charts highlighting `Commands Per Second`, `Connections`, `Memory Used`, `Keys`, and `Network I/O`|
