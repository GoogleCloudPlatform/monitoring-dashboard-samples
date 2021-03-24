### Dashboards for VMware

##### Notes:

- [Bindplane](https://cloud.google.com/stackdriver/blue-medora) needs to be configured for some dashboards.
- For a detailed list of all the metrics and set up information, you can find documentation [here](https://docs.bindplane.bluemedora.com/docs/vmware-vcenter).

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