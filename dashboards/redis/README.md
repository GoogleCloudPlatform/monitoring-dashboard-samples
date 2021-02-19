### Dashboards for Redis

#### Notes

- These two dashboards are primarily separated via where the metrics are populated from. Metrics can come from the [BindPlane integration](https://docs.bindplane.bluemedora.com/docs/redis) or the builtin [Memorystore integration](https://cloud.google.com/memorystore/docs/redis) for Redis.

|Redis Overview|
|:------------------|
|Filename: [overview.json](overview.json)|
|This dashboard has 13 charts for the related [BindPlate metrics for Redis](https://docs.bindplane.bluemedora.com/docs/redis), including metrics like `CPU Usage`, `Memory Usage`, `Cache Hit Rate`, `Client Count`, and `Average Execution`.|

&nbsp;

|Redis Usage|
|:-----------------------|
|Filename: [redis-usage.json](redis-usage.json)|
|This dashboard has 6 charts that are built for Redis running in GCP Memorystore built around the [Memorystore for Redis metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-redis), including `Memory Usage`, `Keys`, `Connected Clients`, `Average TTL`, and `Calls`.|
