### Dashboards for IIS

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/iis#monitored-metrics).

|IIS Overview|
|:------------------|
|Filename: [iis-gce-overview.json](iis-gce-overview.json)|
|This dashboard has charts displaying `Requests`, `Rejected Requests`, `Request Queue`, `Threads Active`, `Current Connections`, `Connection Attempts`, `Anonymous Connections`, `Network Bytes`, `Network Blocked Bytes`, & `Network Files` from IIS as well as charts of infrastructure related metrics for the running IIS VMs: `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`. There is also a card with links to docs and the IIS logs in Cloud Logging.|
