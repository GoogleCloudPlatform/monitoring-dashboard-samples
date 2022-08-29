### Dashboards for RabbitMQ

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/rabbitmq#monitored-metrics).

|RabbitMQ Overview|
|:------------------|
|Filename: [rabbitmq-gce-overview.json](rabbitmq-gce-overview.json)|
|This dashboard has charts displaying `Consumers`, `Current Messages`, `Messages Published`, `Messages Delivered`, `Acknowledged Messages`, `Dropped Messages`, `CPU % Top 5 VMs`, `Memory % Top 5 VMs` and `Hosts by Region`. There is also a card with links to docs and rabbitmq log in Cloud Logging.|

|RabbitMQ Prometheus Overview|
|:------------------|
|Filename: [rabbitmq-prometheus.json](rabbitmq-prometheus.json)|
|This dashboard is based on [built-in metrics](https://rabbitmq.com/prometheus.html). This dashboard has charts displaying several metrics related to `Queues`, `Messages`, and `Nodes`|
