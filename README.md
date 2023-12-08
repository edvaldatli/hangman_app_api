# Hangman Express API

Welcome to the Hangman Express API! This RESTful API provides a collection of words for the classic Hangman game, along with information about language and difficulty levels. It utilizes Firebase as its backend database to store and retrieve game data.

## Table of Contents

- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Usage](#usage)
- [Contributing](#contributing)

## Technology Stack
- **Backend Database**: Firebase Realtime Database.
- **Server**: Express.js (Node.js).

The API uses Firebase Realtime Database to store the words used in the Hangman game. This allows for efficient data retrieval and real-time updates if necessary.

## Accessing the API

You don't need to clone the repository to access the Hangman API. It's hosted and available for use on the web.

### Get a Random Word
- **Endpoint**: [http://hangman.edvaldatli.com/api/random](http://hangman.edvaldatli.com/api/random)
  - Use this endpoint to retrieve a completely random word.
### Get Words with Specific Parameters
- **Endpoint**: [http://hangman.edvaldatli.com/api/:difficulty/:language](http://hangman.edvaldatli.com/api)
  - Customize your word search by specifying the difficulty level and language.

You can interact with the API directly by making HTTP requests to the specified endpoints.

## Getting Started

To get started with this API, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/hangman_app_api.git
   ```
2. Install the required dependencies:

    ```bash
    cd hangman-app_api
    npm install
    ```

3. Configure the environment variables:

 - Create a .env file in the project's root directory and set the necessary environment variables, including database connection details, secret keys, and other configuration options.

4. Start the server:

    ```bash
    npm start
    ```
The server will start on the specified port (default is 3000).

## Endpoints
### Retrieve a Random Word
 - Endpoint: /random
 - Method: GET
 - Response:
   - Status Code: 200 OK
   - Body: A JSON object containing the randomly selected word.
### Retrieve a word from specified parameters
 - Endpoint: /:language/:difficulty
 - Method: GET
 - Response:
   - Status Code: 200 OK
   - Body: A JSON ojbect containing the randomly selected word within parameters.
 - Parameters:
   - difficulty: At what difficulty the word should be.
   - language: Language that the word should be in.
     
## Authentication
This API does not require authentication to access the endpoints. However, you can implement authentication and authorization as needed for your specific use case.

## Usage
You can use this API to fetch random words for the Hangman game. Here's an example using cURL:

```bash
# Fetch a random word in English with Easy difficulty
curl http://localhost:3000/hangman/English/Easy
```
The response will be a JSON object containing the selected word.

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Create a pull request to the main repository.
