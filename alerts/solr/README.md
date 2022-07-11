# Alerts for Solr in the Ops Agent

## High Request Errors

If `solr.request.error.count` is high there should be cause for concern as your server could be having issue executing queries. 

## High Cache Evictions

If `solr.cache.eviction.count` is high (default: `5 evictions`), Solr is having trouble keeping up. Either the cache eviction time should be increased or performance improvements are needed.

## High Request Count

If `solr.request.count` is above a threshold that should be determined based on your server, it shows that the server is experiencing higher load than expected. This means resources should be expanded to support the load or that there is a security issue with the server.

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
