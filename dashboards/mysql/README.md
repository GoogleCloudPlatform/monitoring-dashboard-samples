### Dashboards for MySQL

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/mysql#monitored-metrics).

|MySQL Overview|
|:------------------|
|Filename: [overview.json](overview.json)|
|This dashboard has charts displaying: `Buffer Pool Operations`, `Buffer Pool Pages`, `Buffer Pool Size`, `Handlers`, `Double Writes`, `Page Operations`, `Operations`, `Log Operations`, `Row Operations`, `Row Locks`, `Locks`, `Commands`, `Sorts`, and `Threads` from MySQL as well as charts of infrastructure related metrics for the running MySQL VMs: `CPU % Top 5 VMs` and `MySQL VMs by Region` for a count of VMs over time. There is also a card with links to docs and MySQL log in Cloud Logging.|

|MySQL Prometheus|
|:------------------|
|Filename: [mysql-prometheus.json](mysql-prometheus.json)|
|This dashboard is based on prometheus metrics being exposed by an [exporter](https://github.com/prometheus/mysqld_exporter). This dashboard has charts displaying: `Uptime (minutes)`, `Available Connections`, `Open Files Available`, `Cache Hit Rate`, `MySQL Up`, `Connection Errors`, `Slow Queries`, `Buffer Pool Cache Hit Rate`, `Questions`, `Fsync Operations`, `InnoDB Buffer Pool Read Requests vs Reads From Disk`, `Select Statements`, and `Insert/Update/Delete Statements` |
