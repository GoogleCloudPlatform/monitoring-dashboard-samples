### Dashboards for Agent for SAP


|Agent for SAP - HANA Overview|
|:------------------|
|Filename: [agent-for-sap-hana-overview.json](agent-for-sap-hana-overview.json)|
|This dashboard is based on [Google Cloud Agent for SAP](https://cloud.google.com/solutions/sap/docs/agent-for-sap/latest/all-guides) and has status overview charts displaying `HANA Availability`, `HANA High Availability`, `HANA HA Replication`, `HANA Service Status`, `HA Cluster - Node State`,`HA Cluster - Resource State` for SAP HANA Instances. The charts in this dashboard indicate the status of the entities with a value of `1` indicating healthy status.|


|Agent for SAP - HANA Raw Metrics|
|:------------------|
|Filename: [agent-for-sap-hana-raw-metrics.json](agent-for-sap-hana-raw-metrics.json)|
|This dashboard is based on Google's [Google Cloud Agent for SAP](https://cloud.google.com/solutions/sap/docs/agent-for-sap/latest/all-guides) and has charts displaying raw metric values for `HANA Availability`, `HANA High Availability`, `HANA HA Replication`, `HANA Service Status`, `HA Cluster - Node State`,`HA Cluster - Resource State` for SAP Instances. The charts in this dashboard indicate the raw metrics. The description of different possible values can be found in MQL for respective charts.|

|Agent for SAP - Backint Metrics|
|:------------------|
|Filename: [agent-for-sap-backint-metrics.json](agent-for-sap-backint-metrics.json)|
|This dashboard is based on [Google Cloud Agent for SAP](https://cloud.google.com/solutions/sap/docs/agent-for-sap/latest/all-guides) and has status and throughput charts displaying `Backup Status`, `Backup Throughput`, `Restore Status`, and `Restore Throughput` for Backint based backups and recoveries. The status charts in this dashboard indicate the status of backups and restores with a value of `1` indicating a successful transfer. The throughput charts in this dashboard indicate the transfer rate of backups and restores in Mbps. This dashboard also contains Backint logs and can be filtered by severity level.|

|Agent for SAP - Maintenance Events|
|:------------------|
|Filename: [agent-for-sap-maintenance-events.json](agent-for-sap-maintenance-events.json)|
|This dashboard has charts displaying log queries for `Scheduled`, `In Progress`, and `Completed` Maintenance Events.|
