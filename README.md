# Assignment-1

- This assignment is for node.js begginers.
- Here our task are as below:

- Fetch GitHub repository data using following API
https://api.github.com/search/repositories?q=is:public

- Use following filters which are defined in dictionary to fetch only limited relevant repositories
```bash
{
  "language": "Python",
  "forks": ">=200"
}
```

- Store fetched repositories data into following columns in CSV file
name, description, html_url, watchers_count, stargazers_count, forks_count

- Store only those repositories which have more than 2000 “stargazers_count”

# Project Setup

Clone this repo and run below command to install all the dependencies.

```bash 
npm install
```

Run the below command after cloning repo in terminal

 ```bash
 node app.js
 ```
