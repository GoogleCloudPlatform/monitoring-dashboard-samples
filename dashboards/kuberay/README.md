### Dashboards for Zookeeper

|Kuberay Overview|
|:------------------|
|Filename: [ray-overview.json](ray-overview.json)|
|This dashboard is based on [prometheus metrics exposed by Ray](https://docs.ray.io/en/latest/cluster/metrics.html) and it's similar to [the default kuberay Grafana dashboard](https://github.com/ray-project/kuberay/blob/master/config/grafana/default_grafana_dashboard.json). This dashboard includes charts displaying: `Scheduler Task State`, `Active Tasks by Name`, `Scheduler Actor State`, `Active Actors by Name`, `Scheduler CPUs (logical slots)`, `Object Store Memory`, `Scheduler GPUs (logical slots)`, `Scheduler Placement Groups`, `Node CPU (hardware utilization)`, `Node GPU (hardware utilization)`, `Node Disk`, `Node Disk IO Speed`, `Node Memory (heap + object store)`, `Node Out of Memory Failures by Name`, `Node Memory by Component`, `Node CPU by Component`, `Node GPU Memory (GRAM)`, `Node Network`, `Node Count`, `Cluster Utilization`.|
