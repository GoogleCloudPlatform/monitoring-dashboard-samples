### Dashboards for GCP storage


|Bigtable Monitoring|
|:------------------|
|Filename: [bigtable-monitoring.json](bigtable-monitoring.json)|
|This dashboard has 13 charts for the related [Bigtable metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-bigtable), including `CPU load`, `Disk load`, `Request count`, `Error count`, and others.|

&nbsp;

|Cloud Storage Monitoring|
|:-----------------------|
|Filename: [cloud-storage-monitoring.json](cloud-storage-monitoring.json)|
|This dashboard has 6 charts for the related [Cloud Storage metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-storage), including `Total object count`, `Total bytes`, `Bucket object count`, `Bucket total bytes`, `Bucket - Received/Sent Bytes`, and `Bucket - Request count`.|

&nbsp;

|Cloud SQL Monitoring|
|:-------------------|
|Filename: [cloudsql-monitoring.json](cloudsql-monitoring.json)|
|This dashboard has 10 charts for the related [Cloud SQL metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-cloudsql), including `Instance state`, `Server up`, and CPU/Memory/Disk utilization etc. This dashboard provides an aggregate view of total resources of your SQL databases. You can use database engine-specific dashboards for additional metrics of different database engines such as MySQL and PostgreSQL.

&nbsp;

|Cloud SQL(MySQL) Monitoring|
|:--------------------------|
|Filename: [cloudsql-mysql-monitoring.json](cloudsql-mysql-monitoring.json)|
|This dashboard has 6 charts for the [Cloud SQL(MySQL) metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-cloudsql), including `Database queries`, `Connections`, `Network bytes received/sent`, and the `InnoDB page` metrics.

&nbsp;

|Cloud SQL(PostgreSQL) Monitoring|
|:-------------------------------|
|Filename: [cloudsql-postgre-monitoring.json](cloudsql-postgre-monitoring.json)
|This dashboard has 3 charts for the [Cloud SQL(PostgreSQL) metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-cloudsql), including `Number of transactions`, `Connections`, and `Lag bytes`.

&nbsp;

|Datastore Monitoring|
|:-------------------|
|Filename: [datastore-monitoring.json](datastore-monitoring.json)|
|This dashboard has 4 charts for the [Datastore metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-datastore), including `Index writes`, `Datastore requests`, `Sizes of read entities`, and `Sizes of written entities`.|

&nbsp;

|Firestore Monitoring|
|:-------------------|
|Filename: [firestore-monitoring.json](firestore-monitoring.json)|
|This dashboard has 7 charts for the [Firestore metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-firestore), including `Document Reads`, `Document Writes`, `Document Deletes`, `Datastore Request`, `Connected Clients`, `Snapshot Listeners`, and `Rule Evaluations`.|

&nbsp;

|Memcache Monitoring|
|:------------------|
|Filename: [memcache-monitoring.json](memcache-monitoring.json)|
|This dashboard has 10 charts for the [Memorystore for Memcached metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-memcache), including `Memory usage by node`, `CPU usuage by node`, `Hit ratio`, `Eviction count`, `Items by node`, and others.

&nbsp;

|Redis Ops Monitoring|
|:-------------------|
|Filename: [redis-ops-monitoring.json](redis-ops-monitoring.json)|
|This dashboard has 10 charts for the operational metrics of [Memorystore for Redis](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-redis), including `Instance Uptime`, `Connected Clients`, `Blocked Clients`, `Calls`, `Time per Call`, and `Average TTL`, etc.|

&nbsp;

|Redis Stats monitoring|
|:---------------------|
|Filename: [redis-stats-monitoring.json](redis-stats-monitoring.json)|
|This dashboard has 14 charts for the stats of [Memorystore for Redis](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-redis), including `Hits`, `Misses`, `Cache Hit Ratio`, `Evicted Keys`, `Expired Keys`, `Memory Usage Ratio`, and others.

&nbsp;

|Spanner Monitoring|
|:-----------------|
|Filename: [spanner-monitoring.json](spanner-monitoring.json)|
|This dashboard has 14 charts for the [Cloud Spanner metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-spanner), including `Count of queries by database`, `API requests by method`, `API bytes sent/received`, CPU and storage utilization, etc.