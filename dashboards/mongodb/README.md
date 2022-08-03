### Dashboards for MongoDB

#### Notes

- The deprecated dashboard listed [here](https://github.com/GoogleCloudPlatform/monitoring-dashboard-samples/tree/master/dashboards/mongodb/deprecated) exists as an alternative for people who deployed their mongo instance within GCE, however the more external installation seems the more prevalent, so that is the default. 

|MongoDB Overview|
|:------------------|
|Filename: [mongodb-gce-overview.json](mongodb-gce-overview.json)|
|This dashboard has charts displaying `Number of Connections`, `Number of Sessions`, `Number of Databases`, `Data Size`, `Storage Size`, `Number of Objects`, `Number of Collections`, `Number of Document Operations`, `Number of Indexes`, `Number of Indexes accessed`, `Index Size`, `Number of requests`, `Received Bytes`, `Transmitted Bytes`, `Operations Rate Avg.`, `Operations Duration`, `Memory Usage`, `Cache Hits / Misses`, `Global Lock Hold Time`, `Number of Cursors`, and `Cursor Duration` from MongoDB as well as charts of infrastructure related metrics for the running MongoDB VMs: `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`. There is also a log panel containing MongoDB logs.|

|MongoDB Prometheus|
|:------------------|
|Filename: [mongodb-prometheus.json](mongodb-prometheus.json)|
|This dashboard is based on prometheus metrics exposed by an [exporter](https://github.com/percona/mongodb_exporter). This dashboard has charts displaying: `Connections Available`, `Disk Read/Write IO`, `Memory`, `Opcounters`, and `Ops Latencies`|
