import json
import sys
import yaml
from google.cloud import monitoring_v3

def check_json_in_metadata(path, file_id, file_version):
  metadata_path = "/".join(path.split("/")[:-1]) + "/metadata.yaml"
  check_metadata_entries(metadata_path)
  f = open(metadata_path)
  data = yaml.safe_load(f)
  templates_metadata = data.get("alert_policy_templates")
  for template_metadata in templates_metadata:
    if template_metadata.get("id") == file_id and template_metadata.get("version") == int(file_version[1]):
      return
  raise Exception("{} does not have an entry in {}".format(path, metadata_path))

def check_metadata_entries(path):
  f = open(path)
  data = yaml.safe_load(f)
  templates_metadata = data.get("alert_policy_templates")
  if not templates_metadata:
    raise Exception("alert_policy_templates not defined in {}".format(path))
  required_fields = ["id", "version", "display_name", "description"]
  for template_metadata in templates_metadata:
    for field in required_fields:
      if field not in template_metadata.keys():
        raise Exception("{} missing {}".format(path, field))

def check_json_file_name(path, file_name_parts):
  if len(file_name_parts) != 3:
    raise Exception("{} file name not in <name>.<version>.json format".format(path))
  file_version = file_name_parts[1]
  if file_version[0] != "v":
    raise Exception("{} version does not start with 'v'".format(path))
  if not file_version[1].isnumeric():
    raise Exception("{} 'v' is not followed by numeric version number".format(path))

def check_is_alert_policy_json(path):
  f = open(path)
  try:
    policy_json = json.dumps(json.load(f))
  except:
    raise Exception("{} content could not be loaded".format(path))
  monitoring_v3.AlertPolicy.from_json(policy_json)

def main():
  path = sys.argv[1]
  # only run validation script on files added/changed in
  # alert_templates folder
  if path.split("/")[0] != "alerts":
    sys.exit()

  file_name = path.split("/")[-1]
  file_name_parts = file_name.split(".")
  # metadata file added/changed would be checked for expected fields
  if file_name == "metadata.yaml":
    check_metadata_entries(path)

  # all json files added to alerts folder are implictly taken as alert policy jsons
  # and must follow expected file hierarchy and naming
  if path.split(".")[-1] == "json":
    # checking if json file name is in the correct format
    check_json_file_name(path, file_name_parts)
    # check if file has entry in metadata.yaml
    check_json_in_metadata(path, file_name_parts[0], file_name_parts[1])
    # checking if json content is indeed an alert policy
    check_is_alert_policy_json(path)

if __name__ == '__main__':
  main()
