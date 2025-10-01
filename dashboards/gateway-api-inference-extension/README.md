### Dashboards for GKE Inference Gateway

#### Notes

- This dashboard is based on prometheus metrics from [gateway-api-inference-extension](https://github.com/kubernetes-sigs/gateway-api-inference-extension).

|GKE Inference Gateway Prometheus Overview|
|:------------------|
|Filename: [inference-extension-prometheus.json](inference-extension-prometheus.json)|
|This dashboard has charts displaying throughput, latency, cache usage, and other metrics for GKE Inference Gateway.|

#### Version change

##### 2025-09-17

v2 - The dashboard uses new metric prefix `inference_objective` for all metrics with old prefix `inference_model`.