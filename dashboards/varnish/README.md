### Dashboards for Varnish

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/varnish#monitored-metrics).

|Varnish Overview|
|:------------------|
|Filename: [varnish-gce-overview.json](varnish-gce-overview.json)|
|This dashboard has charts displaying `Backend Connections`, `Session Connections`, `Requests`, `Request Errors`, `Threads`, `Cache Hit Rate`, `Cache Hits / Misses`, `Current Cached Objects`, & `Cached Objects` from Varnish as well as charts of infrastructure related metrics for the running Varnish VMs: `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`. There is also a card with links to docs and the Varnish logs in Cloud Logging.|
