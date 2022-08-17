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