const got = require('got');


const fetchJson = (url, myFunction) => {
 got(url).then((response) => {
  myFunction(JSON.parse(response.body))
 })
}


fetchJson('https://jsonplaceholder.typicode.com/todos', (result) => {
  console.log(result);
})



module.exports = fetchJson;