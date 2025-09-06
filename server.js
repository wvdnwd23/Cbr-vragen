const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('data'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API routes
app.get('/api/questions/:testId', (req, res) => {
    const testId = parseInt(req.params.testId);
    const questionsFile = path.join(__dirname, 'data', `test${testId}.json`);
    
    if (fs.existsSync(questionsFile)) {
        const questions = JSON.parse(fs.readFileSync(questionsFile, 'utf8'));
        res.json(questions);
    } else {
        res.status(404).json({ error: 'Test not found' });
    }
});

// New endpoints for extra questions
app.get('/api/extra-questions', (req, res) => {
    const questionsFile = path.join(__dirname, 'data', 'extra-questions.json');
    if (fs.existsSync(questionsFile)) {
        const questions = JSON.parse(fs.readFileSync(questionsFile, 'utf8'));
        res.json(questions);
    } else {
        res.status(404).json({ error: 'Extra questions not found' });
    }
});

app.get('/api/assisted-questions', (req, res) => {
    const questionsFile = path.join(__dirname, 'data', 'assisted-questions.json');
    if (fs.existsSync(questionsFile)) {
        const questions = JSON.parse(fs.readFileSync(questionsFile, 'utf8'));
        res.json(questions);
    } else {
        res.status(404).json({ error: 'Assisted questions not found' });
    }
});

// Endpoint for mixed random questions
app.get('/api/random-questions/:count', (req, res) => {
    const count = parseInt(req.params.count) || 20;
    
    // Load all question files
    const allQuestions = [];
    const files = ['test1.json', 'test2.json', 'test3.json', 'test4.json', 'test5.json', 'extra-questions.json'];
    
    files.forEach(file => {
        const filePath = path.join(__dirname, 'data', file);
        if (fs.existsSync(filePath)) {
            const questions = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            allQuestions.push(...questions);
        }
    });
    
    // Shuffle and return requested count
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    res.json(shuffled.slice(0, count));
});

// Intermediate results endpoint
app.post('/api/intermediate-results', (req, res) => {
    const { answers, questions, startIndex, endIndex } = req.body;
    
    const results = questions.slice(startIndex, endIndex).map((q, index) => {
        const userAnswer = answers[startIndex + index];
        const isCorrect = userAnswer === q.correctAnswer;
        
        return {
            questionIndex: startIndex + index,
            question: q.question,
            userAnswer: userAnswer,
            correctAnswer: q.correctAnswer,
            isCorrect: isCorrect,
            explanation: isCorrect ? null : q.explanation,
            assistedExplanation: isCorrect ? null : q.assistedExplanation,
            commonMistakes: q.commonMistakes || null
        };
    });
    
    const score = results.filter(r => r.isCorrect).length;
    const percentage = Math.round((score / (endIndex - startIndex)) * 100);
    
    res.json({
        score: score,
        percentage: percentage,
        results: results,
        section: `Vragen ${startIndex + 1}-${endIndex}`,
        recommendation: getRecommendation(percentage)
    });
});

function getRecommendation(percentage) {
    if (percentage >= 90) return "Uitstekend! Je bent goed voorbereid.";
    if (percentage >= 75) return "Goed! Je bent op de goede weg.";
    if (percentage >= 60) return "Voldoende, maar oefen de fouten nog even.";
    return "Meer oefening nodig. Focus op de foutieve vragen.";
}

app.post('/api/submit-test', (req, res) => {
    const { testId, answers } = req.body;
    const questionsFile = path.join(__dirname, 'data', `test${testId}.json`);
    
    if (fs.existsSync(questionsFile)) {
        const questions = JSON.parse(fs.readFileSync(questionsFile, 'utf8'));
        
        // Calculate score and identify incorrect answers
        const results = questions.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === q.correctAnswer;
            
            return {
                questionIndex: index,
                question: q.question,
                userAnswer: userAnswer,
                correctAnswer: q.correctAnswer,
                isCorrect: isCorrect,
                explanation: isCorrect ? null : q.explanation,
                assistedExplanation: isCorrect ? null : q.assistedExplanation,
                commonMistakes: isCorrect ? null : q.commonMistakes,
                imageUrl: isCorrect ? null : q.imageUrl,
                videoUrl: isCorrect ? null : q.videoUrl
            };
        });
        
        const score = results.filter(r => r.isCorrect).length;
        const percentage = Math.round((score / questions.length) * 100);
        
        res.json({
            score: score,
            percentage: percentage,
            results: results
        });
    } else {
        res.status(404).json({ error: 'Test not found' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Open your browser and navigate to http://localhost:3000');
});