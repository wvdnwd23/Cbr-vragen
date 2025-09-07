// Mobile CBR Exam App with Photos
class CBRMobileApp {
    constructor() {
        this.currentTest = null;
        this.currentQuestion = 0;
        this.questions = [];
        this.answers = [];
        this.score = 0;
        this.testMode = 'regular';
        this.assistedMode = false;
        
        this.initializeApp();
        this.loadProgress();
    }

    initializeApp() {
        // Prevent zoom on double tap
        document.addEventListener('touchstart', (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        });

        // Prevent scrolling when keyboard is open
        window.addEventListener('resize', () => {
            if (window.innerHeight < 500) {
                document.body.classList.add('keyboard-open');
            } else {
                document.body.classList.remove('keyboard-open');
            }
        });

        // Handle back button
        window.addEventListener('popstate', (e) => {
            this.handleBackButton();
        });
    }

    // Navigation
    showScreen(screenId) {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
        
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            
            // Update progress bar
            if (screenId === 'startScreen') {
                this.updateStartScreenStats();
            }
        }
    }

    // Test management
    startTest(mode) {
        this.testMode = mode;
        
        switch(mode) {
            case 'regular':
                this.startRegularTest();
                break;
            case 'random':
                this.startRandomTest();
                break;
            case 'assisted':
                this.startAssistedTest();
                break;
        }
    }

    startRegularTest() {
        this.showScreen('testScreen');
        this.loadVisualQuestions(1); // Start with Test 1
    }

    startRandomTest() {
        this.showScreen('testScreen');
        this.loadRandomVisualQuestions();
    }

    startAssistedTest() {
        this.assistedMode = true;
        this.showScreen('testScreen');
        this.loadAssistedVisualQuestions();
    }

    loadVisualQuestions(testNumber) {
        // Generate 60 visual questions for the test
        this.questions = this.generateVisualQuestions(testNumber);
        this.currentQuestion = 0;
        this.answers = [];
        this.showQuestion();
    }

    loadRandomVisualQuestions() {
        this.questions = this.generateRandomVisualQuestions();
        this.currentQuestion = 0;
        this.answers = [];
        this.showQuestion();
    }

    loadAssistedVisualQuestions() {
        this.questions = this.generateAssistedVisualQuestions();
        this.currentQuestion = 0;
        this.answers = [];
        this.showQuestion();
    }

    generateVisualQuestions(testNumber) {
        // Visual questions with real CBR-style images
        const visualQuestions = [
            {
                id: 1,
                text: "Wat betekent dit verkeersbord?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Netherlands_traffic_sign_B1.svg/240px-Netherlands_traffic_sign_B1.svg.png",
                imageAlt: "Driehoekig verkeersbord met kinderen",
                answers: [
                    "Waarschuwing voor overstekende kinderen",
                    "Speelplaats",
                    "Schoolgebied",
                    "Maximumsnelheid 30 km/h"
                ],
                correct: 0,
                explanation: "Dit bord waarschuwt voor een speelplaats of school waar kinderen kunnen oversteken. Let extra goed op en verminder snelheid."
            },
            {
                id: 2,
                text: "Wat betekent deze wegmarkering?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Netherlands_road_marking_line.svg/240px-Netherlands_road_marking_line.svg.png",
                imageAlt: "Doorgetrokken witte streep op de weg",
                answers: [
                    "Verboden te inhalen",
                    "Rijbaan scheiding",
                    "Fietsstrook markering",
                    "Parkeerverbod zone"
                ],
                correct: 0,
                explanation: "Een doorgetrokken witte streep langs de weg betekent dat inhalen verboden is wanneer deze aan uw kant ligt."
            },
            {
                id: 3,
                text: "Wie heeft hier voorrang?",
                image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop",
                imageAlt: "Kruispunt situatie met auto's",
                answers: [
                    "De auto van rechts heeft voorrang",
                    "De auto op de hoofdweg",
                    "De snelste auto",
                    "De auto die het eerst arriveert"
                ],
                correct: 0,
                explanation: "Bij kruispunten geldt het recht van rechts. De auto van rechts heeft hier voorrang."
            },
            {
                id: 4,
                text: "Wat betekent dit dashboardlampje?",
                image: "https://images.unsplash.com/photo-1551522435-6b3d5b651b51?w=400&h=300&fit=crop",
                imageAlt: "Dashboard met motorlampje",
                answers: [
                    "Motorprobleem - laat controleren",
                    "Oliepeil te laag",
                    "Koelvloeistof ontbreekt",
                    "Brandstof bijna leeg"
                ],
                correct: 0,
                explanation: "Dit lampje geeft een motorprobleem aan. Laat de auto zo snel mogelijk controleren door een garage."
            },
            {
                id: 5,
                text: "Mag u hier parkeren?",
                image: "https://images.unsplash.com/photo-1607197109166-a7d282837546?w=400&h=300&fit=crop",
                imageAlt: "Parkeerplaats met blauwe zone bord",
                answers: [
                    "Ja, met parkeerschijf",
                    "Nooit parkeren",
                    "Alleen voor laden en lossen",
                    "Alleen voor elektrische auto's"
                ],
                correct: 0,
                explanation: "Bij een blauwe zone mag u parkeren met een parkeerschijf. Let op de maximumparkeertijd."
            },
            {
                id: 6,
                text: "Wat is de maximumsnelheid hier?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Netherlands_traffic_sign_G12.svg/240px-Netherlands_traffic_sign_G12.svg.png",
                imageAlt: "Weg met 50 km/u snelheidsbord",
                answers: [
                    "50 km/u",
                    "30 km/u",
                    "80 km/u",
                    "100 km/u"
                ],
                correct: 0,
                explanation: "Het bord toont duidelijk 50 km/u aan. Dit is de maximumsnelheid die u hier mag rijden."
            },
            {
                id: 7,
                text: "Wat moet u doen bij dit verkeerslicht?",
                image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop",
                imageAlt: "Verkeerslicht situatie",
                answers: [
                    "Rechtsaf mag, rechtdoor moet wachten",
                    "Alle richtingen mogen doorrijden",
                    "Alleen rechtdoor mag",
                    "Stoppen verplicht"
                ],
                correct: 0,
                explanation: "Groen pijl naar rechts betekent dat u rechtsaf mag slaan, maar voor rechtdoor moet u wachten."
            },
            {
                id: 8,
                text: "Hoe rijdt u door deze rotonde?",
                image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0a2d?w=400&h=300&fit=crop",
                imageAlt: "Rotonde situatie",
                answers: [
                    "Rechts aanhouden en voorrang verlenen",
                    "Links aanhouden en doorrijden",
                    "Rechtdoor door het midden",
                    "Stoppen en wachten"
                ],
                correct: 0,
                explanation: "Op een rotonde houdt u rechts aan en verleent u voorrang aan verkeer van links dat al op de rotonde rijdt."
            },
            {
                id: 9,
                text: "Wanneer gebruikt u deze knop?",
                image: "https://images.unsplash.com/photo-1551522435-6b3d5b651b51?w=400&h=300&fit=crop",
                imageAlt: "Dashboard knop voor mistlamp",
                answers: [
                    "Alleen bij dichte mist",
                    "Bij schemering",
                    "Als het regent",
                    "Altijd als ik rij"
                ],
                correct: 0,
                explanation: "Mistlampen gebruikt u alleen bij dichte mist of sneeuwval wanneer het zicht minder dan 200 meter is."
            },
            {
                id: 10,
                text: "Wat doet u bij deze weersomstandigheden?",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
                imageAlt: "Glad wegdek door regen",
                answers: [
                    "Verdubbel de volgafstand",
                    "Rij harder om sneller thuis te zijn",
                    "Gebruik geen verlichting",
                    "Rem harder dan normaal"
                ],
                correct: 0,
                explanation: "Bij glad wegdek verdubbelt u de volgafstand en rijdt u stapvoets om veilig te blijven."
            }
        ];

        // Generate 60 questions with variations
        const questions = [];
        for (let i = 0; i < 60; i++) {
            const base = visualQuestions[i % visualQuestions.length];
            questions.push({
                ...base,
                id: i + 1,
                text: base.text + ` (Vraag ${i + 1})`
            });
        }
        
        return questions;
    }

    generateRandomVisualQuestions() {
        return this.generateVisualQuestions(1); // For now, same as regular
    }

    generateAssistedVisualQuestions() {
        return this.generateVisualQuestions(1); // For now, same as regular
    }

    showQuestion() {
        if (this.currentQuestion >= this.questions.length) {
            this.showResults();
            return;
        }

        const question = this.questions[this.currentQuestion];
        
        // Update UI
        document.getElementById('questionCounter').textContent = 
            `${this.currentQuestion + 1}/${this.questions.length}`;
        document.getElementById('questionText').textContent = question.text;
        document.getElementById('currentQuestion').textContent = this.currentQuestion + 1;

        // Show image
        const imageContainer = document.getElementById('questionImage');
        const questionImg = document.getElementById('questionImg');
        
        if (question.image) {
            imageContainer.style.display = 'block';
            questionImg.src = question.image;
            questionImg.alt = question.imageAlt;
            questionImg.style.maxWidth = '100%';
            questionImg.style.height = 'auto';
            questionImg.style.borderRadius = '8px';
        } else {
            imageContainer.style.display = 'none';
        }

        // Show answers
        this.showAnswers(question.answers);
        
        // Update progress
        this.updateProgress();
        
        // Reset buttons
        document.getElementById('nextBtn').disabled = true;
    }

    showAnswers(answers) {
        const container = document.getElementById('answersContainer');
        container.innerHTML = '';

        answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer;
            button.onclick = () => this.selectAnswer(index);
            container.appendChild(button);
        });
    }

    selectAnswer(answerIndex) {
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach(btn => btn.classList.remove('selected'));
        buttons[answerIndex].classList.add('selected');

        this.answers[this.currentQuestion] = answerIndex;
        document.getElementById('nextBtn').disabled = false;
    }

    nextQuestion() {
        if (this.answers[this.currentQuestion] === undefined) {
            this.answers[this.currentQuestion] = -1; // Skipped
        }

        this.currentQuestion++;
        this.showQuestion();
    }

    skipQuestion() {
        this.answers[this.currentQuestion] = -1;
        this.nextQuestion();
    }

    showResults() {
        this.showScreen('resultScreen');
        
        // Calculate results
        let correct = 0;
        let wrong = 0;
        let skipped = 0;

        this.answers.forEach((answer, index) => {
            if (answer === -1) {
                skipped++;
            } else if (answer === this.questions[index].correct) {
                correct++;
            } else {
                wrong++;
            }
        });

        const total = this.questions.length;
        const score = Math.round((correct / total) * 100);

        // Update UI
        document.getElementById('scoreNumber').textContent = score;
        document.getElementById('correctCount').textContent = correct;
        document.getElementById('wrongCount').textContent = wrong;
        document.getElementById('skippedCount').textContent = skipped;

        // Update progress ring
        const circle = document.getElementById('progressCircle');
        const circumference = 2 * Math.PI * 15;
        const offset = circumference - (score / 100) * circumference;
        circle.style.strokeDashoffset = offset;

        // Save progress
        this.saveProgress(score, correct, wrong, skipped);
    }

    saveProgress(score, correct, wrong, skipped) {
        const progress = JSON.parse(localStorage.getItem('cbrProgress') || '{}');
        
        if (!progress.tests) progress.tests = [];
        
        progress.tests.push({
            date: new Date().toISOString(),
            mode: this.testMode,
            score: score,
            correct: correct,
            wrong: wrong,
            skipped: skipped
        });

        localStorage.setItem('cbrProgress', JSON.stringify(progress));
        this.updateStartScreenStats();
    }

    loadProgress() {
        const progress = JSON.parse(localStorage.getItem('cbrProgress') || '{}');
        
        if (progress.tests && progress.tests.length > 0) {
            this.updateStartScreenStats();
        }
    }

    updateStartScreenStats() {
        const progress = JSON.parse(localStorage.getItem('cbrProgress') || '{}');
        
        if (progress.tests && progress.tests.length > 0) {
            const totalQuestions = progress.tests.reduce((sum, test) => 
                sum + (test.correct + test.wrong + test.skipped), 0);
            
            document.getElementById('completedQuestions').textContent = totalQuestions;
        }
    }

    showProgress() {
        this.showScreen('progressScreen');
        this.updateProgressScreen();
    }

    updateProgressScreen() {
        const progress = JSON.parse(localStorage.getItem('cbrProgress') || '{}');
        
        if (progress.tests && progress.tests.length > 0) {
            const tests = progress.tests;
            const totalQuestions = tests.reduce((sum, test) => 
                sum + (test.correct + test.wrong + test.skipped), 0);
            
            const avgScore = Math.round(tests.reduce((sum, test) => 
                sum + test.score, 0) / tests.length);
            
            const lastScore = tests[tests.length - 1].score;

            document.getElementById('totalCompleted').textContent = 
                `${totalQuestions} / 600`;
            document.getElementById('avgScore').textContent = `${avgScore}%`;
            document.getElementById('lastScore').textContent = `${lastScore}%`;

            // Show history
            const historyList = document.getElementById('historyList');
            historyList.innerHTML = '';

            tests.slice(-5).reverse().forEach(test => {
                const item = document.createElement('div');
                item.className = 'history-item';
                
                const date = new Date(test.date).toLocaleDateString('nl-NL');
                
                item.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <div style="font-weight: 600;">${test.mode}</div>
                            <div style="font-size: 12px; color: #64748b;">${date}</div>
                        </div>
                        <div style="font-size: 20px; font-weight: 700; color: ${test.score >= 75 ? '#10b981' : '#ef4444'};">
                            ${test.score}%
                        </div>
                    </div>
                `;
                
                historyList.appendChild(item);
            });
        }
    }

    // Navigation helpers
    goBack() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.showQuestion();
        } else {
            this.showScreen('startScreen');
        }
    }

    goHome() {
        this.showScreen('startScreen');
    }

    restartTest() {
        this.startTest(this.testMode);
    }

    reviewMistakes() {
        // For now, just restart the test
        this.restartTest();
    }

    handleBackButton() {
        if (document.querySelector('.screen.active').id !== 'startScreen') {
            this.goHome();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        const circle = document.getElementById('progressCircle');
        const circumference = 2 * Math.PI * 15;
        const offset = circumference - (progress / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }
}

// Initialize app
const app = new CBRMobileApp();

// Global functions for HTML onclick
function startTest(mode) {
    app.startTest(mode);
}

function goBack() {
    app.goBack();
}

function goHome() {
    app.goHome();
}

function nextQuestion() {
    app.nextQuestion();
}

function skipQuestion() {
    app.skipQuestion();
}

function showProgress() {
    app.showProgress();
}

function restartTest() {
    app.restartTest();
}

function reviewMistakes() {
    app.reviewMistakes();
}

// Handle touch events for better mobile experience
document.addEventListener('DOMContentLoaded', () => {
    // Add touch feedback
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('touchstart', () => {
            button.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Add image loading error handling
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.style.display = 'none';
            console.log('Image failed to load:', e.target.src);
        }
    }, true);
});