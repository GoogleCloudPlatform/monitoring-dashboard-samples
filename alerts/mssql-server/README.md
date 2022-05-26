# Alerts for MSSQL in the Ops Agent

## Connections Near Limit

If the amount of connections is within 10% of the maximum connections then unexpected behavior can occur with connection establishment, queries, and operations. By default the upper limit is `32,767` so the alert is specified for `29,490` connections. If limit is reached, it would be a potential cause of decreased performance of the instance.

## High Page Split Rates

If ‘page.split.rate’ is spiking above a user defined threshold (defaulted to `100 pages/sec`), the fill factor likely needs to increase. Excess page splitting can cause excessive disk I/O and contribute to slow performance of the instance.

## High Lock Wait Rates

If ‘lock.wait.rate’ is above a user defined value (defaulted to `3 requests/sec`) it shows that your resources are being blocked waiting for locks to be lifted slowing down the server.
