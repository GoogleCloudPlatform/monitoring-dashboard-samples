## Reinforcement Learning Workload Performance Dashboard

This dashboard provides comprehensive metrics for monitoring Reinforcement Learning (RL) training workloads. It includes visualizations for loop duration, environment rewards, training loss, model fraction utilization (MFU), and throughput (samples and tokens rates).

### Metrics Collected

The dashboard relies on Prometheus metrics with the prefix `prometheus.googleapis.com/rl.`.

*   **Performance**: Loop duration, Training MFU.
*   **Training**: Mean Reward, Mean Train Loss.
*   **Throughput**: Samples/sec, Tokens/sec (total and per GPU), Total Samples/Episodes/Tokens/Steps rates.
*   **Breakdown**: Duration breakdown for Reward, Train, Sample, and Step phases.

### Prerequisites

*   **OTLP Metrics**: Instrument your application or RL framework to record RL metrics using OpenTelemetry (OTLP) following semantic conventions (using the `rl.` prefix). When ingested into Google Cloud, these metrics are made queryable with the `prometheus.googleapis.com/rl.*` prefix.

### Dashboard Deployment

To view this dashboard in your Google Cloud Console:

1.  Open the [Google Cloud Monitoring Dashboards](https://console.cloud.google.com/monitoring/dashboards) page.
2.  Click **Create Dashboard**.
3.  In the top-right corner, click **JSON Editor**.
4.  Replace the default contents with the contents of [rl-workload-performance.json](rl-workload-performance.json).
5.  Click **Submit** or **Apply**.

---
*Note: This is a sample dashboard and may require adjustments based on your specific metric names or labels if customized.*
