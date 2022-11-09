### Dashboards for Tomcat

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).

|Tomcat GCE Overview|
|:------------------|
|Filename: [tomcat-gce-overview.json](tomcat-gce-overview.json)|
|This dashboard has charts for viewing Tomcat when monitored by Google's Ops Agent including `Traffic`, `Errors - Top 5 VMs`, `Processing Time`, `Active Sessions`, `Threads`, `Requests`, `Max Processing Time`, `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`.|

|Tomcat Prometheus Overview|
|:------------------|
|Filename: [tomcat-prometheus-overview.json](tomcat-prometheus-overview.json)|
|This dashboard is based on prometheus metrics exposed by an [exporter](https://github.com/prometheus/jmx_exporter), including `Traffic (bytes)`, `Errors`, `Processing Time`, `Active Sessions`, `Threads`, `Requests`, and `Session Processing Time`.|
