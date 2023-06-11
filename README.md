I have constructed an advanced project centered around transaction history tasks.

This project utilizes the MySQL memory engine, which signifies that all data will be stored and retrieved directly from RAM. Nevertheless, in cases where the RAM is insufficient, the data will be swapped to a file.

For monitoring purposes, we are using Grafana, Prometheus, Loki, and Promtail to track Symfony logs, the MySQL database, and transaction activities.

This project is dependent on the API Platform, constructed atop the Symfony framework. Although various gateway options are available, I have specifically activated the RESTful API and GraphQL for a more engaging and fun experience.

Documentation resources, such as Swagger, ReDoc, JsonLD, Json, and a GraphQL editor, are readily accessible.

I have adjusted the structure to better fit the requirements of this project.

To launch the project, you need to clone it and follow these steps:

Step 1: Navigate to the root of the directory and execute docker-compose up -d.

Step 2: Post completion of Step 1, allow a few minutes for the installation of certain dependencies required for creating the Symfony project and initializing the Caddy server.

Step 3: To run the Cypress tests, proceed to the cypress-testing directory, run npm install, and then execute npm run test.

Step 4: To execute unit tests, move to the PHP image with the command: docker-compose exec php sh, followed by php bin/phpunit.

Upon running the project, you will discover all the links and components of the project at https://localhost.