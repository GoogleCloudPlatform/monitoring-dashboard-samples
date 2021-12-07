### Dashboards for MongoDB

### Notes

- These metrics are supplied from [BindPlane's agent integration for MongoDB](https://docs.bindplane.bluemedora.com/docs/stackdriver-agent-migration-mongodb)
- For some metrics, they are written to different monitored resources. The migration guide calls for the collector to be installed on the host of the mongo environment. 
  - If the host exists in AWS it will be written to the monitored resource `aws_ec2_instance`.
  - If the host exists in GCP it will be written to `gce_instance` (what is included in these sample dashboards)
  - If the host is running externally then the monitored resource will be `generic_node`
- For this reason, there may be some more additional setup and extension to get dashboards working for everyone

|MongoDB Overview|
|:------------------|
|Filename: [overview.json](overview.json)|
|This dashboard has several charts for the related [BindPlane metrics for MongoDB](https://docs.bindplane.bluemedora.com/docs/stackdriver-metrics-mongodb), including metrics like `Indexes`, `Available Connections`, `Active Connections`, `Data Size`,`Memory Usage`, `Number of Objects`, and `Throughput`.|
