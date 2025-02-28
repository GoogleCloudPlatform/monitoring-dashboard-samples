### Setup

**The sample dashboard contains a placeholder value, `PROJECT_ID`, for your project ID. Before running the import [script](../../scripts/dashboard/dashboard.sh) to create the dashboard, replace the placeholder value.**

The dashboard contains daily metrics that must be viewed with a time window greater than 1 day.
Note that the dashboard is configured to query from the `_Default` log view of the log bucket. To manage log views see the [Google Cloud documentation](https://cloud.google.com/logging/docs/logs-views).

### Dashboards for Gemini Code Assist

|Gemini Code Assist|
|:------------------|
|Filename: [gemini-code-assist-overview-from-metadata-logs.json](gemini-code-assist-overview-from-metadata-logs.json)|
|This dashboard has charts for Gemini Code Assist using Gemini for Google Cloud Logging logs, including Daily Active Users, Chat Exposures, Code Suggestions, Code Suggestions Accepted, Acceptance Rate, and Lines of Code Accepted. [Gemini for Google Cloud Logging metadata logs](https://cloud.google.com/gemini/docs/log-gemini#metadata) must be enabled. |