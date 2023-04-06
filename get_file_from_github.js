const https = require('https');

// create a request URL
const url = 'https://api.github.com/repos/{owner}/{repo}/contents/{path}';

// put the token with header
const options = {
  headers: {
    'Authorization': 'Token YOUR_ACCESS_TOKEN'
  }
};

// make a GET request
https.get(url, options, (response) => {
  let data = '';

  // as data is received in chunks, concatenate it
  response.on('data', (chunk) => {
    data += chunk;
  });

  // when all data has been received, parse the JSON
  response.on('end', () => {
    if (response.statusCode === 200) {
      const content = JSON.parse(data).content; // THIS IS YOUR DESIRED FILE DATA
      console.log(content);
    } else {
      console.log('Error: Unable to retrieve JSON file');
    }
  });
}).on('error', (error) => {
  // handle error here
  console.log(`Error: ${error.message}`);
});
