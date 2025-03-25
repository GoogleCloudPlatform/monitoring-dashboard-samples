### Set up instructions:

- Under Google Cloud Monitoring, go to 'Dashboards'.
- Click on 'Create Custom Dashboard'.
- On the top right, click on the 'Settings' icon.
- Under 'JSON' -> 'JSON Editor'
- Copy the content of [this](https://github.com/GoogleCloudPlatform/monitoring-dashboard-samples/blob/master/dashboards/google-gemini-code-assist/gemini-code-assist-overview-from-metadata-logs.json) file, replacing Project_ID with your own Project_ID.
- Click on Apply changes.

#### Considerations:
- The dashboard contains daily metrics that must be viewed with a time window greater than one day.
- The dashboard is configured to query from the `_Default` log view of the log bucket. To manage log views see the [Google Cloud documentation](https://cloud.google.com/logging/docs/logs-views).

### Dashboards for Gemini Code Assist

|Gemini Code Assist|
|:------------------|
|Filename: [gemini-code-assist-overview-from-metadata-logs.json](gemini-code-assist-overview-from-metadata-logs.json)|
|This dashboard has charts for Gemini Code Assist using Gemini for Google Cloud Logging logs, including Daily Active Users, Chat Exposures, Code Suggestions, Code Suggestions Accepted, Acceptance Rate, and Lines of Code Accepted. [Gemini for Google Cloud Logging metadata logs](https://cloud.google.com/gemini/docs/log-gemini#metadata) must be enabled. |
