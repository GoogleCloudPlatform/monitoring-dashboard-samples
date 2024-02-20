### Dashboards for PostgreSQL

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).


|PostgreSQL GCE Overview|
|:------------------|
|Filename: [postgresql-gce-overview.json](postgresql-gce-overview.json)|
|This dashboard has 9 charts for viewing PostgreSQL when monitored by [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/postgresql#monitored-metrics), including `Backends`, `Commits/Rollbacks`, `Database Size`, `Database Rows`, `Blocks Read`, `Operations`, `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`.

|PostgreSQL Prometheus|
|:------------------|
|Filename: [postgresql-prometheus.json](postgresql-prometheus.json)|
|This dashboard is based on prometheus metrics exposed by an [exporter](https://github.com/prometheus-community/postgres_exporter). This dashboard has charts displaying: `Active Connections`, `Deadlocks`, `Conflicts`, `Connections`, `Max Active Transaction Duration (seconds)`, `Backend Utilization %`, `Temporary Bytes to Disk`, `Rows Fetched/Returned`, `Rows Inserted/Updated/Deleted`, `Blocks Hit/Read`, `Block Read/Write Time`, `Buffers`, `Checkpoints Requests/Scheduled`, `Replication Lag (seconds)`, `Max Replication Slots` and `Max Logical Replication Workers`. |
