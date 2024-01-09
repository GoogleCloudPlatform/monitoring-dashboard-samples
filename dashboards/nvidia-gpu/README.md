### Dashboards for NVIDIA GPU Monitoring

#### Notes

- The GPU metrics for GCE instances require the GPU enabled preview version of Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The GPU enabled Ops Agent uses NVIDIA's Management Library (NVML) to display GPU utilization, GPU used memory, and GPU running processes. This does not require any configuration.
- GPU utilization for GKE nodes don't require any extra setup.
- Advanced GPU metrics such as Streaming Multiprocessor (SM) block utilization, SM occupancy, SM pipeline utiliztion, DRAM utilization, PCIe traffic rate, and NVLink traffic rate are available only for GCE, based on NVIDIA's DataCenter GPU Manager (DCGM).

|NVIDIA GPU Monitoring Overview (GCE & GKE)|
|:------------------|
|Filename: [nvidia-overview.json](nvidia-overview.json)|
|Displays GPU metrics for both GKE Nodes and GCE VMs.  GPU metrics for the GCE VMs require the Ops Agent to be installed and running.|

|NVIDIA GPU Monitoring Advanced DCGM Metrics (GCE Only)|
|:------------------|
|Filename: [nvidia-dcgm.json](nvidia-dcgm.json)|
|Displays Advanced GPU metrics from NVIDIA Datacenter GPU Manager (DCGM).  This requires a specific setup (e.g. installing DCGM, installing the Ops Agent, and configuring it to receive DCGM metrics).|

|NVIDIA GPU Monitoring Advanced DCGM Metrics (GKE Only)|
|:------------------|
|Filename: [nvidia-dcgm-prometheus.json](nvidia-dcgm-prometheus.json)|
|Displays Advanced GPU metrics from NVIDIA Datacenter GPU Manager (DCGM).  This requires a specific setup (e.g. installing DCGM and DCGM exporter).|
