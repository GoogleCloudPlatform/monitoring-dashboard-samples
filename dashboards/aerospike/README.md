# Alerts for Aerospike in the Ops Agent

## Free Memory %

This is a KPI recommended by Aerospike. If the percentage is abnormally low, it indicates the node is running out of RAM. The user should allocate more RAM or add more nodes.

## Node Connections

Another recommendation, anomalous values for these counters would indicate a connectivity issue between nodes or an unexpected change in workload.

## Namespace Transactions

This metric represents the number of transactions attempted and their result. Sudden spikes or drops could indicate unexpected activity, and an increase in failed transactions would indicate clients are having issues storing or retrieving data.

## Bottom 5 Namespaces by Free Memory

If this value reaches the configured “High Water Memory” or “Stop Writes” thresholds, writes to the namespace could be blocked until more memory is available. It indicates that more capacity should be added.

## Bottom 5 Namespaces by Free Disk

Similar to free memory, if this value reaches the configured “Min Available Percent” threshold, writes to the namespace could be blocked until more disk space is available. It indicates that defragmentation isn’t keeping up, and/or more capacity should be added.
