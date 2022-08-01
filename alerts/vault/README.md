# Alerts for Vault in the Ops Agent

## Token Renew/Revoke Alert

This alert will be triggered when it is taking longer than one second to renew or revoke tokens. This alert will help notify users when there is a potential problem with backend token storage.

## Token Creation Alert

This alert will be triggered when tokens are being created at a rate considered abnormally high for the user.\nThis alert will help notify users if an application is under stress or abnormal usage. The threshold for this alert will need to be adjusted on a per user basis.

## Audit Failure Alert

This alert will be triggered whenever an audit request or audit response failure is greater than 0. This alert will help notify users when their audit device is potentially blocked. If it is blocked, Vault will become unresponsive.

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
        "projects/project-id/notificationChannels/1234567"
    ]
```
