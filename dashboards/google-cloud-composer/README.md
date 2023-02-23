## Cloud Composer Monitoring

This solution (in form of a Cloud Monitoring Dashboard) provides a one stop view of Cloud Composer environments.
This is useful to detect over-utilization as well as under-sizing issues with Cloud Composer clusters in a given GCP Project. 
Moreover, this would act as a one pager monitoring solution to look only at the critical areas of a given Cloud Composer environment. 

### Filters

In the Dashboard, there will be 2 default filters:

- The project for which we want to see the statistics, and
- The Cloud Composer cluster/environment for which we would like to see the visuals. 

Additionally, and by default, there are Grouping options along with time filters. 

### Charts

Below is the list and a quick info about the charts included in this Dashboard. 

1. VM Instance - CPU Utilisation : gives the overall CPU usage of all nodes in the Cluster. useful to understand processing bottlenecks. 
2. Dagbag Size: gives the # of DAGs in queue/bag. useful to determine if we have undersized cluster. 
3. # Celery Workers : gives the # of Workers active or dead in the Composer cluster. 
4. Running Tasks : shows the # of tasks running for all running DAGs at a given point in time. again, useful for understanding cluster overloads. 
5. Database CPU : shows the average CPU utilisation of the Cloud SQL database behind the Composer cluster. useful to detect heavy operations. 
6. Worker Pod Evictions : shows the instances where workers were evicted from the cluster. useful to identify overloaded cluster. 
7. Database disk : shows the amount of disk usage in Cloud SQL database behind the cluster. useful to decide whether to run cleanup scripts, etc. 
8. Workflow Run Durations : shows the amount of time it took to execute workflows. useful to understand long running workloads. 
9. Zombie Tasks Killed : shows the instances where tasks were marked as "zombie" and (hence) were killed. indication of cluster undersizing. 

### Future Improvements

- Add more relevant charts for common and known issues with Cloud Composer environment. 

