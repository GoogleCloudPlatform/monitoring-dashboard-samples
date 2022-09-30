# Nginx Alerts for GKE

## High connections dropped alert
The connections dropped value is derived from the connections accepted minus the connections handled. This value should be near 0. When this value is rising, it means you may have a resource saturation problem.

## High request rate alert
The request rate is derived from the requests metrics taken as a rate over a 5 minute interval. This value should be monitored beforehand to understand what qualifies as a normal request rate so a threshold can be established. When the request rate is above this threshold, then that means there is a large spike in traffic, which may be diagnosed by viewing the access logs.

The "thresholdValue" can be adjusted depending on what is considered to be a high request rate.

## Low request rate alert
The request rate is derived from the requests metrics taken as a rate over a 5 minute interval. This value should be monitored beforehand to understand what qualifies as a normal request rate so a threshold can be established. When the request rate is below this threshold, then that means there may be an environment problem that is limiting the request rate.

The "thresholdValue" can be adjusted depending on what is considered to be a low request rate.

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

#### Notification Channels

The ID of the notification channel to be notified.

```json
    "notificationChannels": [
        "projects/project-id/notificationChannels/1234567"
    ]
```
