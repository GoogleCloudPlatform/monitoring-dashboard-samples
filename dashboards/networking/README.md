### Dashboards for Networking

|Cloud CDN Monitoring|
|:-------------------|
|Filename: [cloud-cdn-monitoring.json](cloud-cdn-monitoring.json)|
|This dashboard has 12 charts for the [Cloud CDN metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-loadbalancing) `CDN traffic overview`.|

&nbsp;

|Cloud DNS Monitoring|
|:-------------------|
|Filename: [clouddns-monitoring.json](clouddns-monitoring.json)|
|This dashboard has one chart for the [Cloud DNS metric](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-clouddns) `Private DNS response counts`.|

&nbsp;

|VPN Monitoring|
|:-------------|
|Filename: [cloudvpn-monitoring.json](cloudvpn-monitoring.json)|
|This dashboard has 8 charts for the related [Cloud VPN metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-vpn), including `Number of connections`, `Tunnel established`, and metrics for incoming/outgoing network traffic.|

&nbsp;

|Firewall Insights Monitoring|
|:---------------------------|
|Filename: [firewall-insight-monitoring.json](firewall-insight-monitoring.json)|
|This dashboard has 2 charts for the [Firewall insights metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-firewallinsights). Those two metrics are `Subnet Firewall Hit Counts` and `VM Firewall Hit Counts`.|

&nbsp;

|GCE Network Monitoring|
|:---------------------|
|Filename: [gce-network-monitoring.json](gce-network-monitoring.json)|
|This dashboard has 4 charts for the related [GCE VM networking metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-networking), including `GCE VM Instance - Egress bytes`, `GCE VM Instance - Ingress bytes`, `Number of probes`, and `GCE VM Instance - RTT latencies`.|

&nbsp;

|HTTP/S Load Balancer Monitoring|
|:------------------------------|
|Filename: [https-loadbalancer-monitoring.json](https-loadbalancer-monitoring.json)|
|This dashboard has 9 charts for the related [HTTP/s load balancer metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-loadbalancing), including `Request Count`, `Total Latency`, `Request Bytes`, `Response Bytes`, `Frontend RTT`, `Backend Request Count`, `Backend Request Bytes`, and `Backend Response Bytes`.|

&nbsp;

|HTTP/S Load Balancer Backend Services Monitoring|
|:-----------------------------------------------|
|Filename: [https-lb-backend-services-monitoring.json](https-lb-backend-services-monitoring.json)|
|This dashboard has 10 charts for the related [HTTP/s load balancer metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-loadbalancing),
including `Backend Request Count by Code Class`, `Backend Request Count by Path`, `Error Rate`, `Error Count by Path and Code`, `Backend Latency`, `Backend P50 Latency by Path`, `Backend Request Bytes`, `Backend Request Bytes by Path`,
`Backend Response Bytes` and `Backend Response Bytes by Path` all grouped by
`backend_target_name`. It is intended to be used with a dashboard-wide filter on
`backend_target_name`.

&nbsp;

|Network TCP Load Balancer Monitoring|
|:-----------------------------------|
|Filename: [network-tcp-loadbalancer-monitoring.json](network-tcp-loadbalancer-monitoring.json)|
|This dashboard has 5 charts for the related [network TCP load balancer metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-loadbalancing), including `RTT latencies`, `Ingress TCP packets`, `Ingress TCP bytes`, `Egress TCP packets`, and `Egress TCP bytes`.|

&nbsp;

|Network UDP Load Balancer Monitoring|
|:-----------------------------------|
|Filename: [network-udp-loadbalancer-monitoring.json](network-udp-loadbalancer-monitoring.json)|
|This dashboard has 4 charts for the related [network UDP load balancer metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-loadbalancing), including `Ingress UDP packets`, `Ingress UDP bytes`, `Egress UDP packets`, and `Egress UDP bytes`.|

&nbsp;

|TCP/SSL Load Balancer Monitoring|
|:-------------------------------|
|Filename: [tcp-ssl-loadbalancer-monitoring.json](tcp-ssl-loadbalancer-monitoring.json)|
|This dashboard has 6 charts for the related [TCP/SSL load balancer metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-loadbalancing), including `Frontend RTT`, `Open connections`, `New connections opened`, `Closed connections`, `Ingress bytes`, and `Egress bytes`.|

&nbsp;

|VPC Connector Access Monitoring|
|:------------------------------|
|Filename: [vpc-connector-access-monitoring.json](vpc-connector-access-monitoring.json)|
|This dashboard has 4 charts for the related [VPC connector access metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-vpc%20access), including `Bytes received delta`, `Bytes sent delta`, `Packets received delta`, and `Packets sent delta`.|

&nbsp;

|VPC Flow Logs Monitoring|
|:------------------------------|
|Filename: [vpc-flow-logs-monitoring.json](vpc-flow-logs-monitoring.json)|
|This dashboard has 6 charts for the related [VPC flow logs metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-networking), including `Ingested log volume`, `log counts`, estimated `VPC Flow logs` counts and volume.|
