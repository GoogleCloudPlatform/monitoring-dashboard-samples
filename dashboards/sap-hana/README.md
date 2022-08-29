### Dashboards for SAP HANA

#### Notes

|SAP HANA GCE Overview|
|:------------------|
|Filename: [sap-hana-gce-overview.json](sap-hana-gce-overview.json)|
|This dashboard is based on [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/sap_hana#monitored-metrics) and has charts displaying `Instance Memory`, `Service Memory Used`, `Schema Estimated Max Memory`, `Rowstore Memory Size`, `Schema Read Outliers`,`Schema Write Outlines`, `Schema Record Count Outliers`, `System Connections`, `Alerts`, and `Blocked Transactions` from SAP HANA as well as charts of infrastructure related metrics for the running SAP HANA VMs: `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`. There is also a card with links to docs and the SAP HANA logs in Cloud Logging.|

|SAP HANA|
|:------------------|
|Filename: [performance.json](performance.json)|
|This dashboard based on Google's [Monitoring agent for SAP HANA V2.0](https://cloud.google.com/solutions/sap/docs/sap-hana-monitoring-agent-planning-guide) and has 8 charts to display the metrics ingested. The metrics include `Instance Memory`, `Schema Records`, `Connections`, and `Rowstore Memory Size` etc.|
