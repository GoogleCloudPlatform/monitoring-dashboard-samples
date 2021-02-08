### Dashboards for Istio

#### Notes

- These metrics are utilizing Istio metrics around the Bontique Shop application
- These dashboards are populated by metrics from [Istio for Google Cloud](https://cloud.google.com/istio)
- For a full list of metrics please refer to the [metrics](https://cloud.google.com/monitoring/api/metrics_istio#istio-istio)

|Istio - All Metrics|
|:------------------|
|Filename: [overview.json](overview.json)|
|This dashboard has 22 widgets that focus on displaying metrics such as `Disk Queue Depth`, `Disk Read/Write Data`, `Disk Read/Write Operations`, `CPU Utilization`, and `Network In/Out`.|

&nbsp;

|Istio - Request/Response KPIs|
|:-----------------------|
|Filename: [client.json](client.json)|
|This dashboard has 5 widgets focusing on monitoring client response times and including `Client Request Bytes`, `Client Request Counts`, `Client Roundtrip Latencies`.|


&nbsp;

|Istio - Service Request Load|
|:-----------------------|
|Filename: [service.json](service.json)|
|This dashboard has several widgets focusing on monitoring service loads for the different types of services. There is information about `Client Roundtrip Latencies`, `Client Request Counts`, and `Client Request Bytes`. This dashboard also includes some widgets that curtail the metrics to specific services such as the: `cartservice`, `shippingservice`, `productcatalogservice`.|
