#!/usr/bin/env bash

set -eE

ACTION=${1:?"action [import | export ] is required as argument \$1"}

dashboard_export () {
    # action is $1
    dashboard_id=${2:?"dashboard id is required as argument \$2"}
    project_id=${3:?"project id is required as argument \$3"}
    output_file=${4:?"output file name is requred as argument \$4"}

    project_number=$(gcloud projects describe "${project_id}" --format="value(projectNumber)")

    echo "Exporting dashboard \"$dashboard_id\" from project \"$project_id\" to file \"${output_file}\""

    gcloud monitoring dashboards describe \
        "projects/${project_number}/dashboards/${dashboard_id}" \
        --format=json | jq  'del(.name, .etag)' \
        > "${output_file}"

    echo "Export finished"
}

dashboard_import () {
    # action is $1
    project_id=${2:?"project id is required as argument \$2"}
    input_file=${3:?"input file is requred as argument \$3"}

    gcloud --project "${project_id}" \
        monitoring dashboards create \
        --config-from-file "${input_file}"
}

if [ "$ACTION" = "export" ]; then
    dashboard_export "$@"
elif [ "$ACTION" = "import" ]; then
    dashboard_import "$@"
else
    echo "unknown action: ${ACTION}"
    exit 1
fi
