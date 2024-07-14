// Liste der historischen Ereignisse
const events = [
    { event: "Der Fall der Berliner Mauer", year: 1989 },
    { event: "Die Mondlandung von Apollo 11", year: 1969 },
    { event: "Der Ausbruch des Zweiten Weltkriegs", year: 1939 },
    { event: "Die Unabhängigkeitserklärung der USA", year: 1776 },
    { event: "Geburt von Leonardo da Vinci", year: 1452 },
    { event: "Geburt von William Shakespeare", year: 1564 },
    { event: "Erster bemannter Raumflug", year: 1961 },
    { event: "Ende des Zweiten Weltkriegs in Europa", year: 1945 },
    { event: "Erster Mensch auf dem Mond", year: 1969 },
    { event: "Erster Weltkrieg beginnt", year: 1914 },
    { event: "Eröffnung der Olympischen Sommerspiele in Berlin", year: 1936 },
    { event: "Wiedervereinigung Deutschlands", year: 1990 },
    { event: "Erster Arbeitstag der UN-Generalversammlung", year: 1945 },
    { event: "Geburt von Friedrich Nietzsche", year: 1844 },
    { event: "Reformationstag", year: 1517 },
    { event: "Ende des Ersten Weltkriegs", year: 1918 },
    { event: "Black Friday Börsenkrach", year: 1929 },
    { event: "Geburt von Isaac Newton", year: 1643 },
    { event: "Traditionelles Datum der Gründung Roms", year: -753 },
    { event: "Erster Flug der Gebrüder Wright", year: 1903 },
    { event: "Unterzeichnung des Versailler Vertrags", year: 1919 },
    { event: "Gründung der Europäischen Union ", year: 1957 },
    { event: "Eröffnung des Suezkanals", year: 1869 },
    { event: "Der Sturm auf die Bastille", year: 1789 },
    { event: "Erster Test der Atombombe", year: 1945 },
    { event: "Erster veröffentlichtes Telefonat", year: 1876 },
    { event: "Oktoberrevolution in Russland", year: 1917 },
    { event: "Kubakrise", year: 1962 },
    { event: "Unabhängigkeit Indiens", year: 1947 },
    { event: "Gründung der Bundesrepublik Deutschland", year: 1949 },
    { event: "Reichstagsbrand", year: 1933 },
    { event: "Einführung des Euro", year: 2002 },
    { event: "Ende der Apartheid in Südafrika", year: 1994 },
    { event: "Schlacht von Stalingrad", year: 1943 },
    { event: "Gründung der NASA", year: 1958 },
    { event: "Titanic sinkt", year: 1912 },
    { event: "Geburt von Adolf Hitler", year: 1889 },
    { event: "D-Day - Landung der Alliierten in der Normandie", year: 1944 },
    { event: "Gründung der Europäischen Gemeinschaft für Kohle und Stahl", year: 1951 },
    { event: "Atombombenabwurf auf Hiroshima und Nagasaki", year: 1945 },
    { event: "Woodstock-Festival", year: 1969 },
    { event: "Berliner Luftbrücke", year: 1949 },
    { event: "Schwarzer Donnerstag", year: 1929 },
    { event: "Kubakrise", year: 1962 },
    { event: "Bau der Berliner Mauer", year: 1961 },
    { event: "Gründung der NATO", year: 1949 },
    { event: "Martin Luther King Jr.'s I `Have a Dream` Rede", year: 1963 },
    { event: "Machtergreifung der NSDAP", year: 1933 },
    { event: "Rosa Parks' Weigerung, ihren Sitzplatz aufzugeben", year: 1955 },
    { event: "Start des Marshallplans", year: 1948 },
    { event: "Prager Frühling", year: 1968 },
    { event: "Erster moderner Olympischer Spiele (in Athen)", year: 1896 },
    { event: "Apollo-Sojus-Test-Projekt", year: 1975 },
    { event: "Koreakrieg beginnt", year: 1950 },
    { event: "Einweihung des Eiffelturms", year: 1889 },
    { event: "Gründung der Volksrepublik China", year: 1949 },
    { event: "Watergate-Affäre", year: 1972 },
    { event: "Solidarność-Bewegung in Polen", year: 1980 },
    { event: "9/11 Anschläge", year: 2001 },
    { event: "Gründung der Weltgesundheitsorganisation", year: 1948 },
    { event: "Einführung des ersten Personal Computers", year: 1981 },
    { event: "Kubanische Revolution (unter Fidel Castro)", year: 1959 },
    { event: "Erster Satellit im Weltraum", year: 1957 },
    { event: "Fertigstellung Pyramiden von Gizeh-Ägypten", year: -2560 },
    { event: "Fertigstellung Parthenon-Griechenland", year: -438 },
    { event: "Fertigstellung Kolosseum-Italien", year: 80 },
    { event: "Fertigstellung Tadsch Mahal-Indien", year: 1648 },
    { event: "Fertigstellung Eiffelturm-Frankrich", year: 1889 },
    { event: "Fertigstellung Freiheitsstatue-USA", year: 1886 },
    { event: "Fertigstellung Opernhaus Sydney-Australien", year: 173 },
    { event: "Fertigstellung Burj Khalifa-Vereinigte Arabische Emirate", year: 2010 },
    { event: "Fertigstellung Shanghai Tower-China", year: 2015 },
    { event: "Fertigstellung One World Trade Center-USA", year: 2014 },
    { event: "Fertigstellung Petronas Towers-Malaysia", year: 1998 },
    { event: "Fertigstellung Kölner Dom-Deutschland", year: 1880 },
    { event: "Fertigstellung Moskauer Kreml-Russland", year: 1500 },
    { event: "Erfindung Druckerpresse", year: 1440 },
    { event: "Erfindung Rad", year: -3500 },
    { event: "Erfindung Teleskop", year: 1608 },
    { event: "Erfindung Dampfmaschine", year: 1712 },
    { event: "Erfindung Telegraf", year: 1837 },
    { event: "Erfindung Glühbirne", year: 1879 },
    { event: "Erfindung Automobil", year: 1885 },
    { event: "Erfindung Radio", year: 1895 },
    { event: "Erfindung Flugzeug", year: 1903 },
    { event: "Erfindung Kühlschrank", year: 1913 },
    { event: "Erfindung Fernsehen", year: 1927 },
    { event: "Erfindung Penicillin", year: 1928 },
    { event: "Erfindung Kernspaltung", year: 1938 },
    { event: "Erfindung Computer", year: 1940 },
    { event: "Erfindung Mikrowelle", year: 1946 },
    { event: "Erfindung Transistor", year: 1947 },
    { event: "Erfindung Laser", year: 1960 },
    { event: "Erfindung Internet", year: 1960 },
    { event: "Erfindung GPS", year: 1973 },
    { event: "Erfindung World Wide Web", year: 1991},
    { event: "Erfindung Smartphone", year: 1992 },
    { event: "Erfindung CRISPR-Cas9", year: 2012 },
    { event: "Geburt Napoleon Bonaparte", year: 1769 },
    { event: "Geburt Abraham Lincoln", year: 1809 },
    { event: "Geburt Charles Darwin", year: 1809 },
    { event: "Geburt Karl Marx", year: 1818 },
    { event: "Geburt Queen Victoria", year: 1819 },
    { event: "Geburt Thomas Edison", year: 1847 },
    { event: "Geburt Sigmund Freud", year: 1856 },
    { event: "Geburt Albert Einstein", year: 1879 },
    { event: "Geburt Franklin D. Roosevelt", year: 1882 },
    { event: "Geburt Winston Churchill", year: 1874 },
    { event: "Geburt Mahatma Gandhi", year: 1869 },
    { event: "Geburt Mao Zedong", year: 1893 },
    { event: "Geburt John F. Kennedy", year: 1917 },
    { event: "Geburt Nelson Mandela", year: 1918 },
    { event: "Geburt Margaret Thatcher", year: 1925 },
    { event: "Geburt Pablo Picasso", year: 1881 },
    { event: "Fertigstellung nordostseekanal", year: 1895 },
    // Weitere Ereignisse können hier hinzugefügt werden
];



