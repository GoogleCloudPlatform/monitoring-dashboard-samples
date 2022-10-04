### Dashboards for Varnish

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/varnish#monitored-metrics).

|Varnish Overview|
|:------------------|
|Filename: [varnish-gce-overview.json](varnish-gce-overview.json)|
|This dashboard has charts displaying `Backend Connections`, `Session Connections`, `Requests`, `Request Errors`, `Threads`, `Cache Hits / Misses`, `Current Cached Objects`, & `Cached Objects` from Varnish as well as charts of infrastructure related metrics for the running Varnish VMs: `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`. There is also a card with links to docs and the Varnish logs in Cloud Logging.|

|Varnish Prometheus Overview|
|:------------------|
|Filename: [varnish-prometheus-overview.json](varnish-prometheus-overview.json)|
|This dashboard is based on prometheus metrics exposed by an [exporter](https://github.com/jonnenauha/prometheus_varnish_exporter), including `Backend Connections`, `Session Connections`, `Requests`, `Request Errors`, `Threads`, `Cache Hits / Misses`, `Expired Objects`, and `Object Structs Created`.|
