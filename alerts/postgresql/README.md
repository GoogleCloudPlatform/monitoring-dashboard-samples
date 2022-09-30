# Alerts for Postgres in Ops Agent

## High CPU Utilization

Alerts whenever the CPU utilization goes above 80% which usually indicates the instance's performance is heavily degraded and likely is going to impact applications reliant on postgres.

## Connections Near Limit

Connections are a limiting factor in postgres and once the instance cannot accept any more connections, then applications reliant on the postgres instance cannot function.

## High Database Size

Alert fires when the database size is growing greater than expected (this value will be subject to instance size and utilization); defaulted to 93 GB but will be subject to instance size as well as connected storage.

## Reached Max Written Buffers

Alert fires when the background writer attains 3 maxwritten errors i.e. it cannot flush buffers because it has written too many. This is an indication that if an outage were to occur, then any bytes pending may be subject to be lost.
