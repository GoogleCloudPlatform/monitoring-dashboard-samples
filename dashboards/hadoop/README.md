### Dashboards for Hadoop

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/hadoop#monitored-metrics).

|Hadoop GCE Overview|
|:------------------|
|Filename: [hadoop-gce-overview.json](hadoop-gce-overview.json)|
|This dashboard has 12 charts for viewing Hadoop when monitored by [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/hadoop#monitored-metrics), including `Data Nodes`, `Volume Failures`, `Capacity Used`, `Capacity Limit`, `Block Count`, `Corrupt Blocks`, `Missing Blocks`, `File Count`, `File Load`, `CPU % Top 5 VMs`, `Memory % Top 5 VMs` and`Hosts By Region`. There is also a `Hadoop Monitoring Link` card with links to docs and Hadoop log in Cloud Logging.|

|Hadoop Prometheus Overview|
|:------------------|
|Filename: [hadoop-prometheus-overview.json](hadoop-prometheus-overview.json)|
|This dashboard is based on prometheus metrics exposed by an [exporter](https://github.com/prometheus/jmx_exporter), including `Open Connections`, `Active Clients`, `Active Sources`, `Active Sinks`, `Block Pool Utilization %`, `Threads`, `Active Data Nodes`, `Dead Data Nodes`, `Stale Data Nodes`, `Capacity Used`, `Capacity Limit`, `File Count`, `File Load`, `Heap Memory (mb)`, `Nonheap Memory (mb)`, `Block Count`, `Block Capacity`, `Missing Blocks`, `Corrupt Blocks`, `Under-replicated Blocks`, `Excess Blocks`, `Volume Failures`, `Dropped Connections`, `Error Logs`, and `Fatal Logs`.|
