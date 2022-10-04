### Dashboards for Elasticsearch

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).


|Elasticsearch Node GCE Overview|
|:------------------|
|Filename: [elasticsearch-node-gce-overview.json](elasticsearch-node-gce-overview.json)| 
| This dashboard has 20 charts for viewing Elasticsearch node-level metrics when monitored by the Google's Ops Agent including `Disk Space Available`, `Shard Size`, `Network (Sent)`, `Network (Received)`, `HTTP Connections`, `Internal Connections`, `Active Documents`, `Deleted Documents`, `Field Data Cache Evictions`, `Query Cache Evictions`, `Query Cache Memory`,`Field Data Cache Memory`,`Memory % Top 5 VMs`, `CPU % Top 5 VMs`, `Elasticsearch VMs by Region`, `Thread Pool Queued Tasks`, `Thread Pool Completed Tasks`, `Thread Pool Rejected Tasks`, `Thread Pool Active Threads`, and `Thread Pool Idle Threads`. |

|Elasticsearch Cluster GCE Overview|
|:------------------|
|Filename: [elasticsearch-cluster-gce-overview.json](elasticsearch-cluster-gce-overview.json)| 
| This dashboard has 14 widgets for viewing Elasticsearch cluster-level metrics when monitored by the Google's Ops Agent including  `Nodes`, `Green Status`, `Yellow Status`, `Red Status`, `Data Nodes`, `Active Shards`, `Initializing Shards`, `Relocating Shards`, `Unassigned Shards`, `Published Cluster States`, `Published Clusters State Differences`, `Queued States`, `Update State Time`, and `Attempted State Updates` from Elasticsearch. There is also log panels containing `Elasticsearch_json` and `Elasticsearch_gc` logs.|

|Elasticsearch Node GCE Advance Overview|
|:------------------|
|Filename: [elasticsearch-node-gce-advance-overview.json](elasticsearch-node-gce-advance-overview.json)|
| This dashboard has charts displaying `Estimated Breaker Memory Used`, `Breaker Memory Limit`, `Total Tripped Breakers`, `Disk I/O Read`, `Disk I/O Write`, `Shards Data Set Size`, `Shards Reserved Size`, `Translog Operations`, `Translog Size`, `Translog Uncommitted Size`, `CPU Usage`, `OS Memory Usage`, `CPU 1m Avg Load`, `CPU 5m Avg Load`, `CPU 15m Avg Load`, `Indexing Pressure`, `Indexing Pressure Limit`, `Indexing Pressure Rejections`, `Documents Ingested`, `Current Documents Ingested`, `Preprocessed Documents Ingested`, `Failed Operations Ingested`, `Failed Pipeline Operations Ingested`, `Current Pipeline Documents Ingested`, `Script Compilations`, `Script Compilations Triggered`, and `Script Cache Evictions` from Elasticsearch. There are also log panels containing `Elasticsearch_json` and `Elasticsearch_gc` logs.|

|Elasticsearch Prometheus|
|:------------------|
|Filename: [elasticsearch-prometheus.json](elasticsearch-prometheus.json)| 
|This dashboard is based prometheus metrics exposed by an [exporter](https://github.com/prometheus-community/elasticsearch_exporter). This dashboard has charts displaying: `Tripped Breakers`, `CPU Avg Usage %`, `JVM Memory Avg Usage %`, `ES Nodes`, `ES Data Nodes`, `Pending Tasks`, `Cluster Health`, `OS Load Average over 15min`, `CPU Usage %`, `JVM Memory Pool Peak Used Bytes`, `Disk Usage %`, `Network Usage`, and `Thread Pool Operations Rejected`. |
