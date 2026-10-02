// test-lv1l.js — Leseverstehen Teil 1
window.TELC_TEST = {
  id:"lv1l", type:"Leseverstehen Teil 1", kind:"lv1",
  title:"Der Lift — eine Würdigung",
  desc:"6 Satz-Zuordnungen · Textrekonstruktion · C1",
  satze:[
    {id:"z", t:"<strong>z)</strong> Ohne ihn wäre die moderne Großstadt, wie wir sie kennen, schlicht undenkbar. <em>(Beispiel)</em>"},
    {id:"a", t:"<strong>a)</strong> Als diese Sicherheitsbremse dann 1854 vor Publikum spektakulär demonstriert wurde, war der Weg für den Personenaufzug frei."},
    {id:"b", t:"<strong>b)</strong> Damit ermöglichte er eine völlig neue Art des Bauens — in die Höhe statt in die Breite."},
    {id:"c", t:"<strong>c)</strong> Diese einfache Erkenntnis revolutionierte die Architektur und das Stadtbild weltweit."},
    {id:"d", t:"<strong>d)</strong> Er verbindet Etagen, überbrückt Welten und macht aus Stockwerken gleichwertige Lebensräume."},
    {id:"e", t:"<strong>e)</strong> Früher hieß es: Wer oben wohnt, wohnt billig — denn Treppen steigen war beschwerlich."},
    {id:"f", t:"<strong>f)</strong> In modernen Hochhäusern kann ein einziger Aufzugschacht bis zu achtzig Stockwerke bedienen."},
    {id:"g", t:"<strong>g)</strong> Obwohl das Prinzip des Lastenaufzugs schon seit der Antike bekannt war, fehlte lange Zeit eine entscheidende Komponente: eine zuverlässige Sicherheitsbremse."},
    {id:"h", t:"<strong>h)</strong> Heute dagegen gilt das Penthouse auf dem Dach als begehrteste und teuerste Wohnadresse. <em>(passt nicht)</em>"}
  ],
  textps:[
    "Der Aufzug feiert in diesem Jahr ein rundes Jubiläum — und er verdient eine Würdigung. {0} Der Lift hat die Art, wie Menschen wohnen, arbeiten und Städte bauen, grundlegend verändert.",
    "{1} Lange bevor Elisha Otis den modernen Fahrstuhl erfand, hoben Flaschenzüge und Lastenaufzüge schwere Waren in obere Stockwerke. {2} Das Seil konnte reißen, und die Folgen waren katastrophal.",
    "Otis' geniale Lösung: Eine Fangvorrichtung, die beim Reißen des Seils automatisch einrastete. {3} Im selben Jahr eröffnete in New York City das erste Kaufhaus mit Personenaufzug.",
    "Die gesellschaftlichen Folgen waren beträchtlich. {4} Mit dem Aufzug änderte sich das soziale Gefüge ganzer Stadtteile: Plötzlich waren die oberen Etagen attraktiv — ruhiger, luftiger, mit besserem Ausblick.",
    "{5} Wer unten wohnte, stand im Lärm und Schmutz der Straße. Wer oben wohnte, schwitzte beim Treppensteigen.",
    "Der Aufzug machte Hochhäuser erst wirtschaftlich sinnvoll. {6} Bis zu 400 Menschen täglich können so einen einzigen Schacht nutzen — eine logistische Meisterleistung.",
    "Ohne den Lift kein Empire State Building, kein Burj Khalifa, keine vertikale Megacity. Er ist still, unscheinbar — und absolut unverzichtbar."
  ],
  qs:[
    {n:1, ans:"d",
     exp:"Satz d): «Er verbindet Etagen, überbrückt Welten und macht aus Stockwerken gleichwertige Lebensräume.» — allgemeine Würdigung des Aufzugs nach der Einleitung.",
     textref:"«Der Lift hat die Art, wie Menschen wohnen … grundlegend verändert.» → Satz d) konkretisiert: wie genau er das tut.",
     rule:"Satz d) listet drei Funktionen des Aufzugs auf — Parallelismus als Würdigung."},
    {n:2, ans:"g",
     exp:"Satz g): «Obwohl das Prinzip bekannt war, fehlte lange Zeit eine entscheidende Komponente: eine zuverlässige Sicherheitsbremse.» — erklärt das fehlende Element vor Otis.",
     textref:"«Lange bevor Elisha Otis den modernen Fahrstuhl erfand …» → Satz g): <em>Obwohl</em> + fehlende Sicherheitsbremse = warum es trotzdem nicht klappte.",
     rule:"<em>Obwohl … dennoch fehlte</em> = Konzession. Satz g) erklärt das Hauptproblem vor Otis."},
    {n:3, ans:"a",
     exp:"Satz a): «Als diese Sicherheitsbremse 1854 vor Publikum demonstriert wurde, war der Weg frei.» — <em>diese Sicherheitsbremse</em> = Otis' Erfindung (Anapher).",
     textref:"«Otis' geniale Lösung: Eine Fangvorrichtung …» → Satz a): <em>diese Sicherheitsbremse</em> = die Fangvorrichtung.",
     rule:"<em>diese</em> (fem.) = Anapher auf <em>die Sicherheitsbremse</em>. Temporale Folge: Demonstration → Weg frei."},
    {n:4, ans:"e",
     exp:"Satz e): «Früher hieß es: Wer oben wohnt, wohnt billig — denn Treppen steigen war beschwerlich.» — erklärt den früheren Zustand vor dem Aufzug.",
     textref:"«Die gesellschaftlichen Folgen waren beträchtlich.» → Satz e) liefert den Kontrast: <em>Früher</em> war es umgekehrt.",
     rule:"<em>Früher</em> am Satzanfang = Kontrast zum jetzigen Zustand (gesellschaftliche Wende durch den Aufzug)."},
    {n:5, ans:"c",
     exp:"Satz c): «Diese einfache Erkenntnis revolutionierte die Architektur und das Stadtbild weltweit.» — fasst die Konsequenz zusammen: oben = attraktiv.",
     textref:"«Plötzlich waren die oberen Etagen attraktiv — ruhiger, luftiger …» → Satz c): <em>Diese Erkenntnis</em> = diese neue Attraktivität.",
     rule:"<em>Diese Erkenntnis</em> = Anapher auf die neue Erkenntnis über obere Etagen. Fazit-Formulierung."},
    {n:6, ans:"b",
     exp:"Satz b): «Damit ermöglichte er eine völlig neue Art des Bauens — in die Höhe statt in die Breite.» — <em>Damit</em> = mit dem Aufzug.",
     textref:"«Der Aufzug machte Hochhäuser erst wirtschaftlich sinnvoll.» → Satz b): <em>Damit</em> = mit diesem Effekt.",
     rule:"<em>Damit</em> = с этим, посредством этого. Kausalverbindung: Aufzug → vertikales Bauen möglich."}
  ],
  vocab:["die Würdigung — признание, дань уважения","die Fangvorrichtung — предохранительный механизм","das Gefüge — структура, устройство","begehrt — востребованный, желанный","überbrücken — преодолевать (расстояние)","unscheinbar — неприметный","unverzichtbar — незаменимый"]
};
