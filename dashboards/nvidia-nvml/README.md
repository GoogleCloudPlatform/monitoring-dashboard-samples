### Dashboard for NVIDIA GPU metrics

#### Notes

- This dashboard is based on the GPU enabled preview version of Google's [Ops Agent](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent).
- The GPU enabled Ops Agent uses NVIDIA's Management Library (NVML) to display GPU utilization, GPU used memory, and GPU running processes. This does not require any configuration.

|NVIDIA GPU Overview|
|:------------------|
|Filename: [nvidia-nvml.json](nvidia-nvml.json)|
|This dashboard has charts for viewing NVIDIA GPUs when monitored by Google's GPU enabled Ops Agent. It displays GPU utilization, GPU used memory, and active GPU processes.|
