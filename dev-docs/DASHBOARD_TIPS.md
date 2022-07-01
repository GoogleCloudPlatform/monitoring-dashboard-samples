# Tips and Tricks for Creating Dashboards

This doc provides some tips related to creating sample dashboards. See also the 
[Using dashboards and charts](https://cloud.google.com/monitoring/dashboards)
docs.

For MQL docs, see [Introduction to Monitoring Query Language](https://cloud.google.com/monitoring/mql) and the [Monitoring Query Language reference](https://cloud.google.com/monitoring/mql/reference). See also [About the MQL language](https://cloud.google.com/monitoring/mql/query-language) doc which includes information about various things including strict form and macros.

## Logs Panel component

The [LogsPanel](https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards#logspanel)
component is a great addition to sample dashboards, as it allows showing
log entries for the log streams produced by various application integrations
(e.g. embedding NGINX access logs, etc.).

In order to make sure the use of the Logs Panel works well in a sample
dashboards context, you should ensure that the logs filter in the sample
dashboard doesn't reference a project ID. This will make it so that the logs
panel will work in any project that the sample dashboard is imported into.

In order to do that, use the `log_id` function to filter for the suffix part of
a log name that doesn't include the project ID. So for example, in the [NGINX
sample dashboard](https://github.com/GoogleCloudPlatform/monitoring-dashboard-samples/blob/master/dashboards/nginx/overview.json)
there is a logs panel query like this:
```
log_id("nginx_access") resource.type="gce_instance"
```

## MQL Joins to bring in Infrastructure Metrics alongside Workload Metrics

Suppose you want to monitor a group of web servers running NGINX or Apache on
VMs. You likely want to see key metrics collected from the web servers
themselves (like request count, error rate, latency, etc.). But will also likely
want to see infrastructure metrics for the VMs running the workloads (e.g. CPU,
Memory), as well as the number of VMs serving the workload to ensure that you
have enough infrastructure provisioned for your load.

Using the MQL, it is possible to do an inner join on two metrics so that you can
show a chart of an infrastructure metric (like CPU) filtered to all VMs that are
producing a value for another metric (like NGINX request count). This enables
creating charts of infrastructure metrics for a given workload!

For some concrete examples of MQL macros for some of the most common
infrastructure metrics, see the "Appendix: Useful MQL Macros" section at the end
of this doc.

## Be sure to save MQL queries in strict form before committing dashboard

MQL queries should be in [Strict-form](https://cloud.google.com/monitoring/mql/query-language?hl=en#strict-form) before committing them to a sample dashboard. This will
help reduce the chance of charts breaking if there are changes to the MQL
language in the future or some types of changes to metric schemas. 

This note about using strict form applies particularly to MQL macros, 
which are still in Preview (see [MQL Macros docs](https://cloud.google.com/monitoring/mql/query-language?hl=en#ql-macros)). 

Fortunately, there is a three-dot menu option in Dashboard Builder to see the
strict form version of the query which you can then copy-paste in once you are
done with it. If you build the chart in Metrics Explorer, it will also enforce
that it gets saved in strict form.

## Legend Templates

Have you ever hovered over a line on a chart and had it show a hover card that
was more confusing than it was useful? Or maybe you were trying to see some key
piece of information about a line on the chart (e.g. a VM name) but the
information in the legend was just so busy with all the different labels that
define that line. Legend templates are the answer!

These allow you to specify exactly how the legend will look when a user hovers
over a chart or expands the legend and can be part of making a dashboard look
nice and professional.

Legend templates take a different format for MQL based charts and regular time
series query charts.

### Legend templates for non-MQL charts

For non-MQL charts, you can add a legend template for each series on the chart
in the UI by clicking the "Advanced" tab in dashboard builder and scrolling down
to the bottom under "Additional Options", which allows you to use the UI to add
in placeholder terms for metric/metadata/resource labels.

You can also type a legend template indirectly (or put it in via the JSON
editor).

For non-MQL charts, legend template placeholders take on the following format
(note that backslashes are important - in JSON they should be `\\`):

* For resource labels, a placeholder is of the form `${resource.labels.[label]}`
* For metric labels, a placeholder is of the form `${metric.labels.[label]}`
* For system metadata labels, use `${metadata.system_labels\.[label]}`
* For user metadata labels, use `${metadata.user_labels\.[label]}`

To be used in the legend template, the labels need to be part of what the chart
returns as labels on the streams (needs to be part of the "group by" or implied
group by of the chart). For example, suppose you have a chart where each line
is a VM and you want the legend template to show up as "[VM name] (VM zone)",
then you could make the legend template be
`${metadata.system_labels\.name} (${resource.labels.zone})`, and a sample value
could be "instance-1 (us-central1-a)".

### Legend templates for MQL charts

MQL charts also support legend templates. They can be particularly useful for
MQL charts because the default legend templates include key/value pairs, which
can end up looking pretty busy.

However, the dashboard builder UI (as of Sept 2021) doesn't have support for
adding legend templates for MQL charts, so you will need to add them via the
JSON editor. You should also do this **last** once you are done with your MQL
chart and have saved it in strict form, because editing the chart outside the
JSON editor clears the legend template.

The `legendTemplate` JSON field should go within a [DataSet](https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards#DataSet) object in the
JSON definition of the dashboard (which you can edit with the JSON editor), e.g.:

```
... 
  "dataSets": [
    {
      "legendTemplate": "${labels.metadata\\.system\\.name} (${labels.resource\\.zone})",
      "timeSeriesQuery": {
        ...
    }
  ],
...
```

(Note that in JSON the backslashes are doubled for escaping).

For MQL charts, the legend template placeholders are formatted differently.
Specifically:

*  For resource labels, a placehodler is of the form `${labels.resource\.[label]}`
*  For metric labels, use `${labels.metric\.[label]}`
*  For system metdata labels, `${labels.metadata\\.system\\.[label]}`
*  For user metdata labels, `${labels.metadata\\.user\\.[label]}`
*  For synthetic labels added to the MQL query via `map add[...]` expressions
   or similar, use `${labels.[label]}`.

For example, suppose you had a chart that is for VMs grouped by zone, VM
instance name (from system resource metadata), and it uses a regex to create a
new label. Such a query might be something like this:

```
fetch gce_instance
| metric 'networking.googleapis.com/vm_flow/egress_bytes_count'
| filter metric.remote_location_type = 'CLOUD'
| map add[remote_region: re_extract(metric.remote_zone, '([^-]+-[^-]+)-[^-]+', '\\1')]
| group_by [resource.zone, metadata.system.name, remote_region]
| align rate(1m)
| top 5
| every 1m
```

This would show a chart of VM-to-VM traffic flows with the VM name, local VM
zone, and remote VM region as labels in the query.

A sample legend template for this might be 
`${labels.metadata\.system\.name} in ${labels.resource\.zone} -> ${labels.remote_region}`,
which when encoded to JSON with doubled backslashes would look like
`"legendTemplate": "${labels.metadata\\.system\\.name} in ${labels.resource\\.zone} -> ${labels.remote_region}"`.

This would show legend values like "instance-1 in us-central1-a -> us-east1",
and would allow you to quickly see which (instance, remote region) flows are the
highest in a given project - and the legend template would make interpreting the
line much easier.

## Embedding Markdown With Links to Docs/Logs

It can also be useful to embed markdown cards in dashboards with links to public 
documentation for how to install/configure/troubleshoot a particular 
integration, and possibly also links to the logs associated with an integration
as well.

Since log names in GCP have the project ID in them, it's not possible to create a
link to the exact log name for the project, but we can use a substring match on
it (maybe slower to load but gets customers into the right place).

In order to link to logs, use a URL of the form
`https://console.cloud.google.com/logs/query?query=[URL encoded query]`. A
project-neutral query for a log stream will look like e.g.
`logName:"nginx_access" resource.type="gce_instance"`, and when URL encoded, the
full URL would look like e.g.
`https://console.cloud.google.com/logs/query?query=logName:%22nginx_access%22%0Aresource.type%3D%22gce_instance%22`.

Here's a sample Markdown card content for an NGINX dashboard with links to 
documentation as well as logs:

```
[How to configure NGINX Monitoring](https://cloud.google.com/monitoring/agent/ops-agent/third-party/nginx)

[View NGINX Access Logs](https://console.cloud.google.com/logs/query?query=logName:%22nginx_default_access%22%0Aresource.type%3D%22gce_instance%22)

[View NGINX Error Logs](https://console.cloud.google.com/logs/query?query=logName:%22nginx_default_error%22%0Aresource.type%3D%22gce_instance%22)
```

# Appendix: Useful MQL Macros

**NOTE**: Remember to save the MQL in strict form before committing to the 
sample dashboards repo per above (which will expand the macros).

## Top 5 CPU Utilization for VMs that emit a given metric 

```
def top_5_cpu_filtered_by_metric filter_metric =
  fetch gce_instance
  | { t_cpu: metric 'compute.googleapis.com/instance/cpu/utilization'
    ; t_filter_metric: metric $filter_metric }
  | join
  | value t_cpu.value.utilization
  | group_by [resource.project_id, resource.zone, metric.instance_name], 1m,
      [value_utilization_mean: mean(t_cpu.value.utilization)]
  | top 5
  | every 1m;
```

To call this, add an additional line e.g. `@top_5_cpu_filtered_by_metric 'workload.googleapis.com/nginx.requests'`

A useful JSON legend template for this would be:
`"legendTemplate": "${labels.metric\\.instance_name} (${labels.resource\\.zone})"`
to show the VM name and zone.

## Top 5 Memory Utilization for VMs that emit a given metric 

```
def top_5_memory_filtered_by_metric filter_metric =
  fetch gce_instance
  | { t_memory:
        metric 'agent.googleapis.com/memory/percent_used'
        | filter metric.state = 'used'
    ; t_filter_metric: metric $filter_metric }
  | join
  | value val(0)
  | group_by [metadata.system.name, resource.project_id, resource.zone], 1m,
      .mean()
  | top 5
  | every 1m;
```

To call this, add an additional line in the chart after the macro e.g.
`@top_5_memory_filtered_by_metric 'workload.googleapis.com/nginx.requests'`.

A useful JSON legend template for this would be:
`"${labels.metadata\\.system\\.name} (${labels.resource\\.zone})"`
to show the VM name and zone.

## VM count by region for VMs that emit a given metric

```
def vms_with_metric_count_by_region metric =
  fetch gce_instance
  | metric $metric
  # Shift points forward from the past 2 minutes so a VM that misses a point
  # won't temporarily shift down the number of VMs.
  | align next_older(2m)
  | group_by [resource.project_id, resource.zone, resource.instance_id], 1m, .pick_any
  | group_by [resource.project_id, resource.zone], 1m, .count
  | map
      add[
        region: re_extract(resource.zone, '([^-]+-[^-]+)-[^-]+', '\\1')]
  | group_by [region], .sum
  | every 1m;
```

To call this, add an additional line in the chart after the macro e.g.
`@vms_with_metric_count_by_region 'workload.googleapis.com/nginx.requests'`.

This should be shown as a Stacked Area chart since the VMs in all the regions
add up to the total VMs that emit a given metric.

A useful JSON legend template for this would be:
`"${labels.metadata\\.system\\.name} (${labels.resource\\.zone})"`
to show the VM name and zone.
