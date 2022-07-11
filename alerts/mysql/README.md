# MySQL Alerts for Ops Agent

## High number of log warnings alert
Log warnings are a count of logs collected from mysql_error logs with a warning level per 5 minute window. The default condition of warnings per 5 minute window is 20.

### Prerequisites
The name of the metric should be:
`mysql.warning.count`

The filter for the metric should be:
```
logName:"mysql_error"
jsonPayload.level="Warning"
```

## High number of log errors alert
Log error are a count of logs collected from mysql_error logs with an error level per 5 minute window. The default condition of error per 5 minute window is 5.

### Prerequisites
The name of the metric should be:
`mysql.error.count`

The filter for the metric should be:
```
logName:"mysql_error"
jsonPayload.level="Error"
```

## High slow queries rate
The slow queries are collected from mysql_slow logs. More specific queries can be filtered using the `jasonPayload.message` field shown in the filter below. Additionally, different max query times can also be filtered using `jsonPayload.queryTime` field.

### Prerequisites
The name of the metric should be:
`mysql.slow_queries.count`

The filter for the metric should be:
```
logName:"mysql_slow"
jsonPayload.message:("SELECT" OR "INSERT" OR "UPDATE" OR "CREATE" OR "DELETE")
jsonPayload.queryTime>1
```

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
