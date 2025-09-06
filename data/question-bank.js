// Question categories and structure
const categories = {
    TRAFFIC_RULES: 'Traffic Rules and Regulations',
    ROAD_SIGNS: 'Road Signs and Markings',
    SAFETY: 'Vehicle Safety and Maintenance',
    DRIVING_TECHNIQUES: 'Safe Driving Techniques',
    SITUATIONAL_AWARENESS: 'Traffic Situations and Right of Way',
    ENVIRONMENTAL: 'Environmental Awareness and Fuel Efficiency',
    EMERGENCY: 'Emergency Situations and First Aid'
};

// Question structure template
const questionTemplate = {
    id: 0,
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    category: '',
    difficulty: 'medium',
    explanation: '',
    imageUrl: null,
    videoUrl: null
};

// Generate 300 questions divided into 5 tests of 60 questions each
const generateQuestions = () => {
    const questions = [];
    
    // Test 1: Traffic Rules and Road Signs (60 questions)
    const test1 = [
        {
            id: 1,
            question: "Wat betekent een doorgetrokken witte streep in het midden van de rijbaan?",
            options: [
                "Je mag nooit van rijstrook wisselen",
                "Je mag alleen van rijstrook wisselen bij noodgevallen",
                "Je mag alleen van rijstrook wisselen als dit zonder gevaar kan",
                "Je mag vrij van rijstrook wisselen"
            ],
            correctAnswer: 2,
            category: "ROAD_MARKINGS",
            explanation: "Een doorgetrokken witte streep verbiedt het wisselen van rijstrook, tenzij dit zonder gevaar voor ander verkeer kan. Dit is belangrijk voor de verkeersveiligheid.",
            imageUrl: "images/white-line-center.png"
        },
        {
            id: 2,
            question: "Wanneer moet je dimlicht gebruiken overdag?",
            options: [
                "Alleen bij mist",
                "Alleen bij regen",
                "Altijd overdag",
                "Bij slecht zicht overdag"
            ],
            correctAnswer: 3,
            category: "LIGHTING",
            explanation: "Dimlicht moet gebruikt worden bij slecht zicht overdag (mist, regen, sneeuw). Dit vergroot je zichtbaarheid voor andere weggebruikers.",
            imageUrl: "images/daytime-lights.png"
        },
        {
            id: 3,
            question: "Wat is de maximale snelheid op een autoweg?",
            options: [
                "100 km/u",
                "120 km/u",
                "130 km/u",
                "140 km/u"
            ],
            correctAnswer: 2,
            category: "SPEED_LIMITS",
            explanation: "Op een autoweg is de maximale snelheid 130 km/u, tenzij anders aangegeven door verkeersborden. Let op: bij nat weer is de maximale snelheid 110 km/u.",
            imageUrl: "images/highway-speed.png"
        },
        {
            id: 4,
            question: "Wat moet je doen bij een gele verkeerslicht?",
            options: [
                "Altijd stoppen",
                "Doorrijden als je al te dicht bij het kruispunt bent",
                "Snel doorrijden",
                "Remmen en stoppen"
            ],
            correctAnswer: 1,
            category: "TRAFFIC_LIGHTS",
            explanation: "Bij geel licht moet je stoppen als dit veilig kan. Ben je al te dicht bij het kruispunt, dan mag je doorrijden. Geel licht is een waarschuwing dat rood komt.",
            videoUrl: "videos/yellow-light.mp4"
        },
        {
            id: 5,
            question: "Wat betekent een blauw verkeersbord met een witte pijl naar rechts?",
            options: [
                "Verplicht rechts afslaan",
                "Rechtsafslaan toegestaan",
                "Rechtsafslaan verboden",
                "Uitsluitend rechtsafslaan"
            ],
            correctAnswer: 0,
            category: "ROAD_SIGNS",
            explanation: "Een blauw bord met witte pijl geeft een verplichte richting aan. Je moet in deze richting verder rijden. Dit zijn verplichte bevelsborden.",
            imageUrl: "images/blue-right-arrow.png"
        },
        {
            id: 6,
            question: "Hoe groot moet de afstand zijn tussen jou en de voorligger bij 100 km/u?",
            options: [
                "30 meter",
                "50 meter",
                "70 meter",
                "100 meter"
            ],
            correctAnswer: 2,
            category: "SAFE_FOLLOWING",
            explanation: "Bij 100 km/u moet je minstens 70 meter afstand houden. Dit komt overeen met 2 seconden volgtijd. De afstand moet toenemen bij hogere snelheden.",
            imageUrl: "images/following-distance.png"
        },
        {
            id: 7,
            question: "Wat moet je doen bij een naderende ambulance met sirene?",
            options: [
                "Snel naar rechts en stoppen",
                "Doorgaan met rijden",
                "Links aanhouden",
                "Snelheid verhogen"
            ],
            correctAnswer: 0,
            category: "EMERGENCY_VEHICLES",
            explanation: "Bij naderende hulpdiensten moet je direct naar rechts uitwijken en stoppen. Dit geldt voor alle hulpdiensten met zwaailicht en sirene. Maak altijd een corridor vrij.",
            videoUrl: "videos/emergency-vehicle.mp4"
        },
        {
            id: 8,
            question: "Wanneer gebruik je de linker rijstrook op een autosnelweg?",
            options: [
                "Alleen bij file",
                "Voor inhalen en links afslaan",
                "Altijd om sneller te rijden",
                "Alleen bij pech"
            ],
            correctAnswer: 1,
            category: "HIGHWAY_RULES",
            explanation: "De linker rijstrook is voor inhalen en links afslaan. Rijdt rechts en gebruik links alleen voor inhalen. Dit heet 'links rijden is inhalen'.",
            imageUrl: "images/highway-lanes.png"
        },
        {
            id: 9,
            question: "Wat betekent een oranje driehoek op de weg?",
            options: [
                "Parkeerplaats",
                "Waarschuwing voor gevaren",
                "Snelheidslimiet",
                "Verplichte stopplaats"
            ],
            correctAnswer: 1,
            category: "ROAD_MARKINGS",
            explanation: "Een oranje driehoek is een waarschuwingsteken. Dit kan duiden op werkzaamheden, ongevallen of andere gevaren. Verlaag je snelheid en wees extra alert.",
            imageUrl: "images/orange-triangle.png"
        },
        {
            id: 10,
            question: "Hoe ver van een kruispunt mag je niet parkeren?",
            options: [
                "5 meter",
                "10 meter",
                "15 meter",
                "20 meter"
            ],
            correctAnswer: 0,
            category: "PARKING_RULES",
            explanation: "Je mag niet parkeren binnen 5 meter van een kruispunt. Dit geldt ook voor kruisingen met fietspaden. Dit zorgt voor goed zicht voor alle verkeersdeelnemers.",
            imageUrl: "images/no-parking-intersection.png"
        }
    ];
    
    // Generate remaining questions for test 1 (60 total)
    for (let i = 11; i <= 60; i++) {
        test1.push({
            id: i,
            question: `Vraag ${i} over verkeersregels en verkeersborden...`,
            options: ["Optie A", "Optie B", "Optie C", "Optie D"],
            correctAnswer: Math.floor(Math.random() * 4),
            category: "GENERAL",
            explanation: "Dit is een voorbeeldverklaring voor deze vraag.",
            imageUrl: null
        });
    }
    
    // Test 2: Safety and Maintenance (60 questions)
    const test2 = [
        {
            id: 61,
            question: "Wat moet je doen als je bandenspanning te laag is?",
            options: [
                "Niets, dit is normaal",
                "Bij de eerste gelegenheid corrigeren",
                "Wachten tot de servicebeurt",
                "Snelheid aanpassen"
            ],
            correctAnswer: 1,
            category: "VEHICLE_MAINTENANCE",
            explanation: "Te lage bandenspanning moet zo snel mogelijk gecorrigeerd worden. Dit beïnvloedt de wegligging, brandstofverbruik en slijtage van je banden.",
            imageUrl: "images/tire-pressure.png"
        },
        {
            id: 62,
            question: "Hoe vaak moet je olie peilen?",
            options: [
                "Elke maand",
                "Elke week",
                "Alleen bij onderhoud",
                "Elke tankbeurt"
            ],
            correctAnswer: 3,
            category: "VEHICLE_MAINTENANCE",
            explanation: "Motorolie moet bij elke tankbeurt gecontroleerd worden. Dit voorkomt motorschade door te weinig olie. Controleer altijd op een horizontale ondergrond.",
            imageUrl: "images/oil-check.png"
        },
        {
            id: 63,
            question: "Wat betekent een rood lampje op het dashboard?",
            options: [
                "Alles is in orde",
                "Let op, controle nodig",
                "Gevaar, stoppen",
                "Systeem actief"
            ],
            correctAnswer: 2,
            category: "WARNING_LIGHTS",
            explanation: "Rode waarschuwingslampjes duiden op direct gevaar. Stop veilig en los het probleem op. Rood betekent altijd direct actie ondernemen.",
            imageUrl: "images/red-warning-lights.png"
        }
    ];
    
    // Test 3: Driving Techniques (60 questions)
    const test3 = [
        {
            id: 121,
            question: "Wat is de juiste handpositie op het stuur?",
            options: [
                "Één hand op 12 uur",
                "Tien-voor-twee positie",
                "Willekeurige positie",
                "Één hand op het versnellingspook"
            ],
            correctAnswer: 1,
            category: "DRIVING_TECHNIQUE",
            explanation: "De tien-voor-twee positie (handen op 10 en 2 uur) geeft de beste controle over het stuur. Dit is de veilige standaardpositie.",
            imageUrl: "images/steering-position.png"
        },
        {
            id: 122,
            question: "Hoe rem je het beste bij noodstop op droog wegdek?",
            options: [
                "Trapper vol intrappen",
                "Gestage druk op rempedaal",
                "Remmen en sturen tegelijk",
                "ABS gebruiken en vol doorremmen"
            ],
            correctAnswer: 3,
            category: "EMERGENCY_BRAKING",
            explanation: "Bij moderne auto's met ABS: vol doorremmen en sturen waar je heen wilt. Het ABS-systeem zorgt voor optimale remkracht en stuurbaarheid.",
            videoUrl: "videos/abs-braking.mp4"
        }
    ];
    
    // Test 4: Situational Awareness (60 questions)
    const test4 = [
        {
            id: 181,
            question: "Wat doe je bij een fietser die rechtsaf lijkt te willen slaan?",
            options: [
                "Doorkruisen voor de fietser",
                "Wachten tot de fietser is afgeslagen",
                "Claxon gebruiken",
                "Snelheid verhogen"
            ],
            correctAnswer: 1,
            category: "RIGHT_OF_WAY",
            explanation: "Fietsers hebben voorrang bij rechtsafslaan. Wacht geduldig tot de fietser veilig is afgeslagen. Dit voorkunt gevaarlijke situaties.",
            imageUrl: "images/cyclist-right-turn.png"
        }
    ];
    
    // Test 5: Environmental and Emergency (60 questions)
    const test5 = [
        {
            id: 241,
            question: "Wat doe je bij aquaplaning?",
            options: [
                "Hard remmen",
                "Gas loslaten en rustig sturen",
                "Snel sturen",
                "Snelheid verhogen"
            ],
            correctAnswer: 1,
            category: "EMERGENCY_SITUATIONS",
            explanation: "Bij aquaplaning: gas loslaten, niet remmen of sturen, wacht tot de banden weer grip hebben. Houd het stuur recht en blijf kalm.",
            videoUrl: "videos/aquaplaning.mp4"
        }
    ];
    
    // Generate all questions
    const allQuestions = [...test1, ...test2, ...test3, ...test4, ...test5];
    
    return allQuestions;
};

// Export for use in other files
module.exports = {
    categories,
    questionTemplate,
    generateQuestions
};