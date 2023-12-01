const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/hangman/:language/:difficulty', (req, res) => {
    const { language, difficulty } = req.params;

    let wordsArray;
    let requestedWord;

    fs.readFile('db/words.json', 'utf8', (err, data) => {
        if (err){
            console.error('Error reading file:', e);
            return
        }

        try {
            wordsArray = JSON.parse(data)
        } catch (e) {
            console.error('Error parsing JSON:', e);
            return;
        }

        requestedWord = wordsArray.find(wordObj => wordObj.word === 'orange');

        res.json({
            message: 'Hangman Game API',
            language: language || 'not specified',
            difficulty: difficulty || 'not specified',
            word: requestedWord.word
        });
    });
    
    console.log('A user gathered a word');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});