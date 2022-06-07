# Nginx Alerts for Ops Agent

## High connections dropped alert
Connections dropped value is derived from the the connections accepted minus the connections handled. This value should be near 0. When this value is rising, then this means you may have a resource saturation problem.

## High request rate alert
The request rate is derived from the requests metrics taken as a rate every 5 minutes. This value should be monitored beforehand to understand what qualifies as a normal request rate so a threshold can be established. When request rate is above this threshold, then that means there is a large spike in traffic which logs can help diagnose if these are nefarious requests.

## Low request rate alert
The request rate is derived from the requests metrics taken as a rate every 5 minutes. This value should be monitored beforehand to understand what qualifies as a normal request rate so a threshold can be established. When request rate is below this threshold, then that means there is an environment problem that are limiting the request rates.

## High server error rate alert
The server error rate is derived from processing access logs status code. The server error rate value is the number of 5xx status codes / total status codes per 5 minutes. When the server error rate spikes suddenly, then you have a high priority server problem as clients are experiencing 5xx errors and are not being served successfully.

We can do it today. 3pm east time work?
