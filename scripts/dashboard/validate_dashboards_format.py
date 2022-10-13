import json
import os
import sys
import yaml
from google.cloud import monitoring_v3

def check_json_in_metadata(path, file_id):
  metadata_path = os.path.join(os.path.dirname(path), "metadata.yaml")
  check_metadata_entries(metadata_path)
  with open(metadata_path) as f:
    data = yaml.safe_load(f)
  for tmpl in data.get("sample_dashboards"):
    if tmpl.get("id") == file_id:
      return
  raise Exception("{} does not have an entry in {}".format(path, metadata_path))

def check_metadata_entries(path):
  with open(path) as f:
    data = yaml.safe_load(f)
  sample_dashboards = data.get("sample_dashboards")
  if not sample_dashboards:
    raise Exception("sample_dashboards not defined in {}".format(path))
  required_fields = {"category", "id", "display_name", "description"}
  for sample_dashboard in sample_dashboards:
    missing_fields = required_fields - sample_dashboard.keys()
    if missing_fields:
      raise Exception("{} missing {}".format(path, missing_fields))

def check_json_file_name(path, file_name_parts):
  if len(file_name_parts) != 2:
    raise Exception("{} file name not in <name>.json format".format(path))
  file_version = file_name_parts[1]

def check_sample_dashboards_json(path):
  with open(path) as f:
    try:
      dashboards_dict = json.load(f)
      dashboards_json = json.dumps(dashboards_dict)
    except:
      raise Exception("{} content could not be loaded".format(path))

  try:
    display_name = dashboards_dict["displayName"]

    if dashboards_dict["mosaicLayout"]["columns"] > 0:
      tiles = dashboards_dict["mosaicLayout"]["tiles"]

      for tile in tiles:
        if not ("width" in tile.keys() and "height" in tile.keys()):
            raise Exception("{} content does not match expected sample dashboard format".format(path))

        if "widget" in tile.keys():
            if not "title" in tile["widget"]:
                raise Exception("{} content does not match expected sample dashboard format".format(path))

  except:
    raise Exception("{} content does not match expected sample dashboard format".format(path))


def main():
  path = sys.argv[1]
  # only run validation script on files added/changed in
  # dashboards folder
  if os.path.dirname(os.path.dirname(path)) != "dashboards":
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
    check_json_in_metadata(path, file_name_parts[0])
    # checking if json content is indeed sample dashboards
    check_sample_dashboards_json(path)

if __name__ == '__main__':
  main()
