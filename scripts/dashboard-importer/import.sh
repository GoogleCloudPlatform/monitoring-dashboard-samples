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

JSON_PATH=$1 # Path to directory containing JSON files or a JSON file
PROJECT=$2 # Optionally supplied GCP project to upload to

# Validate Arguments
if [ "$JSON_PATH" = "" ]
then
  echo "Error: No JSON_PATH included"
  echo "Syntax: ./import.sh <JSON_PATH> <OPTIONAL_PROJECT>"
  exit
fi

# Convert dashboards
CONVERSION_OUTPUT=$(node dist/convert.js dashboards $JSON_PATH)
echo "$CONVERSION_OUTPUT"

# If project provided then upload the converted dashboard to the project
if [ -n "$2" ]
then
  echo
  echo "Conversion complete. Proceeding to upload..."

  # Extract output directory from console output
  DIRECTORY="${CONVERSION_OUTPUT##*./upload.sh }"
  DIRECTORY="${DIRECTORY% <PROJECT_ID>*}"
  echo
  echo -e "Now running: \033[34m./upload.sh $DIRECTORY $PROJECT\033[0m\n"

  # Upload converted dashboards
  ./upload.sh $DIRECTORY $PROJECT
fi

echo
echo -e "Need to troubleshoot? Please visit: \nhttps://github.com/GoogleCloudPlatform/monitoring-dashboard-samples/tree/master/scripts/dashboard-importer/README.md#troubleshooting"
