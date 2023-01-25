### Dashboard for NVIDIA GPU metrics using the DataCenter GPU Manager (DCGM)

#### Notes

- This dashboard is based on the GPU enabled preview version of Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The GPU enabled Ops Agent uses NVIDIA's Management Library (NVML) to display GPU utilization, GPU used memory, and GPU running processes.
- This dashboard also displays advanced GPU metrics such as Streaming Multiprocessor (SM) block utilization, SM occupancy, SM pipeline utiliztion, DRAM utilization, PCIe traffic rate, and NVLink traffic rate based on NVIDIA's DataCenter GPU Manager (DCGM).


|NVIDIA GPU Overview|
|:------------------|
|Filename: [nvidia-dcgm.json](nvidia-dcgm.json)|
|This dashboard has charts for viewing NVIDIA GPUs when monitored by Google's GPU enabled Ops Agent configured to use the DataCenter GPU Manager. It displays GPU utilization, GPU used memory, active GPU processes, Streaming Multiprocessor (SM) block utilization, SM occupancy, SM pipe utilization, PCIe traffic, and NVLink traffic.|
