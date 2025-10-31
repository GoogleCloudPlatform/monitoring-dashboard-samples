### Dashboards for GKE Inference Gateway

#### Notes

- This dashboard is based on prometheus metrics from [gateway-api-inference-extension](https://github.com/kubernetes-sigs/gateway-api-inference-extension).

|GKE Inference Gateway Prometheus Overview|
|:------------------|
|Filename: [inference-extension-prometheus.json](inference-extension-prometheus.json)|
|This dashboard has charts displaying throughput, latency, cache usage, and other metrics for GKE Inference Gateway.|
|Filename: [inference-extension-prometheus-2.json](inference-extension-prometheus-2.json)|
|This dashboard has charts displaying throughput, latency, cache usage, and other metrics for GKE Inference Gateway using the new metric prefix `inference_objective`.|

#### Version change

##### 2025-10-31

The v1 version of the dashboard using metric prefix `inference_model` is renamed to `GKE Inference Gateway Prometheus Overview (< v1.1.0)`. Inference Gateway
with version greater than v1.1.0 uses the new metric prefix `inference_objective`.

##### 2025-09-17

v2 - The dashboard uses new metric prefix `inference_objective` for all metrics with old prefix `inference_model`.
