### Dashboards for MySQL

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/mysql#monitored-metrics).

|MySQL Overview|
|:------------------|
|Filename: [overview.json](overview.json)|
|This dashboard has charts displaying: `Buffer Pool Operations`, `Buffer Pool Pages`, `Buffer Pool Size`, `Handlers`, `Double Writes`, `Page Operations`, `Operations`, `Log Operations`, `Row Operations`, `Row Locks`, `Locks`, `Commands`, `Sorts`, and `Threads` from MySQL as well as charts of infrastructure related metrics for the running MySQL VMs: `CPU % Top 5 VMs` and `MySQL VMs by Region` for a count of VMs over time. There is also a card with links to docs and MySQL log in Cloud Logging.|

#### Notes

- This dashboard is based on prometheus metrics being exposed by an [exporter](https://github.com/prometheus/mysqld_exporter).

|MySQL Prometheus|
|:------------------|
|Filename: [mysql-prometheus.json](mysql-prometheus.json)|
|This dashboard has charts displaying: `Global Status Uptime (days)`, `Available Connections`, `Open Files Available`, `Cache Hit Rate`, `MySQL Up`, `Global Status Connection Error Rate (5m)`, `Slow Queries`, `Buffer Pool Cache Hit Ratio`, `Full Join`, `Full Range Join`, `Range Check`, and `Scan` |
