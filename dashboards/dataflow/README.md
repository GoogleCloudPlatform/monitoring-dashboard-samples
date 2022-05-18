### Dashboards for Dataflow

#### Notes

- The full list of Dataflow Job metrics can be found in [Metrics Explorer](find-dataflow-job-metrics.png).

|Dataflow Job|
|:------------------|
|Filename: [dataflow-job.json](dataflow-job.json)|
|This dashboard has charts for viewing Dataflow job metrics related to: throughput, backlog, latency, and parallelism.
Dashboard previews: [preview #1](dataflow-job.01.png), [preview #2](dataflow-job.02.png), [preview #3](dataflow-job.03.png).
The metrics displayed are: 
 * `current_num_vcpus`, 
 * `backlog_bytes`, 
 * `elements_produced_count`, 
 * `duplicates_filtered_out_count`, 
 * `timers_processed_count`, 
 * `bundle_user_processing_latencies`, 
 * `processing_parallelism_keys`, 
 * `write_latencies`, 
 * `write_bytes_count`, 
 * `read_bytes_count`, and 
 * `estimated_backlog_processing_time`.

|