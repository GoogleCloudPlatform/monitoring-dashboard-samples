import json
import os
import sys
import yaml

def mapPaths(paths):
    map = {}

    print("mapping paths: {}".format(paths))

    for path in paths:
        print("processing path: {}".format(path))

        pathParts = path.split('/')

        # filter out non-dashboards files
        if not 'dashboards' == pathParts[1]:
            continue

        if not pathParts[2] in map.keys():
            print("new directory: {}".format(pathParts[2]))
            map[pathParts[2]] = {
                'metadataIds': {},
                'metadataNames': {},
                'jsonIds': {},
                'jsonNames': {},
                'jsonFiles': []
            }

        if pathParts[3].split('.')[-1] == "json":
            print("adding {} to map".format(pathParts[3]))
            map[pathParts[2]]['jsonFiles'].append(pathParts[3])


    return map

def get_sample_dashboards_json(path):
  with open(path) as f:
    try:
      dashboards_dict = json.load(f)
      dashboards_json = json.dumps(dashboards_dict)

      return dashboards_dict

    except:
      raise Exception("{} content could not be loaded".format(path))

def check_json_file_name(path, file_name_parts):
  if len(file_name_parts) != 2:
    raise Exception("{} file name not in <name>.json format".format(path))

def mapJsonFiles(directory, pathMap):
  # store json data into map
  for jsonFile in pathMap[directory]['jsonFiles']:
    jsonPath = os.path.join('.', 'dashboards', directory, jsonFile)
    dashDict = get_sample_dashboards_json(jsonPath)

    if not 'displayName' in dashDict.keys():
      raise Exception("{} is missing displayName field".format(jsonFile))

    pathMap[directory]['jsonNames'][dashDict['displayName']]=''

    fileNameParts = jsonFile.split('.')
    check_json_file_name(jsonFile, fileNameParts)

    pathMap[directory]['jsonIds'][jsonFile.split('.')[0]]=''

def check_metadata_entries(path, sample_dashboard):
  required_fields = {"category", "id", "display_name", "description"}
  missing_fields = required_fields - sample_dashboard.keys()
  if missing_fields:
    raise Exception("{} missing {}".format(path, missing_fields))

def check_metadata(directory, pathMap):
  print("checking metadata")
  print(pathMap)
  path = os.path.join('.', 'dashboards', directory, 'metadata.yaml')

  with open(path) as f:
    data = yaml.safe_load(f)
  sample_dashboards = data.get("sample_dashboards")
  if not sample_dashboards:
    raise Exception("sample_dashboards not defined in {}".format(path))
  for sample_dashboard in sample_dashboards:
    check_metadata_entries(path, sample_dashboard)

    dashboardId = sample_dashboard.get('id')
    dashboardName = sample_dashboard.get('display_name')

    pathMap[directory]['metadataIds'][dashboardId]=''
    pathMap[directory]['metadataNames'][dashboardName]=''

    if not dashboardId in pathMap[directory]['jsonIds'].keys():
      raise Exception("{} does not have a matching json file".format(dashboardId))
    
    if not dashboardName in pathMap[directory]['jsonNames'].keys():
      raise Exception("{} does not have a matching json file".format(dashboardName))

def check_json_in_metadata(directory, pathMap):
  # continue working here
  for jsonFile in pathMap[directory]['jsonFiles']:
    jsonPath = os.path.join('.', 'dashboards', directory, jsonFile)
    dashDict = get_sample_dashboards_json(jsonPath)

    if not jsonFile.split('.')[0] in pathMap[directory]['metadataIds'].keys():
      raise Exception("{} does not have a matching id in the metadata file".format(jsonFile))
    
    if not dashDict['displayName'] in pathMap[directory]['metadataNames'].keys():
      raise Exception("{} does not have a matching display_name in the metadata file".format(jsonFile))

def check_directory(directory, pathMap):
    # Process json files into path map
    mapJsonFiles(directory, pathMap)

    # Metadata file check
    check_metadata(directory, pathMap)

    # json file check
    check_json_in_metadata(directory, pathMap)


def main():
  paths = sys.argv[1:]
  print("running command for paths: {}".format(paths))

  # process paths into dictionary
  pathMap = mapPaths(paths)

  # run checks for each directory
  for directory in pathMap.keys():
    print("path map before for {}".format(directory))
    print(pathMap)
    check_directory(directory, pathMap)
    print("path map after for {}".format(directory))
    print(pathMap)

if __name__ == '__main__':
  main()
