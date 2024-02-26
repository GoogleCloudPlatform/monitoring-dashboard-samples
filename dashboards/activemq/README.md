### Dashboards for ActiveMQ

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).


|ActiveMQ GCE Overview|
|:------------------|
|Filename: [activemq-gce-overview.json](activemq-gce-overview.json)|
|This dashboard has 14 charts for viewing ActiveMQ when monitored by [Google's Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/activemq#monitored-metrics), including `Memory Usage`, `Store Usage`, `Temp Usage`, `Connections`, `Producers`, `Messages Waiting`, `Messages Enqueued`, `Messages Dequeued`,`Total Current Messages`,`Consumers`, `Average Wait Time`, `CPU % Top 5 VMs`, `Memory % Top 5 VMs`, and `Hosts by Region`. |

|ActiveMQ Prometheus Overview|
|:------------------|
|Filename: [activemq-prometheus-overview.json](activemq-prometheus-overview.json)|
|This dashboard is based on prometheus metrics exposed by an [exporter](https://github.com/prometheus/jmx_exporter). This dashboard has charts displaying: `Connections`, `Memory Usage`, `Store Usage`, `Temp Usage`, `Total Connections`, `Total Consumers`, `Total Producers`, `Total Messages`, `Total Messages Enqueued`, `Total Messages Dequeued`, `Topic Message Size`, `Topic Producers`, `Topic Consumers`, `Topic Dispatch Count`, `Topic Average Blocked Time`, `Topics Expired`, `Topic Queue Size`, `Topic Enqueues`, and `Topic Dequeues`. |
