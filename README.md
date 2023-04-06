# Fetch Files From GitHub Repos
This is a Node.js script that retrieves a file from a GitHub repository using the GitHub API.

## Prerequisites
- Node.js (v19.8.1)
- A GitHub access token

## Installing
- Clone the repository
```ruby
clone https://github.com/yunsangr/Fetch-Files-From-GitHub-Repos
```
## Usage
- Create a config.json file in the project root directory with your GitHub access token:
```json
{
  "MY_GITHUB_ACCESS_TOKEN": "your-access-token"
}
```
- In the Node.js file (get_file_from_github.js), set the blob_url variable to the URL of the file you want to retrieve.
- Run the script: `node get_file_from_github.js`
```ruby
$ node get_file_from_github.js
{
    "a": 1,
    "b": 2
}
```

## Functions

```js
function blobUrlToApiUrl(blobUrl){...} returns apiUrl
```
##### Arguments:
- blobUrl (string): The URL of the file in the GitHub repository, in the blob format 
  - blob format: https://github.com/username/repo/blob/branch/path/to/file
  - e.g. https://github.com/yunsangr/Fetch-Files-From-GitHub-Repos/blob/main/my_file.json
##### Return:
- A string that represents the API URL for the file contents.

##### Example:
```js
const blobUrl = 'https://github.com/username/repo/blob/branch/path/to/file';
const apiUrl = blobUrlToApiUrl(blobUrl);
// apiUrl is 'https://api.github.com/repos/username/repo/contents/path/to/file?ref=branch'
```
