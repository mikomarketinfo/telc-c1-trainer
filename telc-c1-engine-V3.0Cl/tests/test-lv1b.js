// test-lv1b.js — TELC C1
window.TELC_TEST = {
  id:"lv1_2", type:"Leseverstehen Teil 1", kind:"lv1",
  title:"Satzzeichen, mächtige Werkzeuge",
  desc:"6 Satz-Zuordnungen · Textrekonstruktion · C1",
  satze:[
    {id:"z",t:"<strong>z)</strong> Als Victor Hugo 1862 im Urlaub weilte, ließ er seinem Verleger ein schlichtes «?» kabeln. Wenig später erhielt er die ebenso knappe Antwort: «!» <em>(Beispiel)</em>"},
    {id:"a",t:"<strong>a)</strong> Bereits 1762 bemängelte der Gelehrte Johann Christoph Gottsched, dass es im Deutschen keine Zeichen für Staunen oder Mitleid gebe."},
    {id:"b",t:"<strong>b)</strong> Dabei konnte damals von verbindlichen Normen noch gar keine Rede sein."},
    {id:"c",t:"<strong>c)</strong> Das beklagen selbst die leidenschaftlichsten Verfechter von Kurznachrichten."},
    {id:"d",t:"<strong>d)</strong> Erst im Mittelalter kamen irische Mönche auf die Idee, diese Textschlangen mit Zeichen zu versehen, um anderen Lesern das Leben einfacher zu machen."},
    {id:"e",t:"<strong>e)</strong> Erst viel später – mit den neuen Medien – ging dieser langgehegte Wunsch in Erfüllung."},
    {id:"f",t:"<strong>f)</strong> In ihr reiht sich Buchstabe an Buchstabe, Wort an Wort."},
    {id:"g",t:"<strong>g)</strong> Rund 2500 Jahre nach den ersten Schriftzeichen trennen darin erstmals Striche und Punkte die Worte."},
    {id:"h",t:"<strong>h)</strong> Um dies zu verstehen, muss man die Arbeitsweise in den mittelalterlichen Schreibstuben beachten."}
  ],
  textps:[
    "Jeder Smartphonebesitzer weiß, dass ein Semikolon und eine Klammer Freundschaften retten können. Braucht es doch nur diese zwei Symbole, und eine Beleidigung wird zum Witz ;). Selbst mit bloßen Satzzeichen lassen sich mitunter noch ganze Konversationen gestalten. {0}",
    "Als Ur-Satzzeichen gelten die Markierungen in einem Text auf der sogenannten Mescha-Stele aus dem 9. Jahrhundert vor Christus. {1} Dass es damals schon Satzzeichen gab, heißt aber nicht, dass sie auch allgemein Verwendung fanden. Werke der griechischen und lateinischen Dichter sind aufgezeichnet in der sogenannten <em>scriptio continua</em>.",
    "{2} Experten erklären das so: In jener ersten Phase war Schrift primär eine Erinnerungsstütze für den professionellen Vortrag.",
    "{3} Spätestens die Erfindung des Buchdrucks durch Gutenberg läutete dann die zweite große Phase ein.",
    "Es regte sich aber auch Kritik: Um 1750 befand Jean-Jacques Rousseau, dass es einer niedergeschriebenen Sprache an Lebendigkeit mangele. {4} So verwendete etwa Goethe Punkt und Komma noch nach Gutdünken.",
    "Dabei scheint schon lange vorher Bedarf an größeren Ausdrucksmöglichkeiten bestanden zu haben. {5} In der Philosophie, glaubte er, könnten solche durchaus nützlich sein.",
    "{6} Die extreme Verkürzung der schriftlichen Kommunikation mittels Kurznachrichten verlangt anscheinend wieder nach einer Simulation von Mündlichkeit. Der Erfolg der Emojis entspringt dem Wunsch, Affekte in geschriebene Sprache zu überführen."
  ],
  qs:[
    {n:1,ans:"g",
     exp:"Satz g): «Rund 2500 Jahre nach den ersten Schriftzeichen trennen darin erstmals Striche und Punkte die Worte.» — <em>darin</em> = in der Mescha-Stele. Konkrete zeitliche Einordnung.",
     textref:"«Mescha-Stele aus dem 9. Jahrhundert vor Christus» → <em>darin</em> (= in der Stele) in Satz g).",
     rule:"<em>darin</em> = in der Stele. Zeitliche Progression: erste Schriftzeichen → Satzzeichen 2500 Jahre später."},
    {n:2,ans:"f",
     exp:"Satz f): «In ihr reiht sich Buchstabe an Buchstabe, Wort an Wort.» — <em>ihr</em> (fem.) = der scriptio continua. Beschreibt ununterbrochenen Text.",
     textref:"«in der sogenannten scriptio continua» → <em>In ihr</em> in Satz f) = in der scriptio continua.",
     rule:"<em>ihr</em> (fem.) = scriptio continua (fem.). Genus-Übereinstimmung! Parallelismus Buchstabe/Wort beschreibt Kontinuität."},
    {n:3,ans:"d",
     exp:"Satz d): «Erst im Mittelalter kamen irische Mönche auf die Idee…» — Übergang von scriptio continua zur Lesbarkeit. <em>Erst</em> betont die Verzögerung.",
     textref:"scriptio continua (keine Zeichen) → <em>Erst im Mittelalter</em> → Buchdruck (nächster Absatz). Chronologie!",
     rule:"Zeitliche Abfolge: <em>Erst im Mittelalter</em> = только в Средневековье. Контекст до и после."},
    {n:4,ans:"b",
     exp:"Satz b): «Dabei konnte damals von verbindlichen Normen noch gar keine Rede sein.» — erklärt, warum Goethe Kommas nach Gutdünken setzen konnte.",
     textref:"«Goethe verwendete Punkt und Komma nach Gutdünken» → Satz b): damals keine verbindlichen Normen.",
     rule:"<em>Dabei + damals</em> → zeitlicher Rückbezug. Erklärt Goethes Freiheit."},
    {n:5,ans:"a",
     exp:"Satz a): «Bereits 1762 bemängelte Gottsched, dass es keine Zeichen für Staunen oder Mitleid gebe.» — historisches Beispiel für Bedarf an Ausdrucksmöglichkeiten.",
     textref:"«Bedarf an größeren Ausdrucksmöglichkeiten» → Satz a) liefert Beispiel. <em>er</em> im Folgesatz = Gottsched.",
     rule:"Satz a) belegt mit Datum (1762) die Behauptung. <em>er</em> im nächsten Satz = Gottsched."},
    {n:6,ans:"e",
     exp:"Satz e): «Erst viel später – mit den neuen Medien – ging dieser langgehegte Wunsch in Erfüllung.» — Gottscheds Wunsch (1762) erfüllte sich erst mit Emojis.",
     textref:"«dieser Wunsch» = Gottscheds Wunsch nach neuen Zeichen (Lücke 5). <em>Erst viel später</em> = mit Emojis.",
     rule:"<em>dieser Wunsch</em> → Anaphora auf Gottscheds Wunsch. <em>Erst viel später</em> = только много позже."}
  ],
  vocab:["verbindlich — обязательный","die Norm — норма","scriptio continua — непрерывное письмо без пробелов","in Erfüllung gehen — сбываться","die Erinnerungsstütze — инструмент памяти"]
};
