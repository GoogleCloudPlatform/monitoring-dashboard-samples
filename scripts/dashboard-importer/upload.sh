#!/bin/bash
# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Creates dashboards from provided JSONs via gcloud
# Script is called as follows bash upload.sh <JSON_PATH> <PROJECT>

# function takes in a file path and calls gcloud to create a monitoring dashboard
create_dashboard_with_gcloud() {
  local FILE=$1
  local UPLOAD_LOG=$2

  # Create the dashboard using gcloud. and store output into a variable
  CREATE_LOG=$(gcloud monitoring dashboards create --project=$PROJECT --config-from-file=$FILE 2>&1)
  # Parse out the Dashboard ID from the log output
  DASHBOARD_ID=$(echo $CREATE_LOG | cut -d "[" -f2 | cut -d "]" -f1)
  BASE_NAME=$(basename $FILE)

  # successful creation of a dashboard follows format of "Created [DASHBOARD_ID]."
  if [[ $CREATE_LOG =~ ^Created.* ]]; then
    echo
    echo "$BASE_NAME successfully created: https://console.cloud.google.com/monitoring/dashboards/builder/$DASHBOARD_ID?project=$PROJECT"
    if [ ! -z "$2" ]; then
      echo "$BASE_NAME, https://console.cloud.google.com/monitoring/dashboards/builder/$DASHBOARD_ID?project=$PROJECT" >> $UPLOAD_LOG
    fi
  else
    echo "gcloud monitoring dashboards create resulted in unexpected output:"
    echo $CREATE_LOG
    exit 1
  fi
}

main() {
  # Arguments
  JSON_PATH=$1 # Path to directory containing JSON files or a JSON file
  PROJECT=$2 # optional supplied GCP project to upload to

  TIME_STAMP=`date +%H:%M:%S`

  # If no project is supplied use the default gcloud project
  if [ -z "$2" ]; then
    PROJECT=$(gcloud config get-value project)
  fi

  if [[ -d $JSON_PATH ]]; then
    # argument is a directory
    FILE_COUNT=$(find $1 -type f -name "*.json" | grep -v report.json | wc -l)

    echo "Uploading $FILE_COUNT dashboard(s) from a directory with the following args:"
    echo "Directory: $JSON_PATH"
    echo "Project: $PROJECT";

    echo # move to a new line
    echo "The following are your dashboards:"

    # print out the name of all the JSONs in the directory
    for file in $JSON_PATH/*.json; do
      if [[ ! "$file" =~ "report.json" ]]; then
        BASE_NAME=$(basename ${file})
        echo "- $BASE_NAME"
      fi
    done

    echo
    read -p "Would you like to continue? (y/n) " -r
    echo

    if [[ $REPLY =~ ^[Yy]$ ]]; then
      # Path to the upload log with extra slashes removed
      UPLOAD_LOG=$(echo "$JSON_PATH/upload_$TIME_STAMP.txt" | tr -s /)
      touch $UPLOAD_LOG
      # Loop through JSONs and upload them via gcloud
      for file in $JSON_PATH/*.json; do
        if [[ ! "$file" =~ "report.json" ]]; then
          create_dashboard_with_gcloud $file $UPLOAD_LOG
        fi
      done
      echo
      echo "Upload log created in $UPLOAD_LOG"
    fi
  elif [[ -f $JSON_PATH ]]; then
    # path provided is a single file
    BASE_NAME=$(basename $JSON_PATH)
    echo "Uploading json file: $BASE_NAME to project: $PROJECT..."

    create_dashboard_with_gcloud $JSON_PATH
  else
    echo "path $JSON_PATH is not a directory or a JSON file"
  fi
}

# $1 JSON_FILEPATH
# $2 PROJECT (Optional)
main $1 $2
