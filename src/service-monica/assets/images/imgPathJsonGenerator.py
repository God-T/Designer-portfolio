import os
from os import walk
import json

allDirNames = [name for name in os.listdir(".") if os.path.isdir(name)]
dirNames = [d for d in allDirNames if '-' in d]


filenames = next(walk("P1-2022"), (None, None, []))[2]

result = [next(walk(d), (None, None, []))[2] for d in dirNames]

print (result)


# Data to be written
jsonList = []
 

for d in dirNames:
    item = {}
    item['folderName'] = d
    item['fileNames'] = next(walk(d), (None, None, []))[2]
    item['autoImporting'] = True
    jsonList.append(item)
 

# Serializing json
json_object = json.dumps(jsonList, indent=4)
 
# Writing to sample.json
with open("imgs.json", "w") as outfile:
    outfile.write(json_object)