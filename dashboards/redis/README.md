### Dashboards for Redis

#### Notes

- These three dashboards are primarily separated via where the metrics are populated from. Metrics can come from the [BindPlane integration](https://docs.bindplane.bluemedora.com/docs/redis), the builtin [Memorystore integration](https://cloud.google.com/memorystore/docs/redis), or [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party) for Redis.

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

|Redis Ops Agent|
|:-----------------------|
|Filename: [overview-ops-agent.json](overview-ops-agent.json)|
|This dashboard has 18 charts that are built for Redis running in [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/redis#monitored-metrics), including:|
- `uptime`
- `cpu/time`
- `clients/connected`
- `clients/max_input_buffer`
- `clients/max_output_buffer`
- `clients/blocked`
- `keys/expired`
- `keys/evicted`
- `connections/received`
- `connections/rejected`
- `memory/used`
- `memory/peak`
- `memory/rss`
- `memory/lua`
- `memory/fragmentation_ratio`
- `rdb/changes_since_last_save`
- `commands`
- `commands/processed`
- `net/input`
- `net/output`
- `keyspace/hits`
- `keyspace/misses`
- `latest_fork`
- `slaves/connected`
- `replication/backlog_first_byte_offset`
- `replication/offset`
