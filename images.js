// Visual Question Bank for CBR Mobile Exam
const visualQuestions = {
    // Traffic Signs
    trafficSigns: [
        {
            id: 'sign-001',
            text: "Wat betekent dit verkeersbord?",
            image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
            imageAlt: "Verkeersbord met driehoekige vorm",
            answers: [
                "Waarschuwing voor overstekende kinderen",
                "Verbod voor fietsers",
                "Voorgang verlenen",
                "Maximumsnelheid 30 km/h"
            ],
            correct: 0,
            explanation: "Dit bord waarschuwt voor een speelplaats waar kinderen kunnen oversteken. Let extra goed op en verminder snelheid."
        },
        {
            id: 'sign-002',
            text: "Wat moet u doen bij dit bord?",
            image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop",
            imageAlt: "Stopbord met driehoekig bord erboven",
            answers: [
                "Stoppen en voorrang verlenen",
                "Langzaam rijden",
                "Maximum 30 km/h",
                "Verboden in te rijden"
            ],
            correct: 0,
            explanation: "Dit is een stopteken. U moet volledig stoppen en voorrang verlenen aan het kruisende verkeer."
        }
    ],

    // Road Situations
    roadSituations: [
        {
            id: 'road-001',
            text: "Wie heeft hier voorrang?",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0a2d?w=400&h=300&fit=crop",
            imageAlt: "Kruispunt met auto's van rechts",
            answers: [
                "De auto van rechts heeft voorrang",
                "Ik heb voorrang doordat ik rechtdoor rij",
                "De auto die het kruispunt als eerste bereikt",
                "De snelste auto heeft voorrang"
            ],
            correct: 0,
            explanation: "Bij kruispunten geldt het recht van rechts. De auto van rechts heeft hier voorrang."
        },
        {
            id: 'road-002',
            text: "Wat is de maximumsnelheid hier?",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            imageAlt: "Woonerf met speelplaats",
            answers: [
                "15 km/h",
                "30 km/h",
                "50 km/h",
                "Walking speed"
            ],
            correct: 0,
            explanation: "Op een woonerf geldt een maximumsnelheid van 15 km/h. Dit is te voet stapvoets."
        }
    ],

    // Dashboard and Controls
    dashboard: [
        {
            id: 'dash-001',
            text: "Wat betekent dit waarschuwingslampje?",
            image: "https://images.unsplash.com/photo-1607197109166-a7d282837546?w=400&h=300&fit=crop",
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
            id: 'dash-002',
            text: "Wanneer gebruikt u deze knop?",
            image: "https://images.unsplash.com/photo-1551522435-6b3d5b651b51?w=400&h=300&fit=crop",
            imageAlt: "Dashboard met mistlamp knop",
            answers: [
                "Alleen bij dichte mist",
                "Bij schemering",
                "Als het regent",
                "Altijd als ik rij"
            ],
            correct: 0,
            explanation: "Mistlampen gebruikt u alleen bij dichte mist of sneeuwval wanneer het zicht minder dan 200 meter is."
        }
    ],

    // Traffic Lights
    trafficLights: [
        {
            id: 'light-001',
            text: "Wat betekent deze verkeerslicht combinatie?",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0a2d?w=400&h=300&fit=crop",
            imageAlt: "Verkeerslicht met groen pijl naar rechts",
            answers: [
                "Rechtsaf mag, rechtdoor moet wachten",
                "Alle richtingen mogen doorrijden",
                "Alleen rechtdoor mag",
                "Stoppen verplicht"
            ],
            correct: 0,
            explanation: "Groen pijl naar rechts betekent dat u rechtsaf mag slaan, maar voor rechtdoor moet u wachten."
        }
    ],

    // Road Markings
    roadMarkings: [
        {
            id: 'mark-001',
            text: "Wat betekent deze wegmarkering?",
            image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop",
            imageAlt: "Doorgetrokken witte streep",
            answers: [
                "Verboden te inhalen",
                "Rijbaan scheiding",
                "Fietsstrook",
                "Parkeerverbod"
            ],
            correct: 0,
            explanation: "Een doorgetrokken witte streep langs de weg betekent dat inhalen verboden is wanneer deze aan uw kant ligt."
        }
    ],

    // Parking Situations
    parking: [
        {
            id: 'park-001',
            text: "Mag u hier parkeren?",
            image: "https://images.unsplash.com/photo-1607197109166-a7d282837546?w=400&h=300&fit=crop",
            imageAlt: "Parkeerplaats met blauwe zone bord",
            answers: [
                "Ja, met parkeerschijf",
                "Nee, nooit parkeren",
                "Alleen voor laden en lossen",
                "Alleen voor elektrische auto's"
            ],
            correct: 0,
            explanation: "Bij een blauwe zone mag u parkeren met een parkeerschijf. Let op de maximumparkeertijd."
        }
    ],

    // Priority Situations
    priority: [
        {
            id: 'prio-001',
            text: "Wie heeft hier voorrang?",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            imageAlt: "Kruispunt met voorrangsbord",
            answers: [
                "De auto op de hoofdweg",
                "De auto van rechts",
                "De snelste auto",
                "De grootste auto"
            ],
            correct: 0,
            explanation: "Dit bord geeft aan dat u op een voorrangsweg rijdt. Verkeer van rechts moet voorrang verlenen."
        }
    ],

    // Weather Conditions
    weather: [
        {
            id: 'weather-001',
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
    ],

    // Overtaking Situations
    overtaking: [
        {
            id: 'overtake-001',
            text: "Mag u hier inhalen?",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0a2d?w=400&h=300&fit=crop",
            imageAlt: "Weg met doorgetrokken streep",
            answers: [
                "Nee, door de doorgetrokken streep",
                "Ja, want er is ruimte",
                "Alleen met 30 km/h",
                "Alleen bij groen licht"
            ],
            correct: 0,
            explanation: "Een doorgetrokken streep betekent dat inhalen verboden is. Wacht tot u een onderbroken streep ziet."
        }
    ],

    // Roundabouts
    roundabouts: [
        {
            id: 'round-001',
            text: "Hoe rijdt u hier door de rotonde?",
            image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop",
            imageAlt: "Rotonde met meerdere banen",
            answers: [
                "Rechts aanhouden en voorrang verlenen",
                "Links aanhouden en doorrijden",
                "Rechtdoor door het midden",
                "Stoppen en wachten"
            ],
            correct: 0,
            explanation: "Op een rotonde houdt u rechts aan en verleent u voorrang aan verkeer van links dat al op de rotonde rijdt."
        }
    ],

    // Speed Situations
    speed: [
        {
            id: 'speed-001',
            text: "Wat is hier de maximumsnelheid?",
            image: "https://images.unsplash.com/photo-1607197109166-a7d282837546?w=400&h=300&fit=crop",
            imageAlt: "Weg met 50 km/u bord",
            answers: [
                "50 km/u",
                "30 km/u",
                "80 km/u",
                "100 km/u"
            ],
            correct: 0,
            explanation: "Het bord toont duidelijk 50 km/u aan. Dit is de maximumsnelheid die u hier mag rijden."
        }
    ],

    // Emergency Situations
    emergency: [
        {
            id: 'emergency-001',
            text: "Wat doet u bij deze situatie?",
            image: "https://images.unsplash.com/photo-1551522435-6b3d5b651b51?w=400&h=300&fit=crop",
            imageAlt: "Ambulance met zwaailichten",
            answers: [
                "Zo snel mogelijk naar rechts uitwijken",
                "Doorrijden en geen ruimte maken",
                "Stoppen midden op de weg",
                "Rij harder om voor te blijven"
            ],
            correct: 0,
            explanation: "Bij naderende hulpdiensten wijkt u zo snel mogelijk naar rechts uit en maakt u ruim baan."
        }
    ]
};

// Image URL mapping for real CBR exam images
const imageUrls = {
    // Traffic signs
    'yield-sign': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Netherlands_traffic_sign_B1.svg/240px-Netherlands_traffic_sign_B1.svg.png',
    'stop-sign': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Netherlands_traffic_sign_B5.svg/240px-Netherlands_traffic_sign_B5.svg.png',
    'no-entry': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Netherlands_traffic_sign_C1.svg/240px-Netherlands_traffic_sign_C1.svg.png',
    
    // Road situations
    'intersection': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Netherlands_traffic_sign_B6.svg/240px-Netherlands_traffic_sign_B6.svg.png',
    'roundabout': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Netherlands_traffic_sign_G12.svg/240px-Netherlands_traffic_sign_G12.svg.png',
    
    // Road markings
    'solid-line': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Netherlands_road_marking_line.svg/240px-Netherlands_road_marking_line.svg.png',
    
    // Priority signs
    'priority-road': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Netherlands_traffic_sign_B3.svg/240px-Netherlands_traffic_sign_B3.svg.png'
};

// Function to get appropriate image for question type
function getQuestionImage(questionType, situation) {
    // For now, return placeholder URLs
    // In production, these would be actual CBR exam images
    const placeholders = {
        trafficSign: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop',
        roadSituation: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0a2d?w=400&h=300&fit=crop',
        dashboard: 'https://images.unsplash.com/photo-1551522435-6b3d5b651b51?w=400&h=300&fit=crop',
        carControls: 'https://images.unsplash.com/photo-1607197109166-a7d282837546?w=400&h=300&fit=crop',
        intersection: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    };
    
    return placeholders[situation] || placeholders.roadSituation;
}

export { visualQuestions, imageUrls, getQuestionImage };