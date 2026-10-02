// test-lv1e.js — TELC C1
window.TELC_TEST = {
  id:"lv1_5", type:"Leseverstehen Teil 1", kind:"lv1",
  title:"Schreiben oder tippen — über die Vorteile der Handschrift",
  desc:"6 Satz-Zuordnungen · Textrekonstruktion · C1",
  satze:[
    {id:"z",t:"<strong>z)</strong> «Macht die Schule die Schrift kaputt?» titelte ein Magazin und stieß damit eine große öffentliche Diskussion an. <em>(Beispiel)</em>"},
    {id:"a",t:"<strong>a)</strong> Außerdem sind handschriftliche Notizen schwieriger zu verlieren als digitale Daten."},
    {id:"b",t:"<strong>b)</strong> Damit trainieren Kinder gleichzeitig ihre Motorik und ihr Gehirn."},
    {id:"c",t:"<strong>c)</strong> Dies gilt aber nur unter einer Bedingung: wenn die Schüler die Inhalte in ihren eigenen Worten zusammenfassen, anstatt alles wortwörtlich abzuschreiben."},
    {id:"d",t:"<strong>d)</strong> Es ist schließlich wichtig, den Stift richtig zu halten und jeden Buchstaben sauber zu formen."},
    {id:"e",t:"<strong>e)</strong> Obwohl dieser Befund viele überraschte, erklären Neurowissenschaftler ihn leicht."},
    {id:"f",t:"<strong>f)</strong> Somit geht der erste Schritt in ein Schulleben nach wie vor mit einem Bleistift in der Hand vonstatten."},
    {id:"g",t:"<strong>g)</strong> Traditionell beginnen Kinder in Deutschland und Österreich in der ersten Klasse damit, schreiben zu lernen."},
    {id:"h",t:"<strong>h)</strong> Zu den häufigsten Kritikpunkten gehört, dass Schüler in der Schule zu wenig Zeit zum Üben des Schreibens haben. <em>(passt nicht)</em>"}
  ],
  textps:[
    "Als sich die Schreibmaschine durchsetzte, witzelten manche, die Handschrift werde aussterben. Als dann der Computer kam, schienen diese Prophezeiungen endlich in Erfüllung zu gehen. Doch nun spricht die Wissenschaft ein anderes Machtwort. {0}",
    "{1} Wie lange Kinder das Schreiben mit der Hand üben, ist von Bundesland zu Bundesland unterschiedlich. Umstritten ist in Fachkreisen, ob der Schreibunterricht ausreichend ist.",
    "Tatsächlich sprechen wissenschaftliche Befunde für die Handschrift. Forscher der Universität Washington haben festgestellt: Schüler, die mit der Hand schreiben, verfassen bessere Texte als jene, die tippen. {2} Wer mit der Hand schreibt, muss langsamer vorgehen. Dadurch zwingt man sich, Gedanken zu sortieren, bevor man sie notiert.",
    "Einen weiteren Vorteil der Handschrift haben Forscher der Universität Princeton nachgewiesen: Wer bei Vorlesungen mit der Hand mitschreibt, schneidet bei späteren Wissenstests besser ab als jene, die tippen. {3}",
    "Der Grund liegt in der Komplexität der Handbewegungen. {4} Denn wenn Kinder einen Buchstaben schreiben, aktivieren sie dabei bestimmte Gehirnregionen, die beim Tippen auf der Tastatur stumm bleiben.",
    "{5} Handschrift fördert nachweislich die Kreativität und das abstrakte Denken. Wer mit der Hand schreibt, denkt tiefer nach. {6}",
    "Diese Vorteile erklären, warum viele Experten fordern, den Schreibunterricht in Schulen auszubauen — trotz der Allgegenwart digitaler Geräte."
  ],
  qs:[
    {n:1,ans:"g",
     exp:"Satz g): «Traditionell beginnen Kinder in Deutschland und Österreich in der ersten Klasse damit, schreiben zu lernen.» — Einleitung zum Thema Schreibunterricht in Schulen.",
     textref:"«Wie lange Kinder das Schreiben mit der Hand üben, ist von Bundesland zu Bundesland unterschiedlich.» → Satz g) führt ein: zuerst lernen Kinder in Klasse 1.",
     rule:"Temporale Abfolge: Satz g) gibt Hintergrundinformation → dann Aussage über regionale Unterschiede."},
    {n:2,ans:"e",
     exp:"Satz e): «Obwohl dieser Befund viele überraschte, erklären Neurowissenschaftler ihn leicht.» — <em>dieser Befund</em> = der zuvor genannte Forschungsbefund.",
     textref:"«Schüler, die mit der Hand schreiben, verfassen bessere Texte» → <em>dieser Befund</em> in Satz e) = dieses Ergebnis.",
     rule:"<em>dieser Befund</em> = Anapher auf das Forschungsergebnis. <em>Obwohl</em> = хотя (уступительный союз)."},
    {n:3,ans:"c",
     exp:"Satz c): «Dies gilt aber nur unter einer Bedingung: wenn die Schüler … in eigenen Worten zusammenfassen.» — Einschränkung des Vorteils.",
     textref:"«Wer mit der Hand mitschreibt, schneidet besser ab» → Satz c): <em>Dies gilt aber nur unter einer Bedingung</em>.",
     rule:"<em>Dies gilt aber nur</em> = Einschränkung. <em>aber</em> signalisiert Gegenargument/Bedingung."},
    {n:4,ans:"d",
     exp:"Satz d): «Es ist schließlich wichtig, den Stift richtig zu halten und jeden Buchstaben sauber zu formen.» — erklärt die Komplexität der Handbewegungen.",
     textref:"«Der Grund liegt in der Komplexität der Handbewegungen.» → Satz d) erklärt diese Komplexität konkret.",
     rule:"Kausalität: Behauptung (Komplexität) → Erklärung (Satz d). <em>schließlich</em> = ведь, в конце концов."},
    {n:5,ans:"f",
     exp:"Satz f): «Somit geht der erste Schritt in ein Schulleben nach wie vor mit einem Bleistift in der Hand vonstatten.» — Schlussfolgerung zur Wichtigkeit der Handschrift.",
     textref:"«Handschrift fördert nachweislich die Kreativität und das abstrakte Denken.» → Satz f): <em>Somit</em> = вследствие этого.",
     rule:"<em>Somit</em> = следовательно (Schlussfolgerung). Konnektive Funktion am Satzanfang."},
    {n:6,ans:"a",
     exp:"Satz a): «Außerdem sind handschriftliche Notizen schwieriger zu verlieren als digitale Daten.» — weiterer Vorteil der Handschrift.",
     textref:"«Wer mit der Hand schreibt, denkt tiefer nach.» → Satz a) fügt weiteren Vorteil hinzu: <em>Außerdem</em>.",
     rule:"<em>Außerdem</em> = кроме того (добавление). Логическое продолжение списка преимуществ."}
  ],
  vocab:["die Prophezeiung — пророчество","der Befund — результат (исследования)","nachweisen — доказывать, устанавливать","abstrakt — абстрактный","vonstatten gehen — происходить, протекать","nach wie vor — по-прежнему"]
};
