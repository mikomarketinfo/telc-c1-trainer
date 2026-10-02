// test-lv2a.js — TELC C1
window.TELC_TEST = {
  id:"lv2_1", type:"Leseverstehen Teil 2", kind:"lv2",
  title:"Welche Bedeutung haben Träume?",
  desc:"6 Fragen · In welchem Abschnitt? · C1",
  textps:[
    "<strong>Abschnitt a:</strong> Was für ein Schrecken! Gerade bekamen Sie die Nachricht, im Lotto gewonnen zu haben … Und dann reißt Sie der Wecker grausam aus dem Schlaf. Im Traum passieren oft skurrile Dinge. Wir überwinden die Schwerkraft, erheben uns wie ein Vogel. Oft durchleben wir in verfremdeter Form die Widrigkeiten des Alltags. In Albträumen suchen uns unsere größten Ängste heim.",
    "<strong>Abschnitt b:</strong> Doch welche Bedeutung haben Träume eigentlich? Für Götterbotschaften hielt man in der Antike das nächtliche Kopfkino. Wer leichtgläubig nach einem Schlüssel für Traumsymbole sucht, wird unzählige Websites finden. Dabei stellt sich die Frage, ob die Ansicht, Träume enthielten eine Bedeutung, möglicherweise auf einem Missverständnis basiert. Sind die nächtlichen Bilder nicht vielmehr sinnlose Abfallprodukte des Gehirns? Sollte man sie nicht am besten einfach ignorieren?",
    "<strong>Abschnitt c:</strong> Tatsächlich ist der Wahrheitsgehalt von Träumen umstritten. Zu den Klassikern gehört Sigmund Freuds 1899 erschienenes Werk «Die Traumdeutung»: Für den Begründer der Psychoanalyse manifestierten sich in Traumsymbolen unbewusste, verdrängte Wünsche. Der amerikanische Psychiater Allan Hobson erklärte Träume zum Resultat zufälliger Hirnaktivität, zu reinem Neuronengeflimmer ohne Sinngehalt. Doch auch von dieser These rückt die Psychologie inzwischen wieder ab.",
    "<strong>Abschnitt d:</strong> Diese Schwierigkeit könnte auch darin begründet liegen, dass der Gegenstand der Untersuchung nur schwer zu fassen ist. Im Allgemeinen wird als Traum eine psychische Aktivität während des Schlafes bezeichnet. Widerlegt ist mittlerweile die früher weitverbreitete Annahme, dass wir nur in den sogenannten REM-Phasen träumen – wir träumen die ganze Nacht. Die Frage nach dem «Wann» scheint also mittlerweile geklärt zu sein. <em>Da bleibt es nur zu hoffen, dass auch bald die interessante Frage geklärt wird, warum im Schlaf Bilder in unserem Kopf entstehen.</em>",
    "<strong>Abschnitt e:</strong> Eine interessante Spur verfolgen dabei Neuroforscher, die bildgebende Verfahren nutzen, um das träumende Gehirn zu beobachten. Im Traumzustand ist der präfrontale Cortex gehemmt, jener Bereich für Logik, Sinn und Moral. So kann sich die Fantasie befreit von Zwängen entfalten. Wenn wir uns mit unseren Träumen beschäftigen, sollten wir vor allem das rechte Maß einhalten."
  ],
  qs:[
    {n:7,t:"In welchem Abschnitt äußert sich die Autorin abfällig / skeptisch? (пренебрежительно / скептически)",
     opts:["a","b","c","d","e"],ans:"b",
     exp:"Abschnitt b): «Sollte man sie nicht am besten einfach ignorieren?» + «Wer leichtgläubig sucht» = negativ-skeptische Bewertung. Die Autorin zweifelt an der Bedeutung von Träumen.",
     rule:"Abfällig = пренебрежительно: Konjunktiv + negatives Adjektiv (<em>leichtgläubig</em>). Rhetorische Frage mit negativem Unterton."},
    {n:8,t:"In welchem Abschnitt gibt die Autorin einen Rat? (даёт совет)",
     opts:["a","b","c","d","e"],ans:"e",
     exp:"Abschnitt e): «sollten wir vor allem das rechte Maß einhalten» = klar formulierter Rat. Konjunktiv II von <em>sollen</em> als Empfehlung.",
     rule:"Rat erkennbar: <em>sollten</em> (Konj.II als Höflichkeitsform) + <em>vor allem</em> = рекомендация."},
    {n:9,t:"In welchem Abschnitt liefert die Autorin Definitionen? (даёт определения)",
     opts:["a","b","c","d","e"],ans:"d",
     exp:"Abschnitt d): «Im Allgemeinen wird als Traum eine psychische Aktivität während des Schlafes bezeichnet.» = klassische Definition mit Passiv + <em>als … bezeichnet werden</em>.",
     rule:"Definition: <em>als … bezeichnet werden</em> (Passiv) + <em>Im Allgemeinen</em> = официальное определение."},
    {n:10,t:"In welchem Abschnitt spricht die Autorin einen Wunsch aus? (выражает пожелание)",
     opts:["a","b","c","d","e"],ans:"d",
     exp:"Abschnitt d): «<em>Da bleibt es nur zu hoffen</em>, dass auch bald die interessante Frage geklärt wird …» — ACHTUNG: Dieser Satz kursiv im Text! Wunsch/Hoffnung der Autorin.",
     rule:"<em>es bleibt zu hoffen</em> = остаётся надеяться = выражение пожелания. Этот сatz выделен курсивом в тексте!"},
    {n:11,t:"In welchem Abschnitt stellt die Autorin verschiedene Standpunkte gegenüber? (сопоставляет точки зрения)",
     opts:["a","b","c","d","e"],ans:"c",
     exp:"Abschnitt c): Freud (Träume = unbewusste Wünsche) vs. Hobson (Träume = zufällige Hirnaktivität) = zwei entgegengesetzte Theorien.",
     rule:"Kontrastierung: zwei Namen + gegenteilige Thesen. Два имени + противоположные теории."},
    {n:12,t:"In welchem Abschnitt wirft die Autorin Bedenken auf? (выражает сомнения)",
     opts:["a","b","c","d","e"],ans:"b",
     exp:"Abschnitt b): «Sind die nächtlichen Bilder nicht vielmehr sinnlose Abfallprodukte des Gehirns?» = rhetorische Frage mit Zweifel.",
     rule:"Bedenken: rhetorische Frage + <em>nicht vielmehr</em> = не скорее? = выражение сомнения."}
  ],
  vocab:["skurril — нелепый, причудливый","die Traumdeutung — толкование снов","das Neuronengeflimmer — мерцание нейронов","es bleibt zu hoffen — остаётся надеяться","das rechte Maß einhalten — соблюдать меру"]
};
