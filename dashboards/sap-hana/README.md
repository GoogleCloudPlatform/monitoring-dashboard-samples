### Dashboards for SAP HANA

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/sap_hana#monitored-metrics).

|SAP HANA Overview|
|:------------------|
|Filename: [sap-hana-gce-overview.json](sap-hana-gce-overview.json)|
|This dashboard has charts displaying `Instance Memory`, `Service Memory Used`, `Schema Estimated Max Memory`, `Rowstore Memory Size`, `Schema Read Outliers`,`Schema Write Outlines`, `Schema Record Count Outliers`, `System Connections`, `Alerts`, and `Blocked Transactions` from SAP HANA as well as charts of infrastructure related metrics for the running SAP HANA VMs: `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`. There is also a card with links to docs and the SAP HANA logs in Cloud Logging.|
