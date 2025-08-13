### Logging Dashboards

#### Notes

- These metrics are populated via [Google system logging metrics](https://cloud.google.com/monitoring/api/metrics_gcp_i_o#gcp-logging).
- There are some specialty dashboards built around other GCP products like GKE that may require additional setup.

|Logging Management|
|:------------------|
|Filename: [management.json](management.json)|
|This dashboard has 6 widgets that focus on quickly understanding the current throughput and log. Some of the highlighted metrics include `Bytes Sent`, `Entries`, `Exported Bytes`, `Exported Logs`, `Log Based Metric Errors`, etc.|

&nbsp;

|Logging Usage - Kubernetes|
|:-----------------------|
|Filename: [kubernetes-usage.json](kubernetes-usage.json)|
|This dashboard has several widgets mostly focusing up on a Kubernetes Logging Environment by looking at the metrics `Log Bytes Sent`, `Log Entries` split up by different monitored resource types found for Kubernetes like `containers`, `pods`, `namespaces`, and `clusters`.|

&nbsp;

|Logging Usage - GKE System logs|
|:-----------------------|
|Filename: [gke-system-usage.json](gke-system-usage.json)|
|This dashboard has widgets to show GKE system logs by looking at the logging metric `byte_count`. It uses various queries to filter the metric for GKE nodes, pods, and containers.|

&nbsp;

|Logging Usage - GCE|
|:-----------------------|
|Filename: [gce-usage.json](gce-usage.json)|
|This dashboard is fairly simple in that it primarily looks at the `Log Bytes Sent` and `Log Entries` metrics but also adds in some additional visualizations of `Entries by Severity`.|


&nbsp;

|Logging Usage - Cloud SQL|
|:-----------------------|
|Filename: [cloudsql-usage.json](cloudsql-usage.json)|
|This dashboard primarily looks at the `Log Bytes Sent` and `Log Entries` metrics but also adds in some additional visualizations of `Entries by Severity` for monitored resources of `cloudsql_database` and `cloudsql_instance_database`.|

&nbsp;

|Logging Usage - Dataflow logs|
|:-----------------------|
|Filename: [dataflow-usage.json](dataflow-usage.json)|
|This dashboard has widgets to show dataflow log volumes by looking at the logging metric `byte_count`. |
