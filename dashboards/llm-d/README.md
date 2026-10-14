### Dashboards for llm-d

#### Notes

- This dashboard is based on Prometheus metrics from [llm-d](https://github.com/llm-d/llm-d).

|llm-d Overview|
|:------------------|
|Filename: [llm-d-dashboard.json](llm-d-dashboard.json)|
|This dashboard has charts displaying throughput, latency, cache usage, and other metrics for llm-d stacks (< v0.8.0).|
|Filename: [llm-d-dashboard-2.json](llm-d-dashboard-2.json)|
|This dashboard has charts displaying throughput, latency, cache usage, and other metrics for llm-d stacks using the new metric prefix `llm_d_epp`.|

#### Version change

##### 2026-10-14

v2 - The v1 version of the dashboard using legacy metric prefixes (`inference_objective`, `inference_pool`, `inference_extension`) is renamed to `llm-d Overview (< v0.8.0)`. `llm-d` versions `v0.8.0` and later use the `llm_d_epp` metric prefix in `llm-d-dashboard-2.json`.
