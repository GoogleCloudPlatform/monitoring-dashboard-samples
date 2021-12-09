### Dashboards for Apache

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/apache#monitored-metrics).

|Apache Overview|
|:------------------|
|Filename: [apache-gce-overview.json](apache-gce-overview.json)|
|This dashboard has charts displaying `Request Rate`, `Traffic Rate`, `Connections`, `Scoreboard` and `Workers` from Apache as well as charts of infrastructure related metrics for the running Apache VMs: `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, `Hosts by Region`, `Apache Access Logs Panel` and `Apache Error Logs Panel`. There is also a card with links to docs and Apache logs in Cloud Logging.|
