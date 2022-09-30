### Dashboard for JVM

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The full list of metrics supported by the Ops Agent can be found [here](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent/third-party/jvm#monitored-metrics).

|JVM GCE Overview|
|:------------------|
|Filename: [overview.json](overview.json)|
|This dashboard has 6 charts displaying `Classes Loaded`, `Threads`, `Garbage Collection Count`, `Garbage Collection Time`, `Heap Memory`, and `Non-Heap Memory`.|

|JVM Prometheus Overview|
|:------------------|
|Filename: [jvm-prometheus-overview.json](jvm-prometheus-overview.json)|
|This dashboard is based on metrics exposed by an [exporter](https://github.com/prometheus/jmx_exporter), including `Classes Loaded`, `Threads`, `Garbage Collection Count`, `Garbage Collection Time`, `Heap Memory`, and `Non-Heap Memory`.|
