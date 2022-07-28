### Dashboards for Vault

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/vault#monitored-metrics).

|Vault Overview|
|:------------------|
|Filename: [vault-gce-overview.json](vault-gce-overview.json)|
|This dashboard has charts displaying `Token Count`, `Lease Count`, `Average Revoke Time`, `Average Renew Time`, `Storage Operations Count`, `Storage Operation Time`, `Request Count`, and `Memory Usage` from Vault as well as charts of infrastructure related metrics for the running Vault VMs: `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`. There is also a card with links to docs and the Vault logs in Cloud Logging.|
