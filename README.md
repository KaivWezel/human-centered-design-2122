# Trainingsoverzich Larissa Klaassen

## Contents

- User scenario
- Larissa Klaassen
- Eerste meeting
  - Concept
  - Resultaten
- Tweede meeting
  - Concept
  - Resultaten
- Laatste meeting
  - Concept
  - Resultaten
- Exclusive design

## User scenario

Als topsporter wil ik snel mijn agenda op de korte termijn kunnen raadplegen zodat ik weet wat mij te wachten staat voor de training.

## Larissa Klaassen

Larissa is topsporter en heeft onlangs nog goud gewonnen op de paralympische spelen in Tokyo op het onderdeel baanwielrennen. Als topsporter heeft ze een druk trainigsschema en is ze bijna elke dag wel aan het trainen. De diversiteit in trainingen en oefeningen is zo groot dat een agenda haar goed van pas zou komen. De chaoot die ze zelf zegt te zijn, heeft niet altijd alles op een rijtje en luistert ook niet per se naar wat de coach zegt dat ze moet doen. Ze wil nog wel eens haar eigen plan trekken.

### Huidige situatie

De huidige sitautie is iets anders dan beschreven in de opdracht. Zo hebben we helaas ook geen traningsschema kunnen krijgen dat kleurgecodeerd was. In plaats daarvan hebben we de situatie van Larissa zelf goed moeten uithoren om de opdracht te kunnen aanscherpen. In haar huidige ritme is ze elke dag aan het trainen en daar heeft ze schema's voor. Echter, de huidige, nieuwe, coach weet nog niet zoveel van het baanwielrennen als zijzelf vindt ze en daarom trekt ze vaak haar eigen plan. Het omzetten van de kleurenschema's was dan ook niet per se een _must_ voor haar.

## Eerste meeting

Omdat we vanuit de opdracht en beschikbare materialen geen situatie konden opmaken hebben we als groep de eerste meeting gebruikt om vooral vragen te stellen aan Larissa en te kijken hoe zij omgaat met screenreaders.

### Concept

![Concept 1 HTML table](img/Concept_1.png)

Het concept dat ik had gemaakt om te testen was een simpele HTML-tabel. Al mijn hele leven leer ik hier dat ik die dingen semantisch correct moet maken en zoveel mogelijk attributen moet meegeven zodat de screenreader die kan uitlezen.
Voordat ik dit zelf kon testen was ik een uurtje bezig om de screenreader te leren besturen. Om een of andere reden hebben ze bedacht dat je toetscombinaties van 4 toetsen moet gebruiken voor de besturing.

Uiteindelijk werkte het goed en is een HTML-tabel ook goed leesbaar voor de screenreader, er wordt fijn herhaald in welke kolom/rij je zit bij het navigeren door de tabel en ook de titel van de desbetreffende kolom/rij herhaald.

### Resultaten

Helaas was de realiteit harder dan gedacht, zodra ik deze tabel voorlegde aan Larissa was het eerste wat ze deed op `tab` drukken. Dat is pech, want standaard `tab`'t de browser of de screenreader niet naar een tabel, maar naar de eerstvolgende link of heading. Dat betekent dat in elke context mijn tabel wordt overgeslagen. Larissa houdt van de `tab` toets omdat het eel makkelijker is om maar 2 of drie toetsen los te gebruiken in plaats van combinaties van 4 of 5 toetsen te gelijk. Hierna maar weer terug naar de tekentafel en kijken hoe we dit gaan toepassen voor haar.

#### Bevindingen

- Larissa krijgt wel programma's maar doet het liefst haar eigen ding.
- Larissa gebruikt de screenreader **Jaws**, de screenreader onerschept de code van de cpu naar gpu om te achterhalen wat de content is op de webpagina.
- Larissa gebruikt het liefst `tab` om door de website te gaan, en tabellen worden dan niet bereikt.
- Larissa houdt van fitness en doet het liefst krachttraining, ze houdt haar progressie bij met notities.
- Larissa is een chaotisch persoon en zou misschien wel wat organisatie kunnen gebruiken.

## Tweede meeting

Voor de tweede meeting had ik ook een kleine test voorbereid. Mijn concept had ik gemaakt om bepaalde doelstellingen gemakkelijk te kunnen behalen. Deze doelstellingen had ik in vorm van oprachten opgesteld om zo te bepalen of zij ze snapte en ook behaalde.

**Opdrachten**

- Kijk wat voor training je hebt op woensdag in week 3
- Check of je ruimte hebt om weekend in week 34 weg te gaan.

Deze opdrachten moesten mij inzicht geven in de navigatie die ik gemaakt had. Was deze duidelijk en makkelijk te bedienen.

### Concept

![Concept 2 enkel tab](img/Concept_2.png)
Dit concept was gemaakt om snel een weekoverzicht te hebben van je trainingen. Bovenaan staat duidelijk in welke week je je bevind en deze werd voorgelezen. De twee knoppen veranderden de week waar je naar keek en gaven meteen feedback over in welke week je nu keek. Daarnaast kon je per dag luisteren wat er gepland stond en dat allemaal met tab.
In dit ontwerp is ook rekening gehouden met contrast, omdat Larissa nog wel een klein verschil in licht en donker kan zien. Door gebruik te maken van een hoog contrast kan ze ongeveer zien waar zich elementen bevinden en welk element geselcteerd is.

### Resultaten Test 2

Tijdens de test kwam 1 ding goed naar voren, ik had nog niet aan de details gewerkt. Zo wilde Larissa tussen de eerste en tweede opdracht van week 3 naar week 34 gaan door naar 1 te klikken en dan via nog een stap bij week 52 uit te komen. In plaats daarvan ging ze naar week -1 en dus moest ze nog 36 keer klikken.
Wat wel heel fijn was vond ze, is dat er bij het navigeren door de weken gelijk feedback kwam van de navigatie. Elke keer als je een week verder of terug klikt zegt de navigatie in welke week je nu zit. Dit vond zij eigenlijk een must-have in volgende ontwerpen.

#### Bevindingen

- Grote knoppen voor navigatie zijn goed, heel fijn dat er gelijk feedback is.
- Sneller door weken navigeren zou prettig zijn en dan niet de negatieve weken in kunnen.
- Een date-picker voor belangrijke of interessante data zou handig zijn.
- Vandaag en morgen zijn voor Larissa het belangrijkst, verder kijkt ze vooral globaal wat er aan komt.
- Iet met contrast in de gefocuste elementen zou top zijn zodat ze net kan zien waar ze zich op de pagina bevindt.

## Laatste Meeting

De laatste meeting was iets sneller dan gedacht dus ik had minder aanpassingen kunnen doen dan gewild, maar desalnietttemin een goede test kunnen afnemen. Ik heb dezelfde opdrachten gebruikt als in de tweede meeting, om te kijken of er verbetering in het proces zat.

## Results test 3

- Fijn gedtailleerde view van vandaag en morgen
- Knoppen en immediate feedback is fijn.
- Date-picker kan beter onder het weekoverzicht om verwarring te voorkomen dat de week leeg is.
  - week 'x' -> content -> week verder/terug
- Dezelfde detaillering van vandaag en morgen zou ook fijn zijn in weekoverzicht
  - Met een linkje dan vanuit overzicht naar gedetailleerde versie.

## The context of Larissa Klaassen (test 1)

Larissa can only see for 1% of human sight. Therefore, visually appealing en color coded schemes are of no use to her. Instead she uses a screen reader to consume webpages en applications. Additionally she can use a 'brailleleesregel' but that is not somehting she does often.
In her case, there are a few habits and characteristics that are important:

- Larissa does get _programs_ but makes her own _trainingprogrammes_.
- Larissa uses the screen reader **Jaws**, which intercepts the code from the cpu to gpu.
- Larissa her favourite key is `tab`, and tables can not be reached with `tab`.
- Larissa loves fitness and lifting excercises she keeps track of progress.
- Larissa is a chaotic person and needs some order.

## Results Test 2

- Buttons for navigation are good, very nice that feedback is immediately given at change.
- Headinglevel should be adjusted
- Some way to navigate through the year quickly (and not into negative weeknumbers)
- Date picker would be nice for interesting dates
- Today and tomorrow are most important, she usually looks for how late and what activity. Further down the road she mostly wants to know what activity in global.
- Some contrast in focussed element is nice to navigate faster.
