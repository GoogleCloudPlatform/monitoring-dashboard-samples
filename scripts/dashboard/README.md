# Dashboard Export / Import

The script `dashbaord.sh` is a bash utility for exporting and
importing Google Cloud Monitoring dashboard.

## Required utilities

- [Gcloud SKD](https://cloud.google.com/sdk/docs/install)
- [jq](https://stedolan.github.io/jq/)

## Usage

### Export Dashboard

Export a dashboard to a json file

Args:
- action: export
- dashboard_id
- project
- output file

```
./dashboard.sh export 11449921252968550000 test-project kpi.json
```

### Import Dashboard

Import a dashboard from a json file

Args:
- action: import
- project_id
- input_file

```
./dashboard.sh import agent-analysis kpa.json
```

## Developing

Required utilities
- [shellcheck](https://www.shellcheck.net/)
- [make](https://www.gnu.org/software/make/)

A Makefile is provided. After making changes, run `make` to
perform sanity checks.
