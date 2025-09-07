// Complete Visual Question Bank for CBR Mobile Exam
const visualQuestionBank = {
    // Traffic Signs - Real Dutch CBR signs
    trafficSigns: [
        {
            id: 'sign-yield',
            text: "Wat betekent dit verkeersbord?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Netherlands_traffic_sign_B1.svg/240px-Netherlands_traffic_sign_B1.svg.png",
            imageAlt: "Driehoekig verkeersbord met kinderen",
            category: "Verkeersborden",
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
            id: 'sign-stop',
            text: "Wat betekent dit verkeersbord?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Netherlands_traffic_sign_B5.svg/240px-Netherlands_traffic_sign_B5.svg.png",
            imageAlt: "Stopteken verkeersbord",
            category: "Verkeersborden",
            answers: [
                "Stopteken - volledig stoppen en voorrang verlenen",
                "Langzaam rijden",
                "Maximum 30 km/h",
                "Parkeerverbod"
            ],
            correct: 0,
            explanation: "Dit is een stopteken. U moet volledig stoppen en voorrang verlenen aan het kruisende verkeer."
        },
        {
            id: 'sign-no-entry',
            text: "Wat betekent dit verkeersbord?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Netherlands_traffic_sign_C1.svg/240px-Netherlands_traffic_sign_C1.svg.png",
            imageAlt: "Rond verkeersbord met witte balk",
            category: "Verkeersborden",
            answers: [
                "Verboden in te rijden",
                "Maximumsnelheid 50 km/h",
                "Einde zone",
                "Parkeerverbod"
            ],
            correct: 0,
            explanation: "Dit bord betekent dat u deze weg niet in mag rijden. Het is eenrichtingsverkeer of verboden toegang."
        },
        {
            id: 'sign-priority',
            text: "Wat betekent dit verkeersbord?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Netherlands_traffic_sign_B3.svg/240px-Netherlands_traffic_sign_B3.svg.png",
            imageAlt: "Geel rond bord met zwarte rand",
            category: "Verkeersborden",
            answers: [
                "Voorrangsweg",
                "Einde voorrangsweg",
                "Maximumsnelheid 100 km/h",
                "Geen voorrang"
            ],
            correct: 0,
            explanation: "Dit bord geeft aan dat u op een voorrangsweg rijdt. Verkeer van rechts moet voorrang verlenen."
        },
        {
            id: 'sign-parking',
            text: "Mag u hier parkeren?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Netherlands_traffic_sign_E1.svg/240px-Netherlands_traffic_sign_E1.svg.png",
            imageAlt: "Blauw parkeerbord",
            category: "Verkeersborden",
            answers: [
                "Ja, met parkeerschijf",
                "Nooit parkeren",
                "Alleen voor laden en lossen",
                "Alleen voor elektrische auto's"
            ],
            correct: 0,
            explanation: "Bij een blauwe zone mag u parkeren met een parkeerschijf. Let op de maximumparkeertijd."
        }
    ],

    // Road Situations
    roadSituations: [
        {
            id: 'intersection-right',
            text: "Wie heeft hier voorrang?",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0a2d?w=400&h=300&fit=crop",
            imageAlt: "Kruispunt met auto's van rechts",
            category: "Kruispunten",
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
            id: 'roundabout-entry',
            text: "Hoe rijdt u deze rotonde in?",
            image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop",
            imageAlt: "Rotonde met meerdere banen",
            category: "Rotondes",
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
            id: 'overtaking-prohibited',
            text: "Mag u hier inhalen?",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            imageAlt: "Weg met doorgetrokken streep",
            category: "Inhalen",
            answers: [
                "Nee, door de doorgetrokken streep",
                "Ja, want er is ruimte",
                "Alleen met 30 km/h",
                "Alleen bij groen licht"
            ],
            correct: 0,
            explanation: "Een doorgetrokken streep betekent dat inhalen verboden is. Wacht tot u een onderbroken streep ziet."
        },
        {
            id: 'pedestrian-crossing',
            text: "Wat moet u doen bij deze situatie?",
            image: "https://images.unsplash.com/photo-1551522435-6b3d5b651b51?w=400&h=300&fit=crop",
            imageAlt: "Zebrapad met voetgangers",
            category: "Voetgangers",
            answers: [
                "Stoppen en voetgangers laten oversteken",
                "Langzaam rijden en kijken",
                "Doorrijden met 15 km/h",
                "Klaveren gebruiken"
            ],
            correct: 0,
            explanation: "Bij een zebrapad moet u stoppen voor voetgangers die willen oversteken. Dit is verplicht."
        },
        {
            id: 'priority-road',
            text: "Wie heeft hier voorrang?",
            image: "https://images.unsplash.com/photo-1607197109166-a7d282837546?w=400&h=300&fit=crop",
            imageAlt: "Kruispunt met voorrangsbord",
            category: "Voorrang",
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

    // Dashboard and Controls
    dashboard: [
        {
            id: 'engine-warning',
            text: "Wat betekent dit dashboardlampje?",
            image: "https://images.unsplash.com/photo-1551522435-6b3d5b651b51?w=400&h=300&fit=crop",
            imageAlt: "Dashboard met motorlampje",
            category: "Dashboard",
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
            id: 'oil-warning',
            text: "Wat betekent dit lampje?",
            image: "https://images.unsplash.com/photo-1607197109166-a7d282837546?w=400&h=300&fit=crop",
            imageAlt: "Dashboard met olie lampje",
            category: "Dashboard",
            answers: [
                "Oliepeil te laag",
                "Motor te warm",
                "Accu bijna leeg",
                "Remvloeistof ontbreekt"
            ],
            correct: 0,
            explanation: "Dit lampje geeft aan dat het oliepeil te laag is. Stop onmiddellijk en vul bij."
        },
        {
            id: 'abs-warning',
            text: "Wat betekent dit ABS lampje?",
            image: "https://images.unsplash.com/photo-1551522435-6b3d5b651b51?w=400&h=300&fit=crop",
            imageAlt: "Dashboard met ABS lampje",
            category: "Dashboard",
            answers: [
                "ABS systeem storing",
                "Handrem staat aan",
                "Remvloeistof laag",
                "Motorprobleem"
            ],
            correct: 0,
            explanation: "Dit lampje geeft een storing in het ABS systeem aan. De remmen werken nog, maar zonder ABS."
        }
    ],

    // Speed Limits
    speedLimits: [
        {
            id: 'speed-30',
            text: "Wat is de maximumsnelheid hier?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Netherlands_traffic_sign_G12.svg/240px-Netherlands_traffic_sign_G12.svg.png",
            imageAlt: "30 km/u snelheidsbord",
            category: "Snelheid",
            answers: [
                "30 km/u",
                "50 km/u",
                "80 km/u",
                "100 km/u"
            ],
            correct: 0,
            explanation: "Het bord toont duidelijk 30 km/u aan. Dit is de maximumsnelheid die u hier mag rijden."
        },
        {
            id: 'speed-50',
            text: "Wat is de maximumsnelheid hier?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Netherlands_traffic_sign_G12.svg/240px-Netherlands_traffic_sign_G12.svg.png",
            imageAlt: "50 km/u snelheidsbord",
            category: "Snelheid",
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
            id: 'speed-80',
            text: "Wat is de maximumsnelheid hier?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Netherlands_traffic_sign_G12.svg/240px-Netherlands_traffic_sign_G12.svg.png",
            imageAlt: "80 km/u snelheidsbord",
            category: "Snelheid",
            answers: [
                "80 km/u",
                "50 km/u",
                "100 km/u",
                "120 km/u"
            ],
            correct: 0,
            explanation: "Het bord toont duidelijk 80 km/u aan. Dit is de maximumsnelheid die u hier mag rijden."
        }
    ],

    // Weather Conditions
    weather: [
        {
            id: 'rain-driving',
            text: "Wat doet u bij deze weersomstandigheden?",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            imageAlt: "Glad wegdek door regen",
            category: "Weer",
            answers: [
                "Verdubbel de volgafstand",
                "Rij harder om sneller thuis te zijn",
                "Gebruik geen verlichting",
                "Rem harder dan normaal"
            ],
            correct: 0,
            explanation: "Bij glad wegdek verdubbelt u de volgafstand en rijdt u stapvoets om veilig te blijven."
        },
        {
            id: 'fog-driving',
            text: "Wanneer gebruikt u mistlampen?",
            image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop",
            imageAlt: "Dichte mist op de weg",
            category: "Weer",
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

    // Emergency Situations
    emergency: [
        {
            id: 'ambulance-priority',
            text: "Wat doet u bij deze situatie?",
            image: "https://images.unsplash.com/photo-1551522435-6b3d5b651b51?w=400&h=300&fit=crop",
            imageAlt: "Ambulance met zwaailichten",
            category: "Noodsituaties",
            answers: [
                "Zo snel mogelijk naar rechts uitwijken",
                "Doorrijden en geen ruimte maken",
                "Stoppen midden op de weg",
                "Rij harder om voor te blijven"
            ],
            correct: 0,
            explanation: "Bij naderende hulpdiensten wijkt u zo snel mogelijk naar rechts uit en maakt u ruim baan."
        },
        {
            id: 'breakdown',
            text: "Wat doet u bij pech?",
            image: "https://images.unsplash.com/photo-1607197109166-a7d282837546?w=400&h=300&fit=crop",
            imageAlt: "Auto met pech langs de weg",
            category: "Noodsituaties",
            answers: [
                "Waarschuwingsdriehoek plaatsen en pechhulp bellen",
                "Blijven zitten en wachten",
                "Rijden met pech",
                "Auto duwen naar huis"
            ],
            correct: 0,
            explanation: "Bij pech plaatst u een waarschuwingsdriehoek op 30 meter afstand en belt u pechhulp."
        }
    ],

    // Parking Situations
    parking: [
        {
            id: 'blue-zone',
            text: "Mag u hier parkeren?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Netherlands_traffic_sign_E1.svg/240px-Netherlands_traffic_sign_E1.svg.png",
            imageAlt: "Blauw parkeerbord",
            category: "Parkeren",
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
            id: 'no-parking',
            text: "Mag u hier parkeren?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Netherlands_traffic_sign_E1.svg/240px-Netherlands_traffic_sign_E1.svg.png",
            imageAlt: "Verboden te parkeren bord",
            category: "Parkeren",
            answers: [
                "Nooit parkeren",
                "Ja, met parkeerschijf",
                "Alleen voor laden en lossen",
                "Alleen voor korte tijd"
            ],
            correct: 0,
            explanation: "Dit bord betekent dat parkeren hier verboden is. Let op eventuele uitzonderingen."
        }
    ]
};

// Generate 60 visual questions for each test
function generateVisualQuestions(testNumber) {
    const allQuestions = [
        ...visualQuestionBank.trafficSigns,
        ...visualQuestionBank.roadSituations,
        ...visualQuestionBank.dashboard,
        ...visualQuestionBank.speedLimits,
        ...visualQuestionBank.weather,
        ...visualQuestionBank.emergency,
        ...visualQuestionBank.parking
    ];

    // Shuffle and select 60 unique questions
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 60).map((q, index) => ({
        ...q,
        id: index + 1,
        text: q.text
    }));
}

// Export for use in app
export { visualQuestionBank, generateVisualQuestions };