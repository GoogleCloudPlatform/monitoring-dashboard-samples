# RabbitMQ Alerts for GKE

## High unacknowledged messages alert
When the number of unacknowledged messages is higher than a threshold (5 by default), it indicates that consumers may not be able to keep up processing the messages, or are otherwise not acknowledging the message after reading it.

## High unroutable messages alert
When the unroutable message rate is greater than a threshold (1/s by default), the consumers are not getting every message.

## Low delivered messages alert
When the rate of delivered messages is lower than a threshold (1/s by default), then there may be an issue with a producer or with routing logic.

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
