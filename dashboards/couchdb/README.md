### Dashboards for Couchdb

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).


|Couchdb GCE Overview|
|:------------------|
|Filename: [couchdb-gce-overview.json](couchdb-gce-overview.json)|
|This dashboard has 12 charts for viewing couchdb when monitored by 
[Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/couchdb#monitored-metrics), including `Average Request Time`, `Bulk Requests`, `Requests by Method`, `Responses by Status Code`, `Open Databases`, `Open Files Descriptors`, `Views`, `Database Operations`, `CPU % Top 5 VMs`, `Memory % Top VMs`, `Apache Monitoring Link`, and `Hosts By Region`.