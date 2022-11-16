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

def mapPaths(paths):
  '''Takes in list of paths and returns dictionary of metadata and dashboard json data, 
  organized by directories'''
  map = {}

  for path in paths:
    pathParts = path.split('/')

    # filter out non-dashboards files
    if not 'dashboards' == pathParts[1]:
        continue

    if not pathParts[2] in map.keys():
      map[pathParts[2]] = {
        'metadataIds': {},
        'metadataNames': {},
        'jsonIds': {},
        'jsonNames': {},
        'jsonFiles': []
      }

    if pathParts[3].split('.')[-1] == "json":
      map[pathParts[2]]['jsonFiles'].append(pathParts[3])

  return map

def get_sample_dashboards_json(path):
  '''Checks if file is in json format and returns data in dictionary form'''
  with open(path) as f:
    try:
      dashboards_dict = json.load(f)
      dashboards_json = json.dumps(dashboards_dict)

      return dashboards_dict

    except JsonFormattingError:
      print("{} content could not be loaded".format(path))

def check_json_file_name(path, file_name_parts):
  '''Checks if json file name is in the proper format'''
  if len(file_name_parts) != 2:
    raise JsonFormattingError("{} file name not in <name>.json format".format(path))

def mapJsonFiles(directory, pathMap):
  '''Stores json data into dictionary'''
  for jsonFile in pathMap[directory]['jsonFiles']:
    jsonPath = os.path.join('.', 'dashboards', directory, jsonFile)
    dashDict = get_sample_dashboards_json(jsonPath)

    if not 'displayName' in dashDict.keys():
      raise JsonFormattingError("{} is missing displayName field".format(jsonFile))

    pathMap[directory]['jsonNames'][dashDict['displayName']]=''

    fileNameParts = jsonFile.split('.')
    check_json_file_name(jsonFile, fileNameParts)

    pathMap[directory]['jsonIds'][fileNameParts[0]]=''

def check_metadata_entries(path, sample_dashboard):
  '''Check if metadata file fields are as expected'''
  required_fields = {"category", "id", "display_name", "description"}
  missing_fields = required_fields - sample_dashboard.keys()
  if missing_fields:
    raise MetadataFormattingError("{} missing {}".format(path, missing_fields))

def check_metadata(directory, pathMap):
  '''Checks metadata file in directory for correct fields and matching data in 
  json files within the same directory'''
  path = os.path.join('.', 'dashboards', directory, 'metadata.yaml')

  with open(path) as f:
    data = yaml.safe_load(f)
  sample_dashboards = data.get("sample_dashboards")
  if not sample_dashboards:
    raise MetadataFormattingError("sample_dashboards not defined in {}".format(path))
  for sample_dashboard in sample_dashboards:
    # Call function to check metadata file fields
    check_metadata_entries(path, sample_dashboard)

    dashboardId = sample_dashboard.get('id')
    dashboardName = sample_dashboard.get('display_name')

    pathMap[directory]['metadataIds'][dashboardId]=''
    pathMap[directory]['metadataNames'][dashboardName]=''

    if not dashboardId in pathMap[directory]['jsonIds'].keys():
      raise MetadataInJsonMisMatchError("{} does not have a matching json file".format(dashboardId))
    
    if not dashboardName in pathMap[directory]['jsonNames'].keys():
      raise MetadataInJsonMisMatchError("{} does not have a matching json file".format(dashboardName))

def check_json_in_metadata(directory, pathMap):
  '''Checks json file data against metadata file of the same directory'''
  for jsonFile in pathMap[directory]['jsonFiles']:
    jsonPath = os.path.join('.', 'dashboards', directory, jsonFile)
    dashDict = get_sample_dashboards_json(jsonPath)

    if not jsonFile.split('.')[0] in pathMap[directory]['metadataIds'].keys():
      raise JsonInMetadataMisMatchError("{} does not have a matching id in the metadata file".format(jsonFile))
    
    if not dashDict['displayName'] in pathMap[directory]['metadataNames'].keys():
      raise JsonInMetadataMisMatchError("{} does not have a matching display_name in the metadata file".format(jsonFile))

def check_directory(directory, pathMap):
  '''Parent function that calls top level processing and checking functions'''

  # Process json files into path map
  mapJsonFiles(directory, pathMap)

  # Metadata file check
  check_metadata(directory, pathMap)

  # json file check
  check_json_in_metadata(directory, pathMap)


def main():
  paths = sys.argv[1:]

  # process paths into dictionary
  pathMap = mapPaths(paths)

  # run checks for each directory
  for directory in pathMap.keys():
    check_directory(directory, pathMap)

if __name__ == '__main__':
  main()
