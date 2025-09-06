# CBR Theorie Examen - 300 Vragen

Een uitgebreide theorie examen training met 300 vragen verdeeld over 5 testen van 60 vragen elk. Deze applicatie helpt je optimaal voor te bereiden op het CBR theorie examen met gedetailleerde uitleg bij foutieve antwoorden.

## 🚀 Snel Starten

### Optie 1: Eenvoudig starten (Aanbevolen)
```bash
# 1. Installeer Node.js (als je dit nog niet hebt)
# Download van: https://nodejs.org/

# 2. Navigeer naar de project folder
cd car-theory-exam

# 3. Installeer dependencies
npm install

# 4. Start de applicatie
npm start

# 5. Open je browser en ga naar:
http://localhost:3000
```

### Optie 2: Via npx (Zonder installatie)
```bash
# 1. Navigeer naar de project folder
cd car-theory-exam

# 2. Start direct met npx
npx node server.js

# 3. Open je browser en ga naar:
http://localhost:3000
```

### Optie 3: Via Python (Alternatief)
```bash
# Als je Python hebt geïnstalleerd
python -m http.server 3000

# Open je browser en ga naar:
http://localhost:3000
```

## 📋 Features

- **300 vragen** verdeeld over 5 testen van 60 vragen
- **Realistische examenervaring** met tijdsdruk
- **Gedetailleerde uitleg** bij foutieve antwoorden met foto's en video's
- **Voortgang bijhouden** met persoonlijke statistieken
- **Responsive design** voor desktop, tablet en mobiel
- **Offline werking** na eerste keer laden

## 🎯 Testen Overzicht

| Test | Onderwerp | Aantal Vragen |
|------|-----------|---------------|
| Test 1 | Verkeersregels en wegmarkeringen | 60 |
| Test 2 | Voertuigonderhoud en veiligheid | 60 |
| Test 3 | Rijtechniek en besturing | 60 |
| Test 4 | Verkeerssituaties en voorrang | 60 |
| Test 5 | Noodsituaties en weersomstandigheden | 60 |

## 📚 Leerpad Voor 4 Dagen

### Dag 1: Fundamenten
- **Test 1**: Verkeersregels en wegmarkeringen
- **Test 2**: Voertuigonderhoud en veiligheid
- Herhaal foutieve vragen

### Dag 2: Techniek
- **Test 3**: Rijtechniek en besturing
- **Test 4**: Verkeerssituaties en voorrang
- Oefen specifieke fouten

### Dag 3: Situaties
- **Test 5**: Noodsituaties en weersomstandigheden
- Alle testen herhalen met focus op fouten
- Bekijk alle uitleg video's

### Dag 4: Examen Dag
- Herhaal alle testen nogmaals
- Focus op 75% slagingspercentage
- Rust en vertrouwen

## 📊 Succes Tips

1. **75% is het doel**: Probeer elk test minstens 75% te behalen
2. **Herhaal fouten**: Focus op foutieve antwoorden met gedetailleerde uitleg
3. **Gebruik video's**: Bekijk alle instructie video's bij foutieve antwoorden
4. **Tijdsdruk**: Train met tijdsdruk (30 seconden per vraag)
5. **Rust**: Neem tussen pauzes tijdens lange sessies

## 🔧 Technische Details

### Vereisten
- **Node.js** (versie 14 of hoger)
- **Web browser** (Chrome, Firefox, Safari, Edge)

### Bestandsstructuur
```
car-theory-exam/
├── server.js          # Express server
├── package.json       # Dependencies
├── data/
│   ├── test1.json     # 60 vragen verkeersregels
│   ├── test2.json     # 60 vragen onderhoud
│   ├── test3.json     # 60 vragen rijtechniek
│   ├── test4.json     # 60 vragen verkeerssituaties
│   └── test5.json     # 60 vragen noodsituaties
├── public/
│   ├── index.html     # Hoofdpagina
│   ├── styles.css     # Styling
│   └── app.js         # Frontend logica
└── README.md          # Deze file
```

### API Endpoints
- `GET /` - Hoofdpagina
- `GET /api/questions/:testId` - Haal vragen op voor specifieke test
- `POST /api/submit-test` - Verzend test resultaten

## 🎓 Succes Garantie

Door deze 300 vragen te oefenen met de gedetailleerde uitleg bij foutieve antwoorden, ben je optimaal voorbereid op het CBR theorie examen. De combinatie van:

- **Realistische examenvragen**
- **Gedetailleerde uitleg met foto's**
- **Instructie video's**
- **Persoonlijke voortgang**
- **Herhaal mogelijkheden**

Zorgt ervoor dat je het echte examen met vertrouwen tegemoet gaat!

## 📞 Support

Bij vragen of problemen:
1. Controleer of Node.js correct is geïnstalleerd
2. Controleer of alle dependencies zijn geïnstalleerd
3. Herstart de server indien nodig

Veel succes met je examen! 🚗💨