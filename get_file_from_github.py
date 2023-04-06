import requests

# step 1: set your authorization token here!
YOUR_ACCESS_TOKEN = "GITUH AUTHORIZATION TOKEH HERE"

# step 2: create a request URL
url = 'https://api.github.com/repos/{owner}/{repo}/contents/{path}'

# step 3: put the token with header
headers = {'Authorization': 'Token YOUR_ACCESS_TOKEN'}


response = requests.get(url, headers=headers)
if response.status_code == 200:
    data = response.json()
    content = data['content'] # the data of a json file you want will be here
    print(content)
else:
    print('Error: Unable to retrieve JSON file')
