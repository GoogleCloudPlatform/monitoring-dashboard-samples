### Dashboards for Google Compute Engine

|Autoscaler Monitoring|
|:--------------------|
|Filename: [autoscaler-monitoring.json](autoscaler-monitoring.json)|
|This dashboard has 2 charts for the related [autoscaler metrics](https://cloud.google.com/monitoring/api/metrics_gcp_a_b#gcp-autoscaler): `Current Autoscaler utilization` and `Serving capacity`.|

&nbsp;

|GCE VM Instance Monitoring|
|:-------------------------|
|Filename: [gce-vm-instance-monitoring.json](gce-vm-instance-monitoring.json)|
|This dashboard has 10 charts for the related [GCE VM metrics](https://cloud.google.com/monitoring/api/metrics_gcp_c#gcp-compute), including metrics for CPU, disk read/write, and network.|

&nbsp;

|GCE VM Lifecycle Events Monitoring|
|:-------------------------|
|Filename: [vm-lifecycle-dashboard.json](vm-lifecycle-dashboard.json)|
|This dashboard enables you to visualize [system events and admin activities](https://cloud.google.com/logging/docs/audit#types) to monitor VM lifecycle events (including shutdowns, reboots, and host errors). For more information on how to use this dashboard see [Monitor VM Lifecycle Events](https://cloud.google.com/compute/docs/troubleshooting/troubleshooting-reboots#monitor-events).|

&nbsp;

|GCE Reservations Monitoring|
|:-------------------------|
|Filename: [reservations-monitoring.json](reservations-monitoring.json)|
|This dashboard enables you to visualize and monitor [local and shared reservation usage](https://cloud.google.com/compute/docs/instances/reservations-monitor) at the owner project level.|
