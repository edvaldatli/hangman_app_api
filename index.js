const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

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

app.get('/random', (req, res) => {
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

        requestedWord = getRandomWord(wordsArray);

        res.json({
            word: requestedWord.word
        });
    });
    console.log('User gathered a random word');
});

app.get('/:language/:difficulty', (req, res) => {
    const language = req.params.language.toLowerCase();
    const difficulty = req.params.difficulty.toLowerCase();

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
    console.log('A user gathered a word', language, difficulty);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

