### Dashboards for Solr

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).

|Solr GCE Overview|
|:------------------|
|Filename: [solr-gce-overview.json](solr-gce-overview.json)|
|This dashboard has charts for viewing Solr when monitored by Google's Ops Agent including `Documents`, `Index Size`, `Cache Hit Ratio`, `Cache Size`, `Queries`, `Query Errors`, `Average Query Time`, `Updates`, `Update Errors`, `Average Update Time`, `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`.|

|Solr Prometheus Overview|
|:------------------|
|Filename: [solr-prometheus-overview.json](solr-prometheus-overview.json)|
|This dashboard is based on prometheus metrics exposed by an [exporter](https://github.com/prometheus/jmx_exporter), including `Documents`, `Index Size`, `Cache Hit Ratio`, `Cache Size`, `Queries`, `Query Errors`, `Average Query Time`, `Updates`, `Update Errors`, and `Average Update Time`.|
