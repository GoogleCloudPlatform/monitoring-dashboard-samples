### Dashboards for Memcached

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).

|Memcached GCE Overview|
|:------------------|
|Filename: [memcached-gce-overview.json](memcached-gce-overview.json)|
|This dashboard has charts displaying `Command Rate`, `Operation Rate`, `Connections Current`, `Connections Total`, `Evictions`, `Current Items`, `CPU Usage`, `Network`, `Threads` and `Bytes` from Memcached as well as charts of infrastructure related metrics for the running Memcached VMs: `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`.

|Memcached Prometheus Overview|
|:------------------|
|Filename: [memcached-prometheus.json](memcached-prometheus.json)|
|This dashboard is based on prometheus metrics exposed by an [exporter](https://github.com/prometheus/memcached_exporter). This dashboard has charts displaying: `Up/Down`, `Hits`, `Misses`, `Connections`, `Commands`, `Evicts/Reclaims`, `Read/Written Bytes`, `Memory Bytes Used to Store Items`, and `Items in Cache`|
