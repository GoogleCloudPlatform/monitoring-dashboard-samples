### Dashboards for Hbase

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).


|Hbase GCE Overview|
|:------------------|
|Filename: [hbase-gce-overview.json](cassandra-gce-overview.json)|
|This dashboard has charts for viewing Hbase when monitored by [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/cassandra#monitored-metrics), including `Region Servers`, `Dead Region Servers`, `Regions in Transition`, `Regions in Transition Over Threshold`, `Read Requests`, and `Write Requests`. |

|Hbase GCE Operations Overview|
|:------------------|
|Filename: [hbase-gce-overview.json](cassandra-gce-overview.json)|
|This dashboard has charts for viewing Hbase Operations when monitored by [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/cassandra#monitored-metrics), including `Slow Get Operations`, `Slow Append Operations`, `Slow Delete Operations`, `Slow Put Operations`, `Slow Get Operations`, `Get Operations 99 Percentile`, `Append Operations 99 Percentile`, `Delete Operations 99 Percentile`, `Put Operations 99 Percentile`, `Increment Operations 99 Percentile`, and `Replay Operations 99 Percentile`. |