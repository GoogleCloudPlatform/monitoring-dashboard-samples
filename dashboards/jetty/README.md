### Dashboards for Jetty

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/jetty#monitored-metrics).

|Jetty Overview|
|:------------------|
|Filename: [jetty-gce-overview.json](jetty-gce-overview.json)|
|This dashboard has charts displaying `Sessions`, `Session Time`, `Select Calls`, `Max Session Time`, `Threads`, and `Thread Queue` from Jetty as well as charts of infrastructure related metrics for the running Jetty VMs: `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`. There is also a card with links to docs and the Jetty logs in Cloud Logging.|

|Jetty Prometheus Overview|
|:------------------|
|Filename: [jetty-prometheus-overview.json](jetty-prometheus-overview.json)|
|This dashboard is based on prometheus metrics exposed by an [exporter](https://github.com/prometheus/jmx_exporter), including `Sessions`, `Session Time`, `Select Calls`, `Max Session Time`, `Threads`, and `Thread Queue`.|
