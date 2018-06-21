## Submission Instructions
* Create a PR to your master from your working branch.
* Ensure that your repository/branch is deployed on heroku.com
* Submit on canvas:
  * a question and observation
  * how long you spent
  * link to your pull request that indicates it passed Travis
  * Heroku Server URL

## Server Endpoints
### `/api/v1/<your-resource>`
* `DELETE` request
  * pass `?id=<uuid>` in the query string to **DELETE** a specific resource
  * SUCCESS: 204 status code with no content in the body
  * FAILURE: 404 for resource not found

## Tests
* write a test to ensure that your api returns a status code of 404 for routes that have not been registered
* write tests to ensure the `/api/simple-resource-name` endpoint responds as described for each condition below:
 * `DELETE`: test 204, it should respond with a 204 status to indicate successful deletion
 * `DELETE`: test 404, it should respond with a 404 status to indicate that resource was not found
  matching that criteria. 
 
 ## Documentation
 List all of your registered routes and describe their behavior. 
 Describe what your resouce is. 
 Imagine you are providing this API to other developers who need to research your API in order to use it. 
 Describe how a developer should be able to make requests to your API. 
 Refer to the [PokeAPI docs](https://pokeapi.co/docsv2/#resource-lists) for a good example to follow. 
