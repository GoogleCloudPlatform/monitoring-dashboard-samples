# Cloud Monitoring Dashboard Importer

Convert dashboards from the Grafana dashboard JSON schema to the Cloud
Monitoring dashboard JSON schema and upload them directly into Cloud Monitoring.

## Prerequisites
To run the dashboard importer, you must have git, Node.js, and gcloud installed.
1. git
    - [Installation Docs](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. Node.js
    - [Installation Docs](https://nodejs.org/en/download)
    - Recommended min Node.js version: 20.4.1
1. gcloud
    - [Installation Docs](https://cloud.google.com/sdk/docs/install)
    - [Ensure your gcloud version is up to date](https://cloud.google.com/sdk/gcloud/reference/components/update)
    - [Obtain access credentials](https://cloud.google.com/sdk/gcloud/reference/auth/login) by running `gcloud auth login`

## Set Up
Clone the `monitoring-dashboard-samples` repo and CD into the `scripts/dashboard-importer` directory
```
git clone https://github.com/GoogleCloudPlatform/monitoring-dashboard-samples.git && cd monitoring-dashboard-samples/scripts/dashboard-importer
```

## Quick Start
### Converting and Uploading Dashboards
To convert Grafana dashboard definitions into the Cloud Monitoring format and
upload them to your Google Cloud project, run the following:

```
./import.sh <FILE_OR_DIRECTORY> <PROJECT_ID>
```

#### Arguments:
  - `FILE_OR_DIRECTORY`: Path to a file or directory that contains Grafana dashboards in JSON format. These files must use the extension `.json`.
  - `PROJECT_ID` (Optional): The destination Google Cloud project for the converted dashboards. Omitting the `PROJECT_ID` will only run the conversion step and skip the upload.

#### Example:
  To convert a single file `./foo/test.json` and upload to project `test-project`, you run:
  ```
  ./import.sh ./foo/test.json test-project
  ```

  To convert all the JSONs in the `./foo` directory and upload to project `test-project`, you run:
  ```
  ./import.sh ./foo/ test-project
  ```

  To convert all the JSONs in the `./foo` directory without uploading, you run:
  ```
  ./import.sh ./foo/
  ```

#### Behavior and Output:
The importer will convert the JSON files in the given path. It will also upload
them to the specified project using gcloud if a project id is provided.

The importer will also generate some files. To view your converted JSON files, look under `reports/<date>/<time>/` of the importer's directory.

The `reports/<date>/<time>/` directory will also contain:
-  `report.txt` - Details conversion details, warnings and errors
-  `upload_<time>.txt` (If upload is run) - Contains the urls of the uploaded dashboards.

### Upload Only
To manually upload the converted dashboards, use the following command:
```
./upload.sh <FILE_OR_DIRECTORY> <PROJECT_ID>
```
#### Arguments:
  - `FILE_OR_DIRECTORY`: Path to a file or directory that contains dashboards in Cloud Monitoring JSON format.
  - `PROJECT_ID`: The destination Google Cloud project for the converted dashboards.

#### Behavior and Output
When uploading directories, the command prompts you to confirm the project and files before it uploads.

After the upload is complete, the command prints out the URLs of the uploaded dashboards.
In the directory with the file(s) to be uploaded, it also creates `upload_<time>.txt` file that records the names and URLs of the uploaded files

## Troubleshooting
We occasionally publish small updates and bug fixes to the tool. Before
attempting further troubleshooting, first try fixing the issue by using
`git pull` to pull down the latest version of the repository and then importing
again.

Common troubleshooting cases for the Cloud Monitoring Dashboard Importer

### gcloud Related Issues

#### gcloud: command not found

You need to install gcloud. See the
[gcloud Installation Docs](https://cloud.google.com/sdk/docs/install)

#### Problem refreshing current auth tokens

You need to run `gcloud auth login`. See the [docs](https://cloud.google.com/sdk/gcloud/reference/auth/login) on obtaining access credentials.

### Can't find output files

Converted JSON files are written to `reports/<date>/<time>/`
of the importer's directory.

In `reports/<date>/<time>/`, you will also find:

-   `report.json` - contains information regarding the conversion such warnings
    and errors that occurred
-   `upload_<time>.txt` - record of the generated cloud monitoring urls from uploading

### Conversion Issues

#### Dashboard has tiles with no data coming in

We recommend the following steps for debugging tiles with no data:

1.  Confirm that the corresponding chart has data in Grafana as well. If your
    chart does not have data in Grafana, the chart in the converted dashboard
    most likely will not have data either.
1.  Confirm all templating variables referenced in the queries exist in the Cloud Monitoring
    dashboard. There are some templating variables that the importer doesn't handle. See the [missing templating variable section](#templating-variables-are-missing)
1.  Confirm the metric(s) being referenced exist in Cloud Monitoring and are not
    inactive. You can do so by searching for the query's metric in the
    [Metrics Explorer](https://console.cloud.google.com/monitoring/metrics-explorer).
    If the metric doesn't exist, you will need to find an alternative metric.
1.  Confirm that the metric is in the Prometheus domain. Only metrics in the Prometheus
    domain can be converted. To verify the domain you can search for the metric in the
    [Metrics Explorer](https://console.cloud.google.com/monitoring/metrics-explorer) and check
    if the metric starts with `prometheus.googleapis.com`. If the metric is not in the
    Prometheus domain you will need to find an alternative metric that is
    [collected for Prometheus](https://cloud.google.com/stackdriver/docs/managed-prometheus#gmp-data-collection).
1.  Confirm that the label matchers are valid.
    To validate this, first look at the query and determine if there are any
    hard equality matchers. For example, in the query `kube_pod_status_ready{container='foo'}`,
    our matcher will be `container='foo'`. Then put the metric (in our case `kube_pod_status_ready`) in the PromQL tab of the
    [Metrics Explorer](https://console.cloud.google.com/monitoring/metrics-explorer).
    View the metric in table view via the `table` button in the top left hand corner.
    Ensure both the label key and value exist by looking for the respective column and row.
    In our example, we would look for the `container` column with a row with value `foo`.
    If it does not exist, you will need to manually resolve this by either removing or modifying the matcher.

#### Tiles are missing

Tiles that are under the height of 2 or are missing x, y, h, w positional
attributes are omitted. You will need to add/modify those attributes and rerun
the importer.

#### Tiles are not aligned / out of order

You may need to drag and resize some tiles for some cases of misalignment.

For severe cases of misalignment that cannot be remedied by any form of
repositioning and resizing, please file an issue with details under this
Github repository.

#### Query has too many time series

Scorecard and Gauge charts do not support multiple series. You will need select
a value from the template variable dropdown.


#### Collapsible Groups are missing

The importer does not yet support conversion of collapsible groups. Tiles in a
collapsible group will be unnested.

#### Templating variables are missing

The importer only converts templating variables of the type `query` and `interval`. Of the
template variables with type `query`, the importer only converts those that start with
`label_values`. Please confirm that your templating variables meet these criteria.
If not, you will need to manually convert those templating variables.

#### HTML in a text tile isn't being rendered

Cloud Monitoring does not yet support the HTML rendering of text tiles. You will need to manually resolve this.

#### Template Variables in a text tile aren't being rendered

Cloud Monitoring does not yet support template variables in text tiles. You will need to manually resolve this.

### Upload Issues

#### Python is out of date

gcloud commands are part of the upload script and require python3.
Please follow
[this document on setting up Python for gcloud](https://cloud.google.com/appengine/docs/standard/setting-up-environment?tab=python).

#### Upload fails because of overlapping tiles

Please file an issue with details under this
Github repository.
