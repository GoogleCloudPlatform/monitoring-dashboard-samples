'''This script will be triggered by a github action outlined in ~/.github/workflows/validate_dashboards_formar.yml.
It will be used to validate all new json and metadata files pertaining to integration sample dashboards.'''

import json
import os
import sys
import yaml

class MetadataFormattingError(Exception):
  '''Raised when data in metadata file does not have expected format'''
  pass

class JsonFormattingError(Exception):
  '''Raised when data in json file or file name does not have expected format'''
  pass

class MetadataInJsonMisMatchError(Exception):
  '''Raised when data in metadata file does not have matching data in a json file'''
  pass

class JsonInMetadataMisMatchError(Exception):
  '''Raised when data in json file does not have matching data in a metadata file'''
  pass

def validate_json(dashboards_data):
  try:
   dashboards_dict = json.load(dashboards_data)
  except:
    return {}

  return dashboards_dict

def map_paths(paths):
  '''Takes in list of paths and returns dictionary of metadata and dashboard json data, 
  organized by directories'''
  map = {}

  for path in paths:
    path_parts = path.split('/')

    # filter out non-dashboards files
    if not 'dashboards' == path_parts[1] or len(path_parts) > 4:
      continue

    if not path_parts[2] in map:
      map[path_parts[2]] = {
        'metadata': {
        },
        'json_data': {
        },
        'json_files': []
      }

    if path_parts[3].split('.')[-1] == "json":
      map[path_parts[2]]['json_files'].append(path_parts[3])

  return map

def get_sample_dashboards_json(path):
  '''Checks if file is in json format and returns data in dictionary form'''
  with open(path) as f:
    dashboards_dict = validate_json(f)

    if not dashboards_dict:
      raise JsonFormattingError("{} content could not be loaded".format(path))

    return dashboards_dict

def check_json_file_name(path, file_name_parts):
  '''Checks if json file name is in the proper format'''
  if len(file_name_parts) != 2:
    raise JsonFormattingError("{} file name not in <name>.json format".format(path))

def map_json_files(directory, path_map):
  '''Stores json data into dictionary'''
  for json_file in path_map[directory]['json_files']:
    json_path = os.path.join('.', 'dashboards', directory, json_file)
    dash_dict = get_sample_dashboards_json(json_path)

    if not 'displayName' in dash_dict:
      raise JsonFormattingError("{} is missing displayName field".format(json_file))

    file_name_parts = json_file.split('.')
    check_json_file_name(json_file, file_name_parts)

    path_map[directory]['json_data'][file_name_parts[0]] = dash_dict['displayName']

def check_metadata_entries(path, sample_dashboard):
  '''Assert sample dashboard metadata entry has all required fields.'''
  required_fields = {"category", "id", "display_name", "description"}
  missing_fields = required_fields - sample_dashboard.keys()
  if missing_fields:
    raise MetadataFormattingError("{} missing {}".format(path, missing_fields))

def check_metadata(directory, path_map):
  '''Make following assertions about metadata.yam files:
      * At least 1 sample dashboard exists
      * Each dashboard entry has all required fields
      * Each dashboard entry has a corresponding json template with same name & id
      
    note: this function mutates the path_map dictionary'''
  path = os.path.join('.', 'dashboards', directory, 'metadata.yaml')

  with open(path) as f:
    data = yaml.safe_load(f)
  sample_dashboards = data.get("sample_dashboards")
  if not sample_dashboards:
    raise MetadataFormattingError("sample_dashboards not defined in {}".format(path))
  for sample_dashboard in sample_dashboards:
    # Call function to check metadata file fields
    check_metadata_entries(path, sample_dashboard)

    dashboard_id = sample_dashboard.get('id')
    dashboard_name = sample_dashboard.get('display_name')

    path_map[directory]['metadata'][dashboard_id] = dashboard_name

    if not dashboard_id in path_map[directory]['json_data']:
      raise MetadataInJsonMisMatchError("{} does not have a matching json file".format(dashboard_id))
    
    if not dashboard_name == path_map[directory]['json_data'][dashboard_id]:
      raise MetadataInJsonMisMatchError("{} does not have a matching json file".format(dashboard_name))

def check_json_in_metadata(directory, path_map):
  '''Make following assertions about json template files:
      * Template file name appears in metadata.yaml file
      * Template display name matches corresponding id in metadata.yaml file
      
    note: this function mutates the path_map dictionary'''
  for json_file in path_map[directory]['json_files']:
    json_path = os.path.join('.', 'dashboards', directory, json_file)
    dash_dict = get_sample_dashboards_json(json_path)

    json_id = json_file.split('.')[0]

    if not json_id in path_map[directory]['metadata']:
      raise JsonInMetadataMisMatchError("{} does not have a matching id in the metadata file".format(json_file))
    
    if not dash_dict['displayName'] == path_map[directory]['metadata'][json_id]:
      raise JsonInMetadataMisMatchError("{} does not have a matching display_name in the metadata file".format(json_file))

def check_directory(directory, path_map):
  '''Parent function that calls top level processing and checking functions
    
    Functions are order-dependant as the path_map dictionary is mutated by each function.'''

  # Process json files into path map
  map_json_files(directory, path_map)

  # Metadata file check
  check_metadata(directory, path_map)

  # json file check
  check_json_in_metadata(directory, path_map)


def main():
  paths = sys.argv[1:]

  # process paths into dictionary
  path_map = map_paths(paths)

  # run checks for each directory
  for directory in path_map:
    check_directory(directory, path_map)

if __name__ == '__main__':
  main()
