### Dashboards for Oracle Database

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/oracledb#monitored-metrics).

|Oracle Database Overview|
|:------------------|
|Filename: [oracledb-gce-overview.json](oracledb-gce-overview.json)|
|This dashboard has charts displaying `Tablespace Usage %`, `Response Time`, `Session Usage %`, `Current Logon Count`, `Process Usage %`, `Process PGA Memory Usage`, `Physical Disk Throughput`, and `Network Throughput` from Oracle Database as well as charts of infrastructure related metrics for the running Oracle Database VMs: `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`. There is also a log panel containing Oracle Database logs.|
