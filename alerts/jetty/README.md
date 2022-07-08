# Alerts for Jetty in the Ops Agent



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

There are logs at WARN level at start up that identify failed config parsing for modules.

## No Threads available

If `thread.count` with state `idle` is 0, that is an indication that the server is overloaded and the thread pool should be increased.

## Long Thread Queue

If `jetty.thread.queue.count` is above 10, which is the default total amount of threads, or a user defined value, it shows that your server can't keep up and performance improvements are needed

### Creating notification Channels and User Labels

Whether these alert policies are being used as standalones or base templates for a deployment strategy like terraform, one thing that should be utilized is notification channels and user labels.

### User Labels

Supplying user labels could give extra identification information about the firing alert:

i.e.

```json
    "userLabels": {
        "datacenter": "central"
    }
```

#### Notification Channels

The ID of the notification channel to be notified.

```json
    "notificationChannels": [
        "projects/project-id/notificationChannels/1234567
    ]
```