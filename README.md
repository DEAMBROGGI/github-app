# GithubApi
This application allows you to obtain information about the commits of this project, as well as information about my GitHub profile. 

This app queries different endpoints of the GitHub REST API, and webhooks configured in the repository for event notification


# Run
- Run **npm i** in the root directory to install the necessary dependencies.

- Add a **.env** file in the root directory with the key **GITHUB_TOKEN** and as value a token of your GitHub users which you can obtain from your profile settings.

- Run the script **start:tunnel** which you will find in the package.json.

- Open the browser and go to the url http://localhost:5000/client/

## Functionalities
- Obtain user data and link to profile

- Obtain user repositories and links to the repositories.

- Obtain the commits made in this project and link to the details of the commits

- Automatic update in case of receiving new commits

## Tecnologies
The backend is built in Nest JS, integrates multiple endpoints, serves a static html file, incorporates endpoints which you can consult at http://localhost:5000/api and also has io socket integration to receive new commit events from a GitHub webhook and emit an event to the front.

The frontend is built in React and MUI is used as a design base, the styles are edited from the library props in the different components, it also uses redux for context management and other resources such as moment for date management.

Finally, it has a script that incorporates localtunnel to be able to route messages sent from GitHub since these only do so to public urls.

## Conclusion
  This API has expansion possibilities, incorporating filters, and querying user and repo data dynamically, and extending the commit information using different endpoints of the GitHub API. 

I enjoyed developing this project, I hope you enjoy it too. 

Thank you