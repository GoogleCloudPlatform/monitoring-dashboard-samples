# Alerts for Chronicle

### Silent Forwarder

This alert policy detects the absence of data for a chronicle collector with collector_id = 10479925-878c-11e7-9421-10604b7cb5c1 over a 1 hour window. These generally require further investigation and indicate an issue with the Chronicle collector.

### All silent Chronicle forwarder and logtype combinations

This alert policy fires an alert everytime a chronicle forwarder goes silent for a log type. Eg: If 4 forwarders are setup supplying 5 log types each, there would be 20 alerts firing (one for each combination). Similarly if a single chronicle forwarder goes down 5 alerts will be active.

### All silent Chronicle forwarder and logtype combinations except few logtypes

This alert policy similar to the above alert policy except it will not fire alerts for the excluded log types. In context of this template it won't fire alerts if Chronicle forwarders stop sending logs for BIND_DNS, CS_DETECTS or BRO_DNS.


### Forwarder buffer usage threshold

This alert policy sends out alerts when any Chronicle forwarder collecting logs from pcap has mean buffer usage above 1% for a 1 hour time window.
