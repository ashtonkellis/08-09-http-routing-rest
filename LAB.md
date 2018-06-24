* **Please make sure to keep work as separate as possible from `lab-08` so TA's can grade accordingly** 
* Create a PR to your master from your working branch.
* Submit on canvas:
  * a question and observation
  * how long you spent
  * link to your pull request
  * Heroku Server URL (should be the same as what you submitted for Lab 8)
  * Copy/paste your `.env` variables in the comment box so your TA can easily recreate a `.env` file on their end
  
## Feature Tasks
* Add a `storage` directory in your `lib` directory that contains three modules:
    * Move your `storage.js` module from Lab 8 into this directory and rename it `memory.js` (or whatever naming convention you want)
    * Create a new module called `file-system.js` (or whatever you want) where you will write new storage methods that will save and persist your resources to your local file system instead of in memory. Those storage methods should be the same as the MVP requirements for Lab 8: `GET, POST, and DELETE (PUT is extra credit)`
    * Export those modules into an entry point module of your `storage` directory that will rely on an `env` variable to determine which database system you use for your API

## Documentation
Document each of your routes, just like in lab 08
