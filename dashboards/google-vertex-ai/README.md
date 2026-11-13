### Dashboards for Vertex AI 

#### Notes

- These dashboards are based on first party Google Cloud monitoring solutions.

|Vertex AI Model Garden (Monitoring)|
|:------------------|
|Filename: [vertex-ai-model-garden.json](vertex-ai-model-garden.json)|
|This is a dashboard for monitoring request, latency and error rates for your managed model invocations. Compare different models or drill down to an individual one. |

|Vertex AI Endpoints Overview|
|:------------------|
|Filename: [vertex-ai-endpoints.json](vertex-ai-endpoints.json)|
|This is a dashboard for monitoring request, latency and error rates for models you have deployed onto Vertex AI Endpoints. |

|Vertex AI Custom Training|
|:------------------|
|Filename: [vertex-ai-custom-training.json](vertex-ai-custom-training.json)|
|This is a dashboard for monitoring the resource usage metrics for Vertex AI custom training jobs. |


|Vertex AI Provisioned Throughput|
|:------------------|
|Filename: [vertex-ai-provisioned-throughput.json](vertex-ai-provisioned-throughput.json)|
|This is a dashboard for monitoring utilization of Provisioned Throughput associated with Vertex AI models. |

|Vertex AI Agent Engine ADK Agent Efficiency|
|:------------------|
|Filename: [vertex-ai-agent-engine-efficiency.json](vertex-ai-agent-engine-efficiency.json)|
|This is a dashboard for monitoring the efficiency of [ADK](https://adk.dev/) agents deployed onto Vertex AI Agent Engine: token usage by type, context cache reuse, reasoning share, model and tool calls, and time per turn, by agent, model and tool. Requires `google-adk` 2.8.0 or later with Agent Engine telemetry enabled. The cache and reasoning charts need `google-adk` 2.14.0, or ADK experimental telemetry (`ADK_EXPERIMENTAL_TELEMETRY=true`) on 2.10.0 or later. |

