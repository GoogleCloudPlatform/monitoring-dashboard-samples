### Dashboards for MongoDB

#### Notes

- The deprecated dashboard listed [here](https://github.com/GoogleCloudPlatform/monitoring-dashboard-samples/tree/master/dashboards/mongodb/deprecated) exists as an alternative for people who deployed their mongo instance within GCE, however the more external installation seems the more prevalent, so that is the default.

|MongoDB Overview|
|:------------------|
|Filename: [mongodb-gce-overview.json](mongodb-gce-overview.json)|
|This dashboard has charts displaying `Connections`, `Sessions`, `Databases`, `Data Size`, `Storage Size`, `Objects`, `Collections`, `Document Operations`, `Indexes`, `Indexes accessed`, `Index Size`, `Requests`, `Received Bytes`, `Transmitted Bytes`, `Operations Rate Avg.`, `Operations Duration`, `Memory Usage`, `Cache Hits / Misses`, `Global Lock Hold Time`, `Cursors`, and `Cursor Duration` from MongoDB as well as charts of infrastructure related metrics for the VMs running MongoDB: `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`. There is also a log panel containing MongoDB logs.|

|MongoDB Prometheus|
|:------------------|
|Filename: [mongodb-prometheus.json](mongodb-prometheus.json)|
|This dashboard is based on prometheus metrics exposed by an [exporter](https://github.com/percona/mongodb_exporter). This dashboard has charts displaying: `Active Connections`, `Available Connections`, `Memory Utilization %`, `Page Faults`, `Asserts`, `Memory (kb)`, `Disk Read/Write IO`, `Disk Queue Time (microseconds)`, `Collection Ops`, `Collection Ops Latencies (microseconds)`, `Collection Size (bytes)`, `Document Ops`, `Operations Queued due to Lock`, `Operation Scan and Order`, and `Oplog Size`. |
