// test-lv1j.js — Leseverstehen Teil 1
window.TELC_TEST = {
  id:"lv1j", type:"Leseverstehen Teil 1", kind:"lv1",
  title:"Höhlenforschung: Expeditionen ins Erdinnere",
  desc:"6 Satz-Zuordnungen · Textrekonstruktion · C1",
  satze:[
    {id:"z", t:"<strong>z)</strong> In manchen Fällen liefern diese unterirdischen Welten sogar Hinweise auf das Leben in der Frühgeschichte der Menschheit. <em>(Beispiel)</em>"},
    {id:"a", t:"<strong>a)</strong> Dabei stoßen die Forscher immer wieder auf unbekannte Lebewesen, die sich über Jahrtausende vollkommen isoliert entwickelt haben."},
    {id:"b", t:"<strong>b)</strong> Diese Entdeckung veränderte das Bild, das Wissenschaftler bis dahin von der Entstehung des Lebens auf der Erde hatten."},
    {id:"c", t:"<strong>c)</strong> Doch genau diese Unzugänglichkeit macht Höhlen für die Forschung so wertvoll — sie konservieren über lange Zeiträume hinweg Zeugnisse vergangener Epochen."},
    {id:"d", t:"<strong>d)</strong> Erst mit moderner Ausrüstung wie Atemgeräten, Spezialseilen und wasserdichten Kameras gelang es, auch die tiefsten Abschnitte zu erkunden."},
    {id:"e", t:"<strong>e)</strong> Heute zählt die Vermessung und digitale Kartierung von Höhlensystemen zu den wichtigsten Aufgaben der modernen Speläologie."},
    {id:"f", t:"<strong>f)</strong> Jahrhundertelang blieben die meisten Höhlen der Erde unerforschter und gefürchteter Lebensraum unbekannter Kreaturen — zumindest in der Vorstellung der Menschen."},
    {id:"g", t:"<strong>g)</strong> Hinzu kommt, dass viele Höhlensysteme noch nicht vollständig kartiert sind und möglicherweise weitere Überraschungen bereithalten. <em>(passt nicht)</em>"},
    {id:"h", t:"<strong>h)</strong> So enthüllen Tropfsteine und Sedimentschichten manchmal Klimabedingungen, die vor Tausenden von Jahren herrschten."}
  ],
  textps:[
    "Weit unter der Erdoberfläche verbirgt sich eine Welt, die kaum ein Mensch je gesehen hat. Höhlen sind nicht nur faszinierende geologische Strukturen, sondern auch einzigartige Ökosysteme. {0} Doch der Weg dorthin ist beschwerlich und gefährlich.",
    "{1} Erst mit dem Aufkommen der modernen Wissenschaft im 18. Jahrhundert begannen Naturforscher, Höhlen systematisch zu untersuchen — zunächst mit einfachen Werkzeugen wie Fackeln und Seilen.",
    "{2} So blieben viele Abschnitte noch lange unzugänglich: tiefe Schächte, untergetauchte Gänge und enge Spalten verhinderten eine vollständige Erkundung.",
    "Besonders spektakulär war die Entdeckung von Mikroorganismen in vollständig dunklen, von der Außenwelt abgeschlossenen Gewässern. {3} Denn diese Bakterien benötigen weder Licht noch Sauerstoff — sie nähren sich von chemischen Verbindungen im Gestein.",
    "Neben biologischen Funden bieten Höhlen auch wertvolle geologische Archive. {4} Für Klimaforscher sind solche Daten kaum zu überschätzen.",
    "{5} Denn viele Höhlen sind so schwer zugänglich und fragil, dass selbst die Anwesenheit von Menschen das empfindliche Gleichgewicht nachhaltig stören kann.",
    "Trotz all dieser Schwierigkeiten ist die Begeisterung für die Höhlenforschung ungebrochen. {6} Ein 3D-Modell einer weitgehend unerforschten Höhle kann heute aus sicherer Entfernung erstellt werden."
  ],
  qs:[
    {n:1, ans:"f",
     exp:"Satz f): «Jahrhundertelang blieben die meisten Höhlen unerforschter und gefürchteter Lebensraum» — historische Einleitung. Kontrast zu «moderner Wissenschaft im 18. Jahrhundert».",
     textref:"«erst mit dem Aufkommen der modernen Wissenschaft … begannen Naturforscher» → Satz f) liefert die Vorgeschichte: <em>Jahrhundertelang</em>.",
     rule:"Zeitlicher Kontrast: <em>Jahrhundertelang</em> (Satz f) → <em>Erst mit dem Aufkommen</em> (Folgesatz)."},
    {n:2, ans:"d",
     exp:"Satz d): «Erst mit moderner Ausrüstung … gelang es, auch die tiefsten Abschnitte zu erkunden.» — ergänzt: früher nur einfache Werkzeuge, dann moderne Mittel.",
     textref:"«zunächst mit einfachen Werkzeugen wie Fackeln und Seilen» → Satz d): <em>Erst mit moderner Ausrüstung</em> = nächste Entwicklungsstufe.",
     rule:"<em>Erst mit</em> = только с помощью (указывает на необходимое условие). Временная прогрессия."},
    {n:3, ans:"b",
     exp:"Satz b): «Diese Entdeckung veränderte das Bild, das Wissenschaftler von der Entstehung des Lebens hatten.» — <em>diese Entdeckung</em> = Mikroorganismen ohne Licht/Sauerstoff.",
     textref:"«Entdeckung von Mikroorganismen in vollständig dunklen Gewässern» → Satz b): <em>diese Entdeckung</em> = Anapher.",
     rule:"<em>Diese Entdeckung</em> = Anapher auf die Mikroorganismen. Fazit nach der Entdeckung."},
    {n:4, ans:"h",
     exp:"Satz h): «So enthüllen Tropfsteine und Sedimentschichten manchmal Klimabedingungen, die vor Tausenden von Jahren herrschten.» — konkretisiert «geologische Archive».",
     textref:"«Höhlen bieten auch wertvolle geologische Archive» → Satz h): <em>So</em> = конкретный пример.",
     rule:"<em>So</em> = таким образом (вводит пример). Satz h) konkretisiert den abstrakten Begriff «Archive»."},
    {n:5, ans:"c",
     exp:"Satz c): «Doch genau diese Unzugänglichkeit macht Höhlen für die Forschung so wertvoll — sie konservieren Zeugnisse vergangener Epochen.» — paradoxe Umkehrung: Unzugänglichkeit = Vorteil.",
     textref:"«viele Höhlen sind so schwer zugänglich und fragil» → Satz c): <em>Doch genau diese Unzugänglichkeit</em> = Gegenpol/Paradox.",
     rule:"<em>Doch genau</em> = именно это (парадоксальный поворот). Unzugänglichkeit als Vorteil."},
    {n:6, ans:"e",
     exp:"Satz e): «Heute zählt die Vermessung und digitale Kartierung zu den wichtigsten Aufgaben der modernen Speläologie.» — Überleitung zu 3D-Modellen im Folgesatz.",
     textref:"«die Begeisterung für die Höhlenforschung ist ungebrochen» → Satz e): heutige Methoden als Ausdruck dieser Begeisterung.",
     rule:"<em>Heute</em> am Satzanfang = aktueller Stand. Verbindet Vergangenheit mit moderner Praxis."}
  ],
  vocab:["die Speläologie — спелеология","der Tropfstein — сталактит/сталагмит","die Sedimentschicht — слой осадочных пород","kartieren — картировать","die Unzugänglichkeit — недоступность","konservieren — сохранять","das Gleichgewicht — равновесие","fragil — хрупкий"]
};
