## Dashboards for Gemini Enterprise

This folder provides three sample dashboards for [Gemini Enterprise](https://cloud.google.com/gemini/enterprise/docs) in Google Cloud Monitoring. One dashboard uses the built-in Discovery Engine and API metrics, and two dashboards use [Log Analytics](https://cloud.google.com/logging/docs/log-analytics#analytics) SQL queries over the Gemini Enterprise log streams.

| Dashboard | File | Data source | Summary |
| --- | --- | --- | --- |
| Gemini Enterprise Overview | [`gemini-enterprise-overview.json`](gemini-enterprise-overview.json) | Cloud Monitoring metrics (`discoveryengine.googleapis.com/*`, `serviceruntime.googleapis.com/api/request_count`) | Request volume, error ratio, end-to-end latency (p50, p95, p99), time to first token, time to first answer, agent execution latency, data connector syncs, and API error logs. |
| Gemini Enterprise Usage from User Activity Logs | [`gemini-enterprise-usage-from-user-activity-logs.json`](gemini-enterprise-usage-from-user-activity-logs.json) | Log Analytics (`discoveryengine.googleapis.com/gemini_enterprise_user_activity`) | Assistant turns, searches, active users, sessions, adoption by app, model, agent, and data-source mode, top users, recent conversations, top prompts and search queries, client platforms, and agent lifecycle events. |
| Gemini Enterprise Quality, Safety, and Token Usage from Logs | [`gemini-enterprise-quality-safety-and-token-usage-from-logs.json`](gemini-enterprise-quality-safety-and-token-usage-from-logs.json) | Log Analytics (`gemini_enterprise_user_activity`, `gen_ai.client.inference.operation.details`, `api_errors`) | Answer success rate, grounded-answer rate, thumbs-up/down feedback and comments, citation distributions, grounding sources, Model Armor sanitization verdicts, input/output/thought/cached token consumption, agent tool calls, and API errors. |

### Prerequisites

- Enable observability on each Gemini Enterprise app (**Gemini Enterprise > Configurations > Observability**):
  - Enable **OpenTelemetry traces and logs** so that `discoveryengine.googleapis.com/gemini_enterprise_user_activity` and `discoveryengine.googleapis.com/gen_ai.client.inference.operation.details` entries are written to Cloud Logging.
  - Enable **logging of prompt inputs and response outputs** if you want user identities, prompt text, search queries, and answer citations to appear in the tables instead of `<elided>`.
- For the two Log Analytics dashboards, upgrade your `_Default` log bucket to use Log Analytics. Follow the [Upgrade a bucket to use Log Analytics](https://cloud.google.com/logging/docs/buckets#upgrade-bucket) guide.
- Grant dashboard viewers `roles/monitoring.viewer` and `roles/logging.viewer` on the project.

### Dashboard setup instructions

#### Option 1: Google Cloud console

1. Open [Google Cloud Monitoring Dashboards](https://console.cloud.google.com/projectselector2/monitoring/dashboards) and select your Gemini Enterprise project.
2. Click **Create Custom Dashboard**.
3. In the top toolbar, click the **Settings** (gear) icon and select **JSON Editor**.
4. Copy the contents of one of the `.json` files in this folder, paste it into the JSON Editor, and click **Apply changes**.
5. At the top of the dashboard, use the **PROJECT_ID**, **app**, and **user** filters to scope the charts.

#### Option 2: `gcloud` CLI

```bash
PROJECT_ID="your-project-id"

gcloud monitoring dashboards create --project="${PROJECT_ID}" \
  --config-from-file=gemini-enterprise-overview.json

gcloud monitoring dashboards create --project="${PROJECT_ID}" \
  --config-from-file=gemini-enterprise-usage-from-user-activity-logs.json

gcloud monitoring dashboards create --project="${PROJECT_ID}" \
  --config-from-file=gemini-enterprise-quality-safety-and-token-usage-from-logs.json
```

### Considerations

- Several charts bin activity by day and are best viewed with a time window of at least 7 to 30 days.
- The Log Analytics dashboards query the `_Default` log view (`@__project_id.global._Default._Default`). To query a custom log view or regional bucket, update the `FROM` table reference in the JSON file; see [Manage log views](https://cloud.google.com/logging/docs/logs-views).
- Built-in `discoveryengine.googleapis.com/*` metrics are in Beta and have a 6-week retention window in Cloud Monitoring.
