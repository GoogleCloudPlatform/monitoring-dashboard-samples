### Dashboards for Apache

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/apache#monitored-metrics).

|Apache Overview|
|:------------------|
|Filename: [apache-gce-overview.json](apache-gce-overview.json)|
|This dashboard has charts displaying `Request Rate`, `Traffic Rate`, `Connections`, `Scoreboard` and `Workers` from Apache as well as charts of infrastructure related metrics for the running Apache VMs: `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`. There is also a card with links to docs and the Apache logs in Cloud Logging.|

|Apache Prometheus Overview|
|:------------------|
|Filename: [apache-prometheus-overview.json](apache-prometheus-overview.json)|
|This dashboard is based on Prometheus metrics exposed by an [exporter](https://github.com/Lusitaniae/apache_exporter). It has charts displaying `Apache Version`, `Server Status`, `Uptime (seconds)`, `Scoreboard`, `Connections`, `Processes`, `Workers`, `CPU Load`, `Load`, `Sent Request Rate (kb)`, and `Traffic Rate (ms)` from Apache.|
