### Dashboards for Istio

#### Notes

- This dashboard is based on [metrics collected by Istio](https://istio.io/latest/docs/reference/config/metrics/) and [exported to Prometheus](https://istio.io/latest/docs/ops/integrations/prometheus/) for mesh traffic and the built-in Envoy sidecar.

|Istio Envoy Prometheus Overview|
|:------------------|
|Filename: [istio-envoy-prometheus.json](istio-envoy-prometheus.json)|
|This dashboard has charts displaying Istio service metrics: `Requests by destination workload`, `Requests by status code`, `Latency by destination workload`, and Envoy Proxy metrics: `Live Proxies`, `Average Uptime (minutes)`, `Allocated Memory`, `Heap Size`, `Unhealty Proxies`, `Total Active Connections`, `Total Requests Rate`, `Allocated Memory`, `Upstream Network Traffic`, `CDS Update Attemps`, `CDS Update Success`, and `CDS Update Failure`|
