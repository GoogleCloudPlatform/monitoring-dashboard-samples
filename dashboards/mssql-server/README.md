### Dashboards for Microsoft SQL Server

##### Notes:

- Some dashboards are based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/mssql#monitored-metrics).
- One dashboard is based on [Bindplane](https://cloud.google.com/stackdriver/blue-medora).
- For a detailed list of all the Bindplane metrics and set up information for Microsoft SQL Server, you can find documentation [here](https://docs.bindplane.bluemedora.com/docs/microsoft-sqlserver).

|SQL Server GCE Overview|
|:------------------|
|Filename: [sqlserver-gce-overview.json](sqlserver-gce-overview.json)|
|This dashboard has charts for viewing SQL Server when monitored by  Google's Ops Agent including `User Connections`, `Avg Lock Wait Time`, `Lock Waits`, `Batch Info`, `Buffer Cache Hit Ratio`, `Page Checkpoint Flushes`, `Lazy Writes`, `Page Life Expectancy`, `Page Splits`, `Page Operations`, `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`. |

|SQL Server Transaction Logs|
|:------------------|
|Filename: [sqlserver-transaction-logs.json](sqlserver-transaction-logs.json)|
|This dashboard has charts for viewing SQL Server Transaction Log data when monitored by Google's Ops Agent including `Log Flush Waits`, `Log Flushes`, `Log Flush Data`, `Log Usage`, `Log Growths`, and `Log Shrinks`. |
