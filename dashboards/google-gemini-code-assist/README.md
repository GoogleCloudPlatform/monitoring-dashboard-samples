## Dashboards for Gemini Code Assist

This repo provides a sample dashboard for Gemini Code Assist. This will live under Google Cloud Monitoring and it’s built on top of [Log Analytics](https://cloud.google.com/logging/docs/log-analytics#analytics).

This dashboard has charts for Gemini Code Assist using [Gemini for Google Cloud Logging logs](https://cloud.google.com/gemini/docs/log-gemini), including Daily Active Users, Chat Exposures, Code Suggestions, Code Suggestions Accepted, Acceptance Rate, and Lines of Code Accepted. [Gemini for Google Cloud Logging metadata logs](https://cloud.google.com/gemini/docs/log-gemini#metadata) must be enabled. 

### Prerequisite:
- Upgrading your `_Default` Log bucket to Log Analytics is required to setup Gemini Code Assist Dashboard. Please consult the [Upgrade a bucket to use Log Analytics](https://cloud.google.com/logging/docs/buckets#upgrade-bucket) for a step-by-step guide.

### Dashboard set up instructions:
- Open [Google Cloud Monitoring Dashboard](https://console.cloud.google.com/projectselector2/monitoring/dashboards).
- Select your Gemini Code Assist project.
- Click on 'Create Custom Dashboard'.
- On the top right, click on the 'Settings' icon.
- Under 'JSON' -> 'JSON Editor'
- Copy the content of [this](https://github.com/GoogleCloudPlatform/monitoring-dashboard-samples/blob/master/dashboards/google-gemini-code-assist/gemini-code-assist-overview-from-metadata-logs.json) file, replacing Project_ID with your own Project_ID.
- Click on Apply changes.

### Considerations:
- The dashboard contains daily metrics that must be viewed with a time window greater than one day.
- The dashboard is configured to query from the `_Default` log view of the log bucket. To manage log views see the [Google Cloud documentation](https://cloud.google.com/logging/docs/logs-views).
