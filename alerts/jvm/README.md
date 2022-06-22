# JVM Alerts for Ops Agent

## Heap Memory Usage Near Max

Alerts on JVM heap memory usage being near maximum. When the JVM reaches its max, depending on JVM configuration could lead to Out of Memory errors.

## JVM Thread Near Limit

The JVM can spin up threads depending on the type of application. This means that this alert requires some more contextual decision-making on the threshold. When the thread count exceeds a limit (whether set by an OS or JVM configuration), then new threads cannot be spun up even if the JVM is well-provisioned.

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
