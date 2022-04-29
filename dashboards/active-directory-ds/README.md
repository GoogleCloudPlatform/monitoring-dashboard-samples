### Dashboards for Active Directory Domain Services

#### Notes
- These dashboards are based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).

|Active Directory Domain Services Overview|
|:------------------|
|Filename: [active-directory-domain-services-gce-overview.json](active-directory-domain-services-gce-overview.json)|
|This dashboard has charts displaying `Operations per Second`, `Search Sub-Operations per Second`, `LDAP Client Sessions`, `LDAP Client Bind Time`, `LDAP Successful Binds per Second`, `LDAP Searches per Second`, `Security Descriptor Propagation Events Queued`, `Security Descriptor Sub-Operations per Second`, `Client Binds`, `Server Binds`, `Name Cache Hit Rate`, `Queued Notifications`, & `Threads in Use` from Active Directory Domain Services as well as charts of infrastructure related metrics for the running Active Directory Domain Services VMs: `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`. There is also a card with links to docs and the Active Directory Domain Services logs in Cloud Logging.|

|Active Directory Replication Agent Overview|
|:------------------|
|Filename: [active-directory-replication-agent-gce-overview.json](active-directory-replication-agent-gce-overview.json)|
|This dashboard has charts displaying `Total Inbound Network Bytes`, `Total Outbound Network Bytes`, `Full Sync Objects Remaining`, `Inbound Objects per Second`, `Outbound Objects per Second`, `Inbound Properties per Second`, `Outbound Properties per Second`, `Inbound Values per Second`, `Outbound Values per Second`, `Pending Operations`, & `Sync Requests` from the Active Directory Replication Agent. There is also a card with links to docs and Active Directory logs in Cloud Logging.|
