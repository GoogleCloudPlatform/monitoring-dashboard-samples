### Dashboards for Kubernetes Infrastructure

#### Notes

- These dashboards are based on built-in promtheus metrics.

|Kubernetes Cluster Overview|
|:------------------|
|Filename: [k8s-cluster-prometheus.json](k8s-cluster-prometheus.json)|
|This dashboard has charts displaying: `Nodes (Ready)`, `Nodes (Not Ready)`, `Nodes Location`, `Scheduled Pods Per Cluster`, `Node CPU Usage`, `Node Memory Used`, `Persistent Volume Provisioned Capacity (Total)`, `PV Bound`, `PV Unbound`, `PV Pending`, `PV Failed`, and `Persistent Volume Provisioned Capacity`|

|Kubernetes Pod Overview|
|:------------------|
|Filename: [k8s-pod-prometheus.json](k8s-pod-prometheus.json)|
|This dashboard has charts displaying: `Scheduled Pods`, `Running Pods`, `Pending Pods`, `Evicted Pods`, `Shutdown Pods`, `Failed Pods`, `Namespaces`, `Replicasets`, `Deployments`, `Daemonsets`, `Statefulsets`, `Jobs`, `Scheduled Pods Per Cluster`, `Failed Pods Per Cluster`, `Pod CPU Usage`, `Pod Memory Usage`, `Pod Network Receive Bytes`, and `Pod Network Transmit Bytes`|
