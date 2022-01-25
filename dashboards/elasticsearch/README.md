### Dashboards for Elasticsearch

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).


|Elasticsearch Node GCE Overview|
|:------------------|
|Filename: [elasticsearch-node-gce-overview.json](elasticsearch-node-gce-overview.json)| 
| This dashboard has 20 charts for viewing Elasticsearch node-level metrics when monitored by the Google's Ops Agent including `Disk Space Available`, `Shard Size`, `Network (Sent)`, `Network (Received)`, `HTTP Connections`, `Internal Connections`, `Active Documents`, `Deleted Documents`, `Field Data Cache Evictions`, `Query Cache Evictions`, `Query Cache Memory`,`Field Data Cache Memory`,`Memory % Top 5 VMs`, `CPU % Top 5 VMs`, `Elasticsearch VMs by Region`, `Thread Pool Queued Tasks`, `Thread Pool Completed Tasks`, `Thread Pool Rejected Tasks`, `Thread Pool Active Threads`, and `Thread Pool Idle Threads`. |

|Elasticsearch Cluster GCE Overview|
|:------------------|
|Filename: [elasticsearch-cluster-gce-overview.json](elasticsearch-cluster-gce-overview.json)| 
| This dashboard has 9 widgets for viewing Elasticsearch cluster-level metrics when monitored by the Google's Ops Agent including  `Nodes`, `Green Status`, `Yellow Status`, `Red Status`, `Data Nodes`, `Active Shards`, `Initializing Shards`, `Relocating Shards`, and `Unassigned Shards`. |
