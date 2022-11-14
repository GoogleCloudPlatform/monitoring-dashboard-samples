### Dashboards for Aerospike

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).


|Aerospike GCE Overview|
|:------------------|
|Filename: [aerospike-gce-overview.json](aerospike-gce-overview.json)| 
| This dashboard has 8 charts for viewing Aerospike metrics when monitored by the Google's Ops Agent including `Free Memory %`, `Node Connections`, `Namespace Transactions`, `Namespace Transactions`, `Namespace Memory Free`, `Namespace Disk Free`, `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, `Hosts by Region`. |

|Aerospike Prometheus Overview|
|:------------------|
|Filename: [aerospike-prometheus-overview.json](aerospike-prometheus-overview.json)|
| This dashboard is based on prometheus metrics exposed by an [exporter](https://github.com/aerospike/aerospike-prometheus-exporter). This dashboard has charts displaying: `Free Memory %`, `Node Connections`, `Namespace Memory Used (bytes)`, `Namespace Storage Data in Memory`, `Namespace Transaction Pending Limit`. |
