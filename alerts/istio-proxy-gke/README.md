# Istio Proxy Alerts for GKE

## Degraded endpoint alert
When an endpoint is degraded, the endpoint can still receive traffic, but is de-prioritized. This indicates that a host may have performance issues that need to be remediated for the endpoint to be considered healthy again.

## High request duration alert
When the request duration is high, it indicates performance issues with deployed Envoy proxies, network issues, or slow application response times.

### Creating Notification Channels and User Labels

It is strongly recommended to add notification channels and user labels to the alert policies. The notification channel will set the notification destination if the alert policy is triggered. User labels are used for categorization, and can be used to indicate the severity level.

### User Labels

Supplying user labels could give extra identification information about the firing alert:

i.e.

```json
    "userLabels": {
        "Severity": "Warning"
    }
```

### Notification Channels

The ID of the notification channel to be notified.

```json
    "notificationChannels": [
        "projects/project-id/notificationChannels/1234567"
    ]
```