let totalScore = 0;
let roundsPlayed = 0;
const maxRounds = 10;

let usedIndices = [];

window.onload = function() {
    loadNextEvent();
};

function loadNextEvent() {
    if (roundsPlayed < maxRounds) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * events.length);
        } while (usedIndices.includes(randomIndex));

        usedIndices.push(randomIndex);

        document.getElementById("event-text").innerText = events[randomIndex].event;
        document.getElementById("year-input").value = '';
        document.getElementById("result-text").innerText = ''; // Zurücksetzen des Ergebnistextes

        // Zeige das Ergebnis erst nach 2 Sekunden
        setTimeout(function() {
            document.getElementById("result-text").innerText = '';
        }, 2000); // Nach 2 Sekunden das Ergebnis zurücksetzen
    } else {
        // Wenn alle Runden gespielt wurden, zeige den Gesamtscore an
        document.getElementById("event-container").style.display = 'none';
        document.getElementById("year-input").style.display = 'none';
        document.querySelector("button").style.display = 'none';
        document.getElementById("total-score").innerText = `Gesamtdifferenz nach ${maxRounds} Runden: ${totalScore}`;
    }
}

function submitGuess() {
    const guessedYear = parseInt(document.getElementById("year-input").value);
    if (isNaN(guessedYear)) {
        document.getElementById("result-text").innerText = 'Bitte gib eine gültige Jahreszahl ein.';
        return;
    }

    const actualYear = events[usedIndices[roundsPlayed]].year;
    const difference = Math.abs(guessedYear - actualYear);
    totalScore += difference;
    roundsPlayed++;

    document.getElementById("result-text").innerText = `Deine Schätzung: ${guessedYear}, Tatsächliches Jahr: ${actualYear}, Differenz: ${difference}`;

    if (roundsPlayed < maxRounds) {
        // Lade das nächste Ereignis nach 2 Sekunden
        setTimeout(function() {
            loadNextEvent(); // Lade das nächste Ereignis
        }, 2000); // Nach 2 Sekunden das nächste Ereignis laden
    } else {
        // Wenn alle Runden gespielt wurden, zeige das Endergebnis an
        document.getElementById("event-container").style.display = 'none';
        document.getElementById("year-input").style.display = 'none';
        document.querySelector("button").style.display = 'none';
        document.getElementById("total-score").innerText = `Gesamtdifferenz nach ${maxRounds} Runden: ${totalScore}`;
    }
}