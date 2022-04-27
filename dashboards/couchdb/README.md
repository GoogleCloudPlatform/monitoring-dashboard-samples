### Dashboards for Couchdb

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/couchdb#monitored-metrics).


|CouchDB GCE Overview|
|:------------------|
|Filename: [couchdb-gce-overview.json](couchdb-gce-overview.json)|
|This dashboard has 12 charts for viewing couchdb when monitored by [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/couchdb#monitored-metrics), including `Requests by Method`, `Responses by Status Code`, `Average Request Time`, `Bulk Requests`, `Views`, `Database Operations`, `Open Files Descriptors`, `Open Databases`, `CPU % Top 5 VMs`, `Memory % Top VMs` and `Hosts By Region`. There is also a `Couchdb Monitoring Link` card with links to docs and couchdb log in Cloud Logging.
