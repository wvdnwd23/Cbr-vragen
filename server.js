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