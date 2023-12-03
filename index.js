const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./firebase/hangman-db-4aa93-firebase-adminsdk-v87m7-3f409fb293.json');

const fs = require('fs');
const app = express();
const port = 3000;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://hangman-db-4aa93-default-rtdb.europe-west1.firebasedatabase.app/"
});

const database = admin.database();

app.use(express.json());
app.use(cors());

function getFromDB() {
    return new Promise((resolve, reject) => {
        database.ref('/').once('value').then((snapshot) => {
            console.log('GET: firebase words');
            const wordsArray = snapshot.val();
            resolve(wordsArray);
        }).catch((error) => {
            console.error('Fetching error: ', error);
            reject(error);
        });
    });
}


function getRandomWordByLanguageAndDifficulty(words, language, difficulty){
    const filteredWords = words.filter(word => word.language === language && word.difficulty === difficulty);

    if(filteredWords.length === 0){
        return null;
    }

    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex];
}

function getRandomWord(words){
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

app.get('/', (req, res) => {
    res.type('html');
    const instructions = `
        <!Doctype HTML>
        <html lang="en">
        <head>
            <title>Hangman API</title>
        </head>
        <body>
            <h1>Welcome to the Hangman API!</h1>
            <h3>Available Endpoints:</h3>
            <ul>
                <li><a href="/random"> /random:</a> Get a random word.</li>
                <li>/:language/:difficulty: Get a word based on specified language and difficulty.</li>
            </ul>
            <h3>Available Languages:</h3>
            <ul>
                <li>English</li>
                <li>Icelandic</li>
            </ul>
            <h3>Available Difficulties:</h3>
            <ul>
                <li>Easy</li>
                <li>Intermediate</li>
                <li>Hard</li>
            </ul>
            <h4>For more details, please refer to the documentation: <a href="https://github.com/edvaldatli/hangman_app_api">API Documentation</a>.</h4>
        </body>
    `;

    res.send(instructions);
});

app.get('/random', async (req, res) => {
    try {
        let wordsArray = await getFromDB();
        let word = getRandomWord(wordsArray);

        if(word){
            res.json(word.word);
        } else {
            res.status(404).send('No words found');
        }

    } catch (error) {
        console.error('Error getting a random word: ', error);
        res.status(500).send('Server error');
    }


    /*
    let wordsArray;
    let word;

    wordsArray = getFromDB();
    word = getRandomWord(wordsArray);

    res.json(word.word);
    */
});

app.get('/:language/:difficulty', async (req, res) => {
    const language = req.params.language.toLowerCase();
    const difficulty = req.params.difficulty.toLowerCase();

    try {
        let wordsArray = await getFromDB();
        let word = getRandomWordByLanguageAndDifficulty(wordsArray, language, difficulty);

        if(word){
            res.json(word.word);
        } else {
            res.status(404).send('No words found');
        }

    } catch (error) {
        console.error('Error getting a random word: ', error),
        res.status(500).send('Server error');
    }


    /*
    let wordsArray;
    let requestedWord;

    fs.readFile('db/words.json', 'utf8', (err, data) => {
        if (err){
            console.error('Error reading file:', err);
            return
        }

        try {
            wordsArray = JSON.parse(data)
        } catch (e) {
            console.error('Error parsing JSON:', e);
            return;
        }

        requestedWord = getRandomWordByLanguageAndDifficulty(wordsArray, language, difficulty);

        res.json({
            word: requestedWord.word
        });
    });
    */
    console.log('A user gathered a word', language, difficulty);
});

app.use((req, res, next) => {
    res.status(400).json({ 
        error: 'Bad request. Invalid language or difficulty.'
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

