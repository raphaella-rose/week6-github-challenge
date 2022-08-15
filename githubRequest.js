const got = require('got');

const handleReceivedResponse = (response) => {
  const objectValue = JSON.parse(response.body);
  console.log(objectValue);
}

const url = 'https://api.github.com/repos/sinatra/sinatra';

got(url).then(handleReceivedResponse);

