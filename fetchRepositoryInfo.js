const got = require('got');

const fetchRepositoryInfo = (url, func) => {
  got(url).then((response) => {
    func(JSON.parse(response.body))
  })
}

fetchRepositoryInfo('https://api.github.com/repos/sinatra/sinatra', (receivedResponse) => {
  console.log(receivedResponse);
});

module.exports = fetchRepositoryInfo;