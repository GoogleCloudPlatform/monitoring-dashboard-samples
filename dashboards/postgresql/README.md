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
|This dashboard is based on prometheus metrics exposed by an [exporter](https://github.com/prometheus-community/postgres_exporter). This dashboard has charts displaying: `Backend Utilization %`, `Temporary Bytes to Disk`, `Rows Fetched/Returned`, `Buffers`, `Rows Inserted/Updated/Deleted`, `Checkpoints Requests/Scheduled`, and `Blocks Hit/Read`|
