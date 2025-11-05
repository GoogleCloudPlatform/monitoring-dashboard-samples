### Dashboards for vLLM

#### Notes

- This dashboard is based on built-in prometheus metrics.

|vLLM Prometheus Overview|
|:------------------|
|Filename: [vllm-prometheus.json](vllm-prometheus.json)|
|This dashboard has charts displaying throughput, latency, cache usage, and other metrics for inference.|

#### Version change

##### 2025-09-30

v2 - The dashboard uses the new metrics and drops metrics deprecated in vLLM [v0.10.2](https://docs.vllm.ai/en/v0.10.2/design/metrics.html).