### Dashboards for Bindplane SecOps Exporter

#### Notes

- This dashboard is based on the [Bindplane Collector source](https://bindplane.com/docs/resources/sources/bindplane-agent) and
  [Google Cloud destination](https://bindplane.com/docs/resources/destinations/google-cloud) Bindplane resources.

|Bindplane SecOps Exporter|
|:------------------|
|Filename: [secops.json](secops.json)|
|This dashboard has charts displaying: `Request latency`, `Request batch size`, `Request payload size`, `Log sent rate`, `Log failure rate`, `Exporter sending queue utilization`, `Exporter sending queue size`, `Exporter sending queue latency`, `Exporter sending queue batch size`, `Exporter sending queue payload size`, and `Exporter sending queue utilization`|

#### Usage

1. Configure the [Bindplane Collector source](https://bindplane.com/docs/resources/sources/bindplane-agent) and ensure Exporter metrics are enabled.
2. Configure the [Google Cloud destination](https://bindplane.com/docs/resources/destinations/google-cloud).
3. Import the dashboard into your Google Cloud Monitoring workspace.


