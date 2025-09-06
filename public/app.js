// Global variables
let currentTest = null;
let currentQuestionIndex = 0;
let questions = [];
let userAnswers = [];
let testStartTime = null;
let testScores = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
};
let currentMode = 'regular'; // 'regular', 'random', 'assisted'
let intermediateResults = [];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    updateUI();
});

// Start test
async function startTest(testId) {
    currentTest = testId;
    currentQuestionIndex = 0;
    userAnswers = [];
    testStartTime = new Date();
    currentMode = 'regular';
    intermediateResults = [];
    
    try {
        const response = await fetch(`/api/questions/${testId}`);
        questions = await response.json();
        
        if (questions.length > 0) {
            showTestModal();
            displayQuestion();
            showProgressBar();
        }
    } catch (error) {
        console.error('Error loading questions:', error);
        alert('Er is een fout opgetreden bij het laden van de vragen.');
    }
}

// Start random test
async function startRandomTest() {
    currentQuestionIndex = 0;
    userAnswers = [];
    testStartTime = new Date();
    currentMode = 'random';
    intermediateResults = [];
    
    try {
        const response = await fetch('/api/random-questions/300');
        questions = await response.json();
        
        if (questions.length > 0) {
            showTestModal();
            displayQuestion();
            showProgressBar();
        }
    } catch (error) {
        console.error('Error loading random questions:', error);
        alert('Er is een fout opgetreden bij het laden van de vragen.');
    }
}

// Start assisted learning
async function startAssistedTest() {
    currentQuestionIndex = 0;
    userAnswers = [];
    testStartTime = new Date();
    currentMode = 'assisted';
    intermediateResults = [];
    
    try {
        const response = await fetch('/api/assisted-questions');
        questions = await response.json();
        
        if (questions.length > 0) {
            showTestModal();
            displayQuestion();
            showProgressBar();
        }
    } catch (error) {
        console.error('Error loading assisted questions:', error);
        alert('Er is een fout opgetreden bij het laden van de vragen.');
    }
}

// Display question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    
    document.getElementById('test-title').textContent = `Test ${currentTest} - ${question.category}`;
    document.getElementById('question-counter').textContent = `Vraag ${currentQuestionIndex + 1} van ${questions.length}`;
    document.getElementById('question-title').textContent = question.question;
    document.getElementById('question-description').textContent = `Categorie: ${question.category}`;
    
    // Display image if available
    const questionImage = document.getElementById('question-image');
    if (question.imageUrl) {
        questionImage.src = `images/${question.imageUrl}`;
        questionImage.style.display = 'block';
    } else {
        questionImage.style.display = 'none';
    }
    
    // Update options
    for (let i = 0; i < 4; i++) {
        document.getElementById(`option-${i}-text`).textContent = question.options[i];
        document.getElementById(`option-${i}`).checked = false;
    }
    
    // Update buttons
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');
    
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        finishBtn.style.display = 'none';
    }
    
    updateTimeCounter();
}

// Next question
async function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedOption) {
        alert('Kies een antwoord voordat je verder gaat.');
        return;
    }
    
    userAnswers.push(parseInt(selectedOption.value));
    currentQuestionIndex++;
    
    // Check for intermediate results every 20 questions
    if (currentQuestionIndex % 20 === 0) {
        await showIntermediateResults();
    }
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    }
}

// Show intermediate results every 20 questions
async function showIntermediateResults() {
    const startIndex = currentQuestionIndex - 20;
    const endIndex = currentQuestionIndex;
    
    try {
        const response = await fetch('/api/intermediate-results', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                answers: userAnswers,
                questions: questions,
                startIndex: startIndex,
                endIndex: endIndex
            })
        });
        
        const results = await response.json();
        displayIntermediateResults(results, startIndex + 1, endIndex);
    } catch (error) {
        console.error('Error getting intermediate results:', error);
    }
}

function displayIntermediateResults(results, start, end) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content results">
            <div class="results-header">
                <h2>Tussentijdse Resultaten - Vragen ${start}-${end}</h2>
                <button class="close-btn" onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
            <div class="results-summary">
                <div class="score-circle">
                    <div class="score-text">
                        <span>${results.percentage}%</span>
                        <small>Behaald</small>
                    </div>
                </div>
                <div class="score-details">
                    <p>${results.score}/20 correct</p>
                    <p>${results.recommendation}</p>
                </div>
            </div>
            ${results.results.filter(r => !r.isCorrect).length > 0 ? `
            <div class="wrong-answers-section">
                <h3>Uitleg bij foutieve antwoorden</h3>
                ${results.results.filter(r => !r.isCorrect).map(result => `
                    <div class="wrong-answer-item">
                        <h4>${result.question}</h4>
                        <p><strong>Jouw antwoord:</strong> ${result.userAnswer !== undefined ? ['A', 'B', 'C', 'D'][result.userAnswer] : 'Geen antwoord'}</p>
                        <p><strong>Correcte antwoord:</strong> ${['A', 'B', 'C', 'D'][result.correctAnswer]}</p>
                        ${result.assistedExplanation ? `<div class="explanation"><strong>Uitleg:</strong> ${result.assistedExplanation}</div>` : ''}
                        ${result.commonMistakes ? `<div class="explanation"><strong>Veel voorkomende fouten:</strong> ${result.commonMistakes.join(', ')}</div>` : ''}
                    </div>
                `).join('')}
            </div>
            ` : ''}
            <div class="results-actions">
                <button onclick="this.parentElement.parentElement.remove()">Verdergaan</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
}

// Finish test
async function finishTest() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedOption) {
        alert('Kies een antwoord voordat je de test afrondt.');
        return;
    }
    
    userAnswers.push(parseInt(selectedOption.value));
    
    const results = await submitTest(currentTest, userAnswers);
    displayResults(results);
}

// Submit test
async function submitTest(testId, answers) {
    try {
        const response = await fetch('/api/submit-test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                testId: testId,
                answers: answers
            })
        });
        
        return await response.json();
    } catch (error) {
        console.error('Error submitting test:', error);
        return null;
    }
}

// Display results
function displayResults(results) {
    closeTestModal();
    showResultsModal();
    
    document.getElementById('score-percentage').textContent = `${results.percentage}%`;
    document.getElementById('correct-answers').textContent = `${results.score}/${questions.length} correct`;
    
    const passStatus = document.getElementById('pass-status');
    if (results.percentage >= 75) {
        passStatus.textContent = 'Geslaagd! 🎉';
        passStatus.style.color = 'var(--success-color)';
    } else {
        passStatus.textContent = 'Niet geslaagd - Meer oefening nodig';
        passStatus.style.color = 'var(--error-color)';
    }
    
    // Update progress bar
    const scoreCircle = document.querySelector('.score-circle');
    scoreCircle.style.background = `conic-gradient(var(--success-color) ${results.percentage * 3.6}deg, var(--border-color) ${results.percentage * 3.6}deg)`;
    
    // Display wrong answers
    const wrongAnswersList = document.getElementById('wrong-answers-list');
    wrongAnswersList.innerHTML = '';
    
    results.results.forEach((result, index) => {
        if (!result.isCorrect) {
            const wrongItem = document.createElement('div');
            wrongItem.className = 'wrong-answer-item';
            
            wrongItem.innerHTML = `
                <h4>Vraag ${index + 1}: ${result.question}</h4>
                <p><strong>Jouw antwoord:</strong> ${result.options[result.userAnswer]}</p>
                <p><strong>Correcte antwoord:</strong> ${result.options[result.correctAnswer]}</p>
                <div class="explanation">
                    <strong>Uitleg:</strong> ${result.explanation}
                    ${result.imageUrl ? `<img src="images/${result.imageUrl}" alt="Uitleg" style="max-width: 100%; margin-top: 1rem;">` : ''}
                    ${result.videoUrl ? `<video controls style="max-width: 100%; margin-top: 1rem;"><source src="videos/${result.videoUrl}" type="video/mp4"></video>` : ''}
                </div>
            `;
            
            wrongAnswersList.appendChild(wrongItem);
        }
    });
    
    // Update test score
    testScores[currentTest] = results.percentage;
    saveProgress();
    updateUI();
}

// Update time counter
function updateTimeCounter() {
    const startTime = testStartTime;
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    
    document.getElementById('time-counter').textContent = 
        `Tijd: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Modal functions
function showTestModal() {
    document.getElementById('test-modal').style.display = 'block';
}

function closeTestModal() {
    document.getElementById('test-modal').style.display = 'none';
}

function showResultsModal() {
    document.getElementById('results-modal').style.display = 'block';
}

function closeResults() {
    document.getElementById('results-modal').style.display = 'none';
}

// Review wrong answers
function reviewWrongAnswers() {
    closeResults();
    // Implementation for reviewing wrong answers
    alert('Deze functie wordt binnenkort toegevoegd!');
}

// Progress management
function saveProgress() {
    localStorage.setItem('cbr-theory-progress', JSON.stringify({
        testScores: testScores,
        lastUpdated: new Date().toISOString()
    }));
}

function loadProgress() {
    const saved = localStorage.getItem('cbr-theory-progress');
    if (saved) {
        const data = JSON.parse(saved);
        testScores = data.testScores;
    }
}

function updateUI() {
    // Update test cards
    for (let i = 1; i <= 5; i++) {
        const testCard = document.querySelector(`[data-test="${i}"]`);
        const progressBar = testCard.querySelector('.progress');
        const score = testScores[i];
        
        if (score > 0) {
            progressBar.style.width = `${score}%`;
            testCard.querySelector('.start-test-btn').textContent = 
                `Herhaal Test ${i} (${score}%)`;
        }
    }
    
    // Update overall progress
    const totalQuestions = 300;
    const completedQuestions = Object.values(testScores).filter(score => score > 0).length * 60;
    const overallProgress = Math.round((completedQuestions / totalQuestions) * 100);
    
    document.getElementById('overall-progress').style.width = `${overallProgress}%`;
    document.getElementById('progress-text').textContent = 
        `${completedQuestions} van de 300 vragen beantwoord`;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Close modals when clicking outside
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeTestModal();
        closeResults();
    }
});