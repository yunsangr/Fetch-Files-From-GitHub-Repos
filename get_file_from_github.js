const https = require('https');
const fs = require('fs');

function blobUrlToApiUrl(blobUrl) {
  // extract the user name, repository name, and file path
  const matches = blobUrl.match(/github.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)/);
  const userName = matches[1];
  const repoName = matches[2];
  const branchName = matches[3];
  const filePath = matches[4];
  // construct the API URL for the file contents
  const apiUrl = `https://api.github.com/repos/${userName}/${repoName}/contents/${filePath}?ref=${branchName}`;
  return apiUrl;
}

// read the configuration file
const configFile = 'config.json';
const config = JSON.parse(fs.readFileSync(configFile));

// set your access token here
const ACCESS_TOKEN = config.MY_GITHUB_ACCESS_TOKEN;

// create a request URL
// TODO: set your blbl_url
const blob_url = 'https://github.com/yunsangr/Fetch-Files-From-GitHub-Repos/blob/main/my_file.json' //example
const github_api_url = blobUrlToApiUrl(blob_url)

// set headers
const options = {
  headers: {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
    'User-Agent': 'My-App'
  }
};

// make a GET request
https.get(github_api_url, options, (response) => {
  let data = '';

  // as data is received in chunks, concatenate it
  response.on('data', (chunk) => {
    data += chunk;
  });

  // when all data has been received, parse the JSON
  response.on('end', () => {
    if (response.statusCode === 200) {
      const content = JSON.parse(data).content; // THIS IS YOUR DESIRED FILE DATA
      const decodedContent = Buffer.from(content, 'base64').toString('utf-8');
      console.log(decodedContent);
    } else {
      console.log('Error: Unable to retrieve file');
    }
  });
}).on('error', (error) => {
  // handle error here
  console.log(`Error: ${error.message}`);
});
