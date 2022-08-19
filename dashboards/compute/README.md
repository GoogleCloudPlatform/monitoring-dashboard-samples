### Dashboards for Compute


|Autoscaler Monitoring|
|:--------------------|
|Filename: [autoscaler-monitoring.json](autoscaler-monitoring.json)|
|This dashboard has 2 charts for the related [autoscaler metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-autoscaler): `Current Autoscaler utilization` and `Serving capacity`.|

&nbsp;

|Cloud Functions Monitoring|
|:-------------------------|
|Filename: [cloudfunctions-monitoring.json](cloudfunctions-monitoring.json)|
|This dashboard has 5 charts for the related [Cloud Functions metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-cloudfunctions), including `Active instances`, `Execution count`, `Execution times`, `Network egress`, and `Memory usage`.|

&nbsp;

|Cloud Run Monitoring|
|:--------------------|
|Filename: [cloudrun-monitoring.json](cloudrun-monitoring.json)|
|This dashboard has 7 charts for the related [Cloud Run metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-run), including `Request Count`, `Request Latency`, `Billable Instance Time`, `Container CPU Allocation`, `Container Memory Allocation`, `Container CPU Utilization`, and `Container Memory Utilization`.|

&nbsp;

|GCE VM Instance Monitoring|
|:-------------------------|
|Filename: [gce-vm-instance-monitoring.json](gce-vm-instance-monitoring.json)|
|This dashboard has 10 charts for the related [GCE VM metrics](https://cloud.google.com/monitoring/api/metrics_gcp#gcp-compute), including metrics for CPU, disk read/write, and network.|

&nbsp;

|GKE Cluster Monitoring|
|:---------------------|
|Filename: [gke-cluster-monitoring.json](gke-cluster-monitoring.json)|
|This dashboard has 18 charts for the related [Kubernetes metrics](https://cloud.google.com/monitoring/api/metrics_kubernetes), including metrics for the worker nodes such as total allocatable CPU cores and memory; metrics for containers such as CPU and memory request utilization; metrics for Pods such as network bytes received and transmitted.|

&nbsp;

|GKE Active/Idle Clusters Monitoring|
|:---------------------|
|Filename: [gke-active-idle-clusters.json](gke-active-idle-clusters.json)|
|This dashboard has 2 charts using the related [Kubernetes metrics](https://cloud.google.com/monitoring/api/metrics_kubernetes) to show the container count and resource usage in user namespaces within a specific period. Users can see how active and idle their clusters are.|

&nbsp;

|GKE Compute Resources - Cluster View|
|:---------------------|
|Filename: [gke-compute-resources-cluster-view.json](gke-compute-resources-cluster-view.json)|
|This dashboard features filters to drill down to a specific cluster, and has 14 charts for the related [Kubernetes metrics](https://cloud.google.com/monitoring/api/metrics_kubernetes). It summarizes metrics like CPU and memory utilization as well as network sent and received bandwidth for the cluster, grouping over namespace.|

&nbsp;

|GKE Compute Resources - Node View|
|:---------------------|
|Filename: [gke-compute-resources-node-view.json](gke-compute-resources-node-view.json)|
|This dashboard features filters to drill down to a specific cluster, and has 17 charts using the related [Kubernetes metrics](https://cloud.google.com/monitoring/api/metrics_kubernetes). It summarizes metrics like CPU and memory utilization as well as network sent and received bandwidth for nodes that make up a given cluster.|

&nbsp;

|GKE Compute Resources - Workload View|
|:---------------------|
|Filename: [gke-compute-resources-workload-view.json](gke-compute-resources-workload-view.json)|
|This dashboard features filters to drill down to a specific cluster, namespace and workload. It has 14 charts for the related [Kubernetes metrics](https://cloud.google.com/monitoring/api/metrics_kubernetes) and summarizes CPU and memory utilization as well as network sent and received bandwidth for pods that make up a given workload.|

&nbsp;

|GKE Nodes and Pods - Cluster View|
|:---------------------|
|Filename: [gke-nodes-pods-cluster-view.json](gke-nodes-pods-cluster-view.json)|
|This dashboard has 10 charts using the related [Kubernetes metrics](https://cloud.google.com/monitoring/api/metrics_kubernetes) to show how pods and containers are distributed within nodes and within namespaces. Container start, restart and autoscaler events are also plotted over time.|
