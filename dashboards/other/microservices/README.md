### Dashboards for Microservices


|CartService Monitoring|
|----------------------|
|Filename: [cart-service-monitoring.json](cart-service-monitoring.json)|
|This dashboard has 7 charts to display the metrics for the `cart service` in our [demo application](https://github.com/GoogleCloudPlatform/microservices-demo). The metrics include resource utilization and bytes transmitted.|
&nbsp;

|MicroService Monitoring|
|----------------------|
|Filename: [micro-service-monitoring.json](micro-service-monitoring.json)|
|This dashboard has 8 charts to display the metrics for the microservices in our [demo application](https://github.com/GoogleCloudPlatform/microservices-demo). The metrics include request count, response latencies, and request/response bytes.|

&nbsp;

|UseCase(payment) Monitoring|
|----------------------|
|Filename: [usecase-payment-monitoring.json](usecase-payment-monitoring.json)|
|This dashboard has 16 charts to demonstrate how we can monitor the payment use case. The first 15 charts include the metrics from the load balancer and all the related microservices in the scenario. The last chart demonstrates how we can monitor application errors using a [log based metric](https://cloud.google.com/logging/docs/logs-based-metrics) (_Note: the metric has to be created first in order to be used in the chart_)

