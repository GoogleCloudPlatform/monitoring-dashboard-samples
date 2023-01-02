### Dashboards for GPU metrics (using NVML and DCGM)

#### Notes

- This dashboard is based on Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The Ops Agent uses NVIDIA's Management Library by default (NVML) for basic GPU utilization and GPU running processes
- This dashboard also displays advanced GPU metrics based on NVIDIA's DataCenter GPU Manager (DCGM) when available (see below)


|NVML and DCGM GCE Overview|
|:------------------|
|Filename: [nvml-dcgm.json](nvml-dcgm.json)|

This dashboard contains the following:
- A chart for CPU utilization (Hypervisor reported) and NIC traffic rate (Ops Agent reported)
- A chart for non-idle GPU utilization (NVML reported) and GPU used memory (NVML reported)
- Tables for recently active GPU processes, including their lifetime GPU utilization and peak used GPU memory (NVML reported).
- Charts for `SM utilization` and `SM occupancy` and GPU `Pipe Utilization` (e.g. tensor, fp64, fp32, fp16) (DCGM reported)
- Charts for `PCIe traffic` and `NVLink traffic` (both tx, rx from GPU point of view) (DCGM reporteD).
