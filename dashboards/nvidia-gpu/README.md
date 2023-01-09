### Dashboard for NVIDIA GPU metrics (as reported by Ops Agent)

#### Notes

- This dashboard is based on the GPU enabled preview version of Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The GPU enabled Ops Agent uses NVIDIA's Management Library (NVML) to display GPU utilization, GPU used memory, and GPU running processes. This does not require any configuration.
- This dashboard also displays advanced GPU metrics such as Streaming Multiprocessor (SM) block utilization, SM occupancy, SM pipeline utiliztion, DRAM utilization, PCIe traffic rate, and NVLink traffic rate based on NVIDIA's DataCenter GPU Manager (DCGM) when available and configured to do so.


|NVIDIA GPU Overview|
|:------------------|
|Filename: [nvidia-gpu.json](nvidia-gpu.json)|

This dashboard contains the following:
- Tables for project-wide GPU aggregated capacity and utiization by model (NVML reported).
- Tables for active GPU processes, including their GPU utilization and max used GPU memory (NVML reported).
- Table for GPU utilization per GPU in project (NVML reported).
- Graphs for CPU utilization (Hypervisor reported) and NIC traffic rate (Ops Agent reported)
- Graphs for non-idle GPU utilization (NVML reported) and GPU used memory (NVML reported)
- Graphs for `SM utilization` and `SM occupancy` and GPU `Pipe Utilization` (e.g. tensor, fp64, fp32, fp16) (DCGM reported)
- Graphs for `PCIe traffic` and `NVLink traffic` (both tx, rx from GPU point of view) (DCGM reporteD).
