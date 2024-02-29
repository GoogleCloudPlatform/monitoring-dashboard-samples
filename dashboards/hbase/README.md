### Dashboards for Hbase

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).


|Hbase GCE Overview|
|:------------------|
|Filename: [hbase-gce-overview.json](hbase-gce-overview.json)|
|This dashboard has charts for viewing Hbase when monitored by [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/hbase#monitored-metrics), including `Region Servers`, `Dead Region Servers`, `Regions in Transition`, `Regions in Transition Over Threshold`, `Read Requests`, and `Write Requests`. |

|Hbase GCE Operations Overview|
|:------------------|
|Filename: [hbase-gce-operation-overview.json](hbase-gce-operation-overview.json)|
|This dashboard has charts for viewing Hbase Operations when monitored by [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/hbase#monitored-metrics), including `Slow Get Operations`, `Slow Append Operations`, `Slow Delete Operations`, `Slow Put Operations`, `Slow Increment Operations`, `Get Operations 99th Percentile`, `Append Operations 99th Percentile`, `Delete Operations 99th Percentile`, `Put Operations 99th Percentile`, `Increment Operations 99th Percentile`, and `Replay Operations 99th Percentile`. |

|Hbase Prometheus Overview|
|:------------------|
|Filename: [hbase-prometheus-overview.json](hbase-prometheus-overview.json)|
|This dashboard is based on metrics exposed by an [exporter](https://github.com/prometheus/jmx_exporter), including `Region Servers`, `Dead Region Servers`, `Regions in transitions`, `Regions in transition longer than threshold`, `Oldest Region in transition age`, `Region Count`, `Authentication Attempts`, `Open Connections`, `Active RPC Handlers`, `Total Requests`, `Read Requests`, `Write Requests`, `Block Cache Hits`, `Block Cache Misses`, `Cache-Enabled Request Hit Percent`, `Store File Count`, `Store File Size (bytes)`, `Local Store File Data %`, `Unarchived Write Ahead Logs`, `Skip Write Ahead Log Writes`, `Enqueued User Requests`, `Enqueued Replication Requests`, `Enqueued Priority Requests`, `Memstore Flush Queue Depth`, `Memstore Flushing Update Block Time (milliseconds)`, and `Compaction Request Queue Depth`. |

|Hbase Operations Prometheus Overview|
|:------------------|
|Filename: [hbase-region-server-operations-prometheus-overview.json](hbase-region-server-operations-prometheus-overview.json)|
|This dashboard is based on metrics exposed by an [exporter](https://github.com/prometheus/jmx_exporter), including `Get Operations`, `Slow Get Operations`, `Get Operations Average Time`, `Get Operations Time 99th Percentile`, `Append Operations`, `Slow Append Operations`, `Append Operations Average Time`, `Append Operations Time 99th Percentile`, `Delete Operations`, `Slow Delete Operations`, `Delete Operations Average Time`, `Delete Operations Time 99th Percentile`, `Put Operations`, `Slow Put Operations`, `Put Operations Average Time`, `Put Operations Time 99th Percentile`, `Increment Operations`, `Slow Increment Operations`, `Increment Operations Average Time`, `Increment Operations Time 99th Percentile`, `Replay Operations`, `Replay Operations Average Time`, and `Replay Operations Time 99th Percentile`. |
