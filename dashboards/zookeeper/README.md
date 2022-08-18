### Dashboards for Zookeeper

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).


|Zookeeper GCE Overview|
|:------------------|
|Filename: [zookeeper-gce-overview.json](zookeeper-gce-overview.json)|
|This dashboard has 11 charts for viewing Zookeeper when monitored by [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/zookeeper#monitored-metrics), including `Active Connections`, `Active Requests`, `Average Max Latency`, `Packets`, `Followers`, `ZNodes`, `Data Tree Size`, `File Descriptors`,  `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`.

#### Notes

- This dashboard is based on [built-in prometheus metrics](https://zookeeper.apache.org/doc/r3.6.3/zookeeperMonitor.html).

|Zookeeper Prometheus|
|:------------------|
|Filename: [zookeeper-prometheus.json](zookeeper-prometheus.json)|
| This dashboard includes charts displaying: `Uptime`, `ZNodes Total Memory (GB)`, `ZNodes`, `Connections`, `Watch Count`, `Leader Elections Counter`, `Open File Descriptors`, `Fsync Time (ms)`, `Snapshot Time (ms)`, `Average Latency (ms)`, and `JVM Memory` |
