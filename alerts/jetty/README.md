# Alerts for Jetty in the Ops Agent

### Notification Channels
For all alerts, a notification channel needs to be set up or the alert will fire silently.

### User Labels
User labels can be used for these policies by modifying the userLabels fields of the policies. i.e.

```json
{ 
  "userLabels": {
    "datacenter": "central"
  }
}
```

##  Access log failures

If the amount of access log failures are above (defaulted to 10 `failed requests/min`) It could show your Server is having an issue serving pages.

### Prerequisites
For this alert, a new log based metric needs to be created.
The name of the metric should be: 
`jetty.request.failed.count`.

The filter for the metric should be: 
```
logName:"jetty_access"
httpRequest.status > 299
```

## Failed Config Parsing

There are logs at WARN level at start up that Identify failed config parsing for modules.

## No Threads available

If `thread.count` with state `idle` is 0, that is an indication that the server is overloaded and the thread pool should be increased.

## Long Thread Queue

If `jetty.thread.queue.count` is above 10, which is the default total amount of threads, or a user defined value, it shows that your server can't keep up and improvements in performance should be looked for.