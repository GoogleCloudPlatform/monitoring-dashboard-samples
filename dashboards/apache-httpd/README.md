### Dashboards for Apache HTTPD

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/apache#monitored-metrics).

|Apache HTTPD Overview|
|:------------------|
|Filename: [overview.json](overview.json)|
|This dashboard has charts displaying `Scoreboard`, `Connections`, `Traffic`, `Requests`, `Workers`, and `Uptime` from Apache HTTPD as well as charts of infrastructure related metrics for the running Apache HTTPD VMs: `CPU % Top 5 VMs` and `Apache HTTPD VMs by Region` for a count of VMs over time. There is also a card with links to docs and Apache HTTPD log in Cloud Logging.|
