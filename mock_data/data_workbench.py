import json

with open('./mock_data/exdata.json') as f:
    data = json.load(f)

print(data)