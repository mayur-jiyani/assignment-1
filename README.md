# assignment-1

This assignment is for node.js begginers.
Here our task are as below:

Fetch GitHub repository data using following API
https://api.github.com/search/repositories?q=is:public

Use following filters which are defined in dictionary to fetch only limited relevant repositories
{
  "language": "Python",
  "forks": ">=200"
}

Store fetched repositories data into following columns in CSV file
name, description, html_url, watchers_count, stargazers_count, forks_count

Store only those repositories which have more than 2000 “stargazers_count”

for that you need to basic understanding of fetching api and store the json data into csv
