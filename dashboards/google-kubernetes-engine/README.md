### Dashboards for Google Kubernetes Engine

|GKE Workloads at Risk|
|:---------------------|
|Filename: [gke-workloads-at-risk.json](gke-workloads-at-risk.json)|
|This dashboard has 12 charts using the related [Kubernetes metrics](https://cloud.google.com/monitoring/api/metrics_kubernetes) to show workloads which are at reliability and performance risks due to BestEffort and Burstable workloads running above request for CPU and memory.|

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

&nbsp;

|GKE Optimization Signals|
|:---------------------|
|Filename: [gke-optimization-signals.json](gke-optimization-signals.json)|
|This dashboard has 10 charts using the related [Kubernetes metrics](https://cloud.google.com/monitoring/api/metrics_kubernetes) and summarize GKE cost optimization signals based on the [State of Kubernetes Cost Optimization](https://cloud.google.com/blog/products/containers-kubernetes/new-report-state-of-kubernetes-cost-optimization) report includes demand scaling, spot instance usage, cluster bin packing and workload rightsizing.|


