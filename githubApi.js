const got = require('got');

class GithubApi {
 
  fetchRepositoryData(url, func) {
    got(url).then((response) => {
      func(JSON.parse(response.body))
    })
  }
}

module.exports = GithubApi;