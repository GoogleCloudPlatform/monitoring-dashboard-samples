#!/usr/bin/python3
import json
import os
import sys
import yaml
from google.cloud import monitoring_v3

def check_json_in_metadata(path, file_id, file_version):
  metadata_path = os.path.join(os.path.dirname(path), "metadata.yaml")
  check_metadata_entries(metadata_path)
  with open(metadata_path) as f:
    data = yaml.safe_load(f)
  for tmpl in data.get("alert_policy_templates"):
    if tmpl.get("id") == file_id and tmpl.get("version") == int(file_version[1]):
      return
  raise Exception("{} does not have an entry in {}".format(path, metadata_path))

def check_metadata_entries(path):
  with open(path) as f:
    data = yaml.safe_load(f)
  if not templates_metadata:
    raise Exception("alert_policy_templates not defined in {}".format(path))
  required_fields = {"id", "version", "display_name", "description"}
  for template_metadata in data.get("alert_policy_templates"):
    missing_fields = required_fields - template_metadata.keys()
    if missing_fields:
      raise Exception("{} missing {}".format(path, missing_fields))

def check_json_file_name(path, file_name_parts):
  if len(file_name_parts) != 3:
    raise Exception("{} file name not in <name>.<version>.json format".format(path))
  file_version = file_name_parts[1]
  if file_version[0] != "v":
    raise Exception("{} version does not start with 'v'".format(path))
  if not file_version[1].isnumeric():
    raise Exception("{} 'v' is not followed by numeric version number".format(path))

def check_is_alert_policy_json(path):
  with open(path) as f:
    try:
      policy_json = json.dumps(json.load(f))
    except:
      raise Exception("{} content could not be loaded".format(path))
    monitoring_v3.AlertPolicy.from_json(policy_json)

def main():
  path = sys.argv[1]
  # only run validation script on files added/changed in
  # alerts folder
  if os.path.dirname(os.path.dirname(path)) != "alerts":
    sys.exit()

  file_name = os.path.basename(path)
  file_name_parts = file_name.split(".")
  # metadata file added/changed would be checked for expected fields
  if file_name == "metadata.yaml":
    check_metadata_entries(path)

  # all json files added to alerts folder are implictly taken as alert policy jsons
  # and must follow expected file hierarchy and naming
  elif path.split(".")[-1] == "json":
    # checking if json file name is in the correct format
    check_json_file_name(path, file_name_parts)
    # check if file has entry in metadata.yaml
    check_json_in_metadata(path, file_name_parts[0], file_name_parts[1])
    # checking if json content is indeed an alert policy
    check_is_alert_policy_json(path)

if __name__ == '__main__':
  main()
