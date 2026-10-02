// test-lv1i.js — Leseverstehen Teil 1
window.TELC_TEST = {
  id:"lv1i", type:"Leseverstehen Teil 1", kind:"lv1",
  title:"Die Maus als Stimmungsbarometer",
  desc:"6 Satz-Zuordnungen · Textrekonstruktion · C1",
  satze:[
    {id:"z", t:"<strong>z)</strong> Das klingt nach Science-Fiction, ist aber längst gelebte Realität in Forschungslabors. <em>(Beispiel)</em>"},
    {id:"a", t:"<strong>a)</strong> Auf diese Weise lassen sich auch versteckte emotionale Zustände objektiv messen, die der Betroffene selbst vielleicht gar nicht wahrnimmt."},
    {id:"b", t:"<strong>b)</strong> Das war zunächst überraschend, denn die Forscher hatten andere Ergebnisse erwartet."},
    {id:"c", t:"<strong>c)</strong> Diese Erkenntnis könnte helfen, neue Therapieansätze für Menschen mit Angststörungen zu entwickeln."},
    {id:"d", t:"<strong>d)</strong> Jedoch verlaufen solche Übertragungen selten reibungslos, da tierische Modelle nur begrenzt auf den Menschen übertragbar sind."},
    {id:"e", t:"<strong>e)</strong> Mäuse zeigen nämlich verblüffend ähnliche physiologische Reaktionen wie Menschen, wenn sie Stress oder Angst empfinden."},
    {id:"f", t:"<strong>f)</strong> Sie beobachteten dabei, wie sich Mimik, Körperhaltung und Bewegungsverhalten unter Stressbedingungen veränderten."},
    {id:"g", t:"<strong>g)</strong> Schließlich wurden die Tiere verschiedenen kontrollierten Stressreizen ausgesetzt, um reproduzierbare Ergebnisse zu erzielen."},
    {id:"h", t:"<strong>h)</strong> Zudem stellten die Wissenschaftler fest, dass regelmäßige körperliche Aktivität die negativen Auswirkungen von Stress deutlich abschwächen kann. <em>(passt nicht)</em>"}
  ],
  textps:[
    "Forscher können anhand des Gesichtsausdrucks einer Maus erkennen, ob das Tier Schmerzen, Angst oder Freude empfindet. {0} Doch wie genau funktioniert das — und was können wir daraus für die menschliche Gesundheit lernen?",
    "Der Schlüssel liegt in der biologischen Ähnlichkeit. {1} Wenn eine Maus erschrickt, weitet sich ihre Pupille, ihr Puls beschleunigt sich, und bestimmte Gesichtsmuskeln spannen sich an — all das passiert beim ängstlichen Menschen genauso.",
    "Forschern der Universität Zürich gelang es, mithilfe einer speziellen Software die Mimik von Mäusen automatisch auszuwerten. {2} Die Ergebnisse zeigten: Selbst feine Unterschiede in der Intensität negativer Emotionen lassen sich zuverlässig erkennen.",
    "Für ihre Studie wählten die Wissenschaftler zunächst eine repräsentative Gruppe von Labormäusen aus. {3} Dabei wurden sowohl akute als auch langanhaltende Stresssituationen simuliert.",
    "{4} Statt der erhofften gleichmäßigen Reaktion zeigten die Tiere individuelle Unterschiede — ähnlich wie es auch bei Menschen der Fall ist.",
    "Die gewonnenen Daten könnten nun auf therapeutische Anwendungen beim Menschen übertragen werden. {5} Dennoch sehen die Forscher ihren Ansatz als vielversprechenden Ausgangspunkt für künftige Studien.",
    "{6} Wenn Mimik-Analyse-Systeme ähnlich wie beim Menschen weiterentwickelt werden, könnten sie eines Tages in der Psychiatrie eingesetzt werden, um emotionale Zustände objektiv zu erfassen."
  ],
  qs:[
    {n:1, ans:"e",
     exp:"Satz e): «Mäuse zeigen verblüffend ähnliche physiologische Reaktionen wie Menschen» — erklärt, warum Mäuse als Modell dienen. <em>nämlich</em> = именно (объяснение).",
     textref:"«Der Schlüssel liegt in der biologischen Ähnlichkeit.» → Satz e): <em>nämlich</em> = объяснение этой схожести.",
     rule:"<em>nämlich</em> = именно, а именно (вводит объяснение). Стоит после подлежащего."},
    {n:2, ans:"f",
     exp:"Satz f): «Sie beobachteten dabei, wie sich Mimik, Körperhaltung und Bewegungsverhalten veränderten.» — <em>Sie</em> = die Forscher. Beschreibt die Methode der Auswertung.",
     textref:"«gelang es, mithilfe einer speziellen Software die Mimik auszuwerten» → Satz f): <em>dabei</em> = dabei (bei dieser Auswertung).",
     rule:"<em>dabei</em> = bei dieser Gelegenheit/Tätigkeit. <em>Sie</em> = die Forscher (zuletzt erwähnt)."},
    {n:3, ans:"g",
     exp:"Satz g): «Schließlich wurden die Tiere verschiedenen kontrollierten Stressreizen ausgesetzt.» — <em>Schließlich</em> zeigt Abfolge: nach Auswahl → dann Stressexposition.",
     textref:"«wählten die Wissenschaftler zunächst … eine Gruppe aus» → Satz g): <em>Schließlich</em> = следующий шаг.",
     rule:"<em>zunächst … schließlich</em> = сначала … затем/наконец. Temporale Abfolge."},
    {n:4, ans:"b",
     exp:"Satz b): «Das war zunächst überraschend, denn die Forscher hatten andere Ergebnisse erwartet.» — leitet das unerwartete Ergebnis ein.",
     textref:"Vor der Lücke: Ergebnisse der Stressexposition werden beschrieben → Satz b): <em>Das war überraschend</em> = реакция на неожиданный результат.",
     rule:"<em>denn</em> = потому что (вводит причину). <em>Das</em> = das Ergebnis (Anapher)."},
    {n:5, ans:"d",
     exp:"Satz d): «Jedoch verlaufen solche Übertragungen selten reibungslos, da tierische Modelle nur begrenzt übertragbar sind.» — Einschränkung der Anwendung auf Menschen.",
     textref:"«Die Daten könnten auf therapeutische Anwendungen beim Menschen übertragen werden.» → Satz d): <em>Jedoch</em> = Gegenargument/Einschränkung.",
     rule:"<em>Jedoch</em> = однако (противопоставление). Schränkt die vorherige Aussage ein."},
    {n:6, ans:"c",
     exp:"Satz c): «Diese Erkenntnis könnte helfen, neue Therapieansätze für Menschen mit Angststörungen zu entwickeln.» — Ausblick auf Anwendung.",
     textref:"«sie könnten eines Tages in der Psychiatrie eingesetzt werden» → Satz c): konkretisiert den Nutzen für Angststörungen.",
     rule:"<em>Diese Erkenntnis</em> = Anapher auf das Gesamtergebnis. Ausblick am Textende."}
  ],
  vocab:["das Stimmungsbarometer — индикатор настроения","physiologisch — физиологический","die Mimik — мимика","der Stressreiz — стрессовый раздражитель","reibungslos — беспрепятственно","die Angststörung — тревожное расстройство","abschwächen — ослаблять","reproduzierbar — воспроизводимый"]
};
