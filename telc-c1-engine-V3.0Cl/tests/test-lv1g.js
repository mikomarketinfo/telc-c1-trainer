// test-lv1g.js — TELC C1
window.TELC_TEST = {
  id:"lv1_7", type:"Leseverstehen Teil 1", kind:"lv1",
  title:"Für eine neue Sprache ist es nie zu spät",
  desc:"6 Satz-Zuordnungen · Textrekonstruktion · C1",
  satze:[
    {id:"z",t:"<strong>z)</strong> Für die Aneignung einer Fremdsprache scheint es im Kindesalter besonders günstige Bedingungen zu geben. <em>(Beispiel)</em>"},
    {id:"a",t:"<strong>a)</strong> Das kann man an der überwältigenden Mehrheit erfolgreicher Sprachlerner im Erwachsenenalter ablesen."},
    {id:"b",t:"<strong>b)</strong> Dabei haben Erwachsene gegenüber Kindern sogar einige entscheidende Vorteile."},
    {id:"c",t:"<strong>c)</strong> Denn Kinder lernen eine Sprache unbewusst durch ständige Konfrontation mit ihr."},
    {id:"d",t:"<strong>d)</strong> Diese verändert sich mit zunehmendem Alter und wird starrer."},
    {id:"e",t:"<strong>e)</strong> Er kann Grammatikregeln schnell verstehen und gezielt einsetzen."},
    {id:"f",t:"<strong>f)</strong> Regelmäßiges Üben und Motivation sind dabei wichtiger als das Lernalter."},
    {id:"g",t:"<strong>g)</strong> So bleibt die Plastizität des Gehirns ein entscheidender Faktor beim Spracherwerb."},
    {id:"h",t:"<strong>h)</strong> Jedoch ist das Kindheitslernen keineswegs dem Erwachsenenlernen überlegen. <em>(passt nicht)</em>"}
  ],
  textps:[
    "Kinder lernen Sprachen wie Schwämme — mühelos und ohne Akzent. Zumindest glaubt man das. {0} Neurowissenschaftler sprechen von einer sogenannten sensitiven Phase, in der das Gehirn besonders aufnahmefähig für neue Sprachstrukturen ist.",
    "Doch was steckt wirklich dahinter? {1} Im Kindesalter ist das Gehirn flexibler und kann neue Muster leichter abspeichern. {2} Erwachsene hingegen brauchen mehr bewusste Auseinandersetzung mit dem Lernstoff.",
    "Entgegen dem weit verbreiteten Glauben bedeutet das aber nicht, dass Erwachsene schlechtere Sprachlerner sind. {3} So bringen sie ein enormes Vorwissen über Sprachstrukturen mit, das Kindern fehlt.",
    "Zum einen verfügt ein erwachsener Lerner über ein ausgeprägtes Sprachbewusstsein. {4} Zum anderen kann er auf Lernstrategien zurückgreifen, die sich im Laufe seines Lebens bewährt haben.",
    "Die entscheidende Variable ist also weniger das Alter als die Intensität des Kontakts mit der Zielsprache. {5} Wer täglich mit einer Sprache in Berührung kommt und sie aktiv verwendet, macht rasche Fortschritte — unabhängig vom Alter.",
    "{6} Wer also denkt, mit 40 oder 50 Jahren sei es zu spät, eine neue Sprache zu lernen, liegt schlicht falsch. Mit der richtigen Methode und ausreichend Übung ist sprachlicher Erfolg in jedem Lebensalter möglich."
  ],
  qs:[
    {n:1,ans:"d",
     exp:"Satz d): «Diese verändert sich mit zunehmendem Alter und wird starrer.» — <em>Diese</em> (fem.) = die Plastizität (fem.) des Gehirns.",
     textref:"«Neurowissenschaftler sprechen von einer … sensitiven Phase, in der das Gehirn besonders aufnahmefähig» → Satz d): <em>Diese</em> = die (sensitive Phase / Plastizität).",
     rule:"<em>Diese</em> (fem.) → bezieht sich auf zuletzt genanntes feminines Substantiv. Genus-Check!"},
    {n:2,ans:"c",
     exp:"Satz c): «Denn Kinder lernen eine Sprache unbewusst durch ständige Konfrontation mit ihr.» — erklärt, warum Gehirn im Kindesalter flexibler ist.",
     textref:"«Im Kindesalter ist das Gehirn flexibler» → Satz c): <em>Denn</em> + unbewusstes Lernen = Erklärung.",
     rule:"<em>Denn</em> = потому что. Kausalerklärung für die Flexibilität des Kindergehirns."},
    {n:3,ans:"b",
     exp:"Satz b): «Dabei haben Erwachsene gegenüber Kindern sogar einige entscheidende Vorteile.» — Überraschungsmoment: Erwachsene besser als erwartet.",
     textref:"«Erwachsene schlechtere Sprachlerner sind» (Negation) → Satz b): Gegenteil — Erwachsene haben Vorteile.",
     rule:"<em>sogar</em> = даже (усиление). Satz b) leitet Umkehrung ein: nicht schlechter, sondern besser."},
    {n:4,ans:"e",
     exp:"Satz e): «Er kann Grammatikregeln schnell verstehen und gezielt einsetzen.» — <em>er</em> = der erwachsene Lerner.",
     textref:"«ein erwachsener Lerner über ein ausgeprägtes Sprachbewusstsein» → Satz e): <em>Er</em> = dieser Lerner.",
     rule:"<em>Er</em> (mask.) → der erwachsene Lerner (mask.). Pronomen + logische Folge der Eigenschaft."},
    {n:5,ans:"f",
     exp:"Satz f): «Regelmäßiges Üben und Motivation sind dabei wichtiger als das Lernalter.» — benennt die entscheidenden Faktoren.",
     textref:"«Die entscheidende Variable ist also weniger das Alter als die Intensität» → Satz f) konkretisiert: Üben + Motivation > Alter.",
     rule:"<em>dabei</em> = dabei, in diesem Zusammenhang. Präzisierung der vorherigen Aussage."},
    {n:6,ans:"g",
     exp:"Satz g): «So bleibt die Plastizität des Gehirns ein entscheidender Faktor beim Spracherwerb.» — Fazit des gesamten Abschnitts.",
     textref:"«Wer täglich mit einer Sprache in Berührung kommt … macht rasche Fortschritte» → Satz g): <em>So</em> = als Schlussfolgerung.",
     rule:"<em>So bleibt</em> = таким образом остаётся. Schlussfolgerung/Fazit am Abschnittende."}
  ],
  vocab:["die sensitive Phase — сенситивный период","die Plastizität — пластичность","aufnahmefähig — восприимчивый","das Sprachbewusstsein — языковое сознание","die Zielsprache — целевой язык","starr — жёсткий, негибкий","sich bewähren — оправдываться, подтверждать свою ценность"]
};
