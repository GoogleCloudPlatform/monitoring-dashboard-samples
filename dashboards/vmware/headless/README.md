### Dashboards for VMware

##### Notes:

- These dashboards are for a temporary period of time while progress of the alpha version of the vSphere/GCVE agent. Metric types are volatile currently so these example dashboards will be the supported versions for iterated development of the agent. 

|GCVE Contention|
|:---------------------|
|Filename: [contention.json](contention.json)|
|This dashboard has a variety of widgets and graphs that are split up into the sections for cluster, hosts and virtual machines to help identify resource allocation and distribution. Including such metrics as `Available Memory`, `Cpu Usage`, `Memory Utilization` etc.|

|GCVE Overview|
|:----------------------|
|Filename: [overview.json](overview.json)|
| This dashboard includes several widgets focusing on getting a quick glance summary of a single cluster being monitored. This includes metrics like `Running VMs`, `Total VMs`, `CPU Utilization`, and `Network Throughput Bytes` etc. |


|GCVE Virtual Machine Performance|
|:----------------------|
|Filename: [virtual-machine-performance.json](virtual-machine-performance.json)|
| This sample dashboard focuses specifically on virtual machine metrics. Allowing users to filter via instance name to draw comparisons and summary of a given virtual machine. This includes key performance indicators like `CPU Usage`, `Memory Utilization`, `Network Throughput`, and `Disk Space Usage` etc. |