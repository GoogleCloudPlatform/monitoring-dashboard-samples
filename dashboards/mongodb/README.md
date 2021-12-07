### Dashboards for MongoDB

### Notes

- These metrics are supplied from [BindPlane's agent integration for MongoDB](https://docs.bindplane.bluemedora.com/docs/stackdriver-agent-migration-mongodb)
- The deprecated dashboard listed [here](./deprecated/overview.json) exists as an alternative for people who deployed their mongo instance within GCE, however the more external installation seems the more prevalent, so that is the default. 

|MongoDB Overview|
|:------------------|
|Filename: [overview.json](overview.json)|
|This dashboard has several charts for the related [BindPlane metrics for MongoDB](https://docs.bindplane.bluemedora.com/docs/stackdriver-metrics-mongodb), including metrics like `Indexes`, `Available Connections`, `Active Connections`, `Data Size`,`Memory Usage`, `Bytes Loaded in Cache`,`Global Lock Total Time` and `Throughput`.|
