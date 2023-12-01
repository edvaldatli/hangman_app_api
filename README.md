# Hangman API Express App

Welcome to the Hangman API Express App! This RESTful API provides a collection of words for the classic Hangman game, along with information about language and difficulty levels.

## Table of Contents

- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Accessing the API

You don't need to clone the repository to access the Hangman API. It's hosted and available for use on the web.

### Get a Random Word
- **Endpoint**: [http://hangman.edvaldatli.com/random](http://hangman.edvaldatli.com/random)
  - Use this endpoint to retrieve a completely random word.
### Get Words with Specific Parameters
- **Endpoint**: [http://hangman.edvaldatli.com/:difficulty/:language](http://hangman.edvaldatli.com)
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
 - Retrieve a Random Word
 - Endpoint: /hangman/:language/:difficulty
 - Method: GET
 - Parameters:
   - language (string): Language of the word (e.g., English, Icelandic).
   - difficulty (string): Difficulty level (e.g., Easy, Intermediate, Hard).
 - Response:
   - Status Code: 200 OK
   - Body: A JSON object containing the randomly selected word.
### List Available Languages
 - Endpoint: /languages
 - Method: GET
 - Response:
   - Status Code: 200 OK
   - Body: A JSON array of available languages.
### List Available Difficulty Levels
 - Endpoint: /difficulties
 - Method: GET
 - Response:
   - Status Code: 200 OK
   - Body: A JSON array of available difficulty levels.
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
## License
This project is licensed under the MIT License. See the LICENSE file for details.



Please replace the placeholders (`edvaldatli`, `hangman-api-express`, etc.) with your actual information. If you need any further assistance or have specific questions about the README or your project, feel free to ask!
