const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

function getRandomWord(words, language, difficulty){
    const filteredWords = words.filter(word => word.language === language && word.difficulty === difficulty);

    if(filteredWords.length === 0){
        return null;
    }

    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex];
}

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

        requestedWord = getRandomWord(wordsArray, language, difficulty);

        res.json({
            word: requestedWord.word
        });
    });
    
    console.log('A user gathered a word');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

