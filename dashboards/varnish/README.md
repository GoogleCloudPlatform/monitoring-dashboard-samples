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
|This dashboard is based on prometheus metrics exposed by an [exporter](https://github.com/jonnenauha/prometheus_varnish_exporter), including `Service Status`, `Uptime`, `Backend Up`, `Happy Backend Health Probes`, `Backend Connections`, `Reused and Recycled Backend Connections`, `Session Connections`, `Dropped Session Connections`, `Backend Requests`, `Session Requests`, `Session Request Errors`, `Active Threads`, `Threads Created`, `Object Structs Created`, `Expired Objects`, `Cache Hits`, and `Cache Misses`.|
