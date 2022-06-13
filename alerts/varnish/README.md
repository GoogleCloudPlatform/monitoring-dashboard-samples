# Varnish Alerts for Ops Agent

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
## Sessions dropped alert

Sessions dropped alert is triggered when 'workload.googleapis.com/varnish.session.count is greater than 0. This occurs when varnish is out of worker threads and the session queue is filled up. This means incoming requests may be dropped indicating that either varnish is overloaded or the thread pool needs to be increased.

## High cache evictions alert

High cache evictions alert is triggered when 'workload.googleapis.com/varnish.object.nuked' increases at an alarming rate that exceeds a user-defined threshold. This objects are evicting at a faster rate because of the lack of space, so increasing the cache size would help.


## High server limit alert

High server limit alert is triggered when 'workload.googleapis.com/varnish.thread.operation.count' is greater than zero. If a thread fails, then you likely exceeded your servers limit or attempted to create threads too rapidly.

## Backend connection failure alert

Backend connection failure alert is triggered when `workload.googleapis.com/varnish.backend.connection.count` is greater than zero. Backend connection failures can indicate different failure scenarios such as:
- A tcp connection has timed out from a network issue, overload or unresponsive backend.
- A request is sent to the backend, but the backend did not respond within a certain time. 
- A backend started streaming a response but stopped sending data without closing the connection.
