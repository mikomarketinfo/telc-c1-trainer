// test-lv1a.js — TELC C1
window.TELC_TEST = {
  id:"lv1_1", type:"Leseverstehen Teil 1", kind:"lv1",
  title:"Eine Box verändert die Welt",
  desc:"6 Satz-Zuordnungen · Textrekonstruktion · C1",
  satze:[
    {id:"z",t:"<strong>z)</strong> Smartphones aus China, T-Shirts aus Bangladesch, Bananen aus Nicaragua. <em>(Beispiel — Lücke 0)</em>"},
    {id:"a",t:"<strong>a)</strong> Die Größe, die er für seine Transportbehälter gewählt hatte, wurde zum Standard."},
    {id:"b",t:"<strong>b)</strong> Dieses erhoffte sich von den Containern logistische Verbesserungen in der Sicherung des Nachschubs."},
    {id:"c",t:"<strong>c)</strong> Doch sie waren am Streit über die Abmessungen der Container und an streikenden Hafenarbeitern gescheitert."},
    {id:"d",t:"<strong>d)</strong> Es sollte genau dieser Umstand sein, dem sie in der Folge ihre Beschäftigung verdanken würden."},
    {id:"e",t:"<strong>e)</strong> Für die Hafenarbeiter war das nicht nur Schwerstarbeit, sondern lebensgefährlich."},
    {id:"f",t:"<strong>f)</strong> Gesteuert und auf ihrer Reise verfolgt werden diese dabei von Computern und globalen Logistiksystemen."},
    {id:"g",t:"<strong>g)</strong> Handelsrechtliche Überlegungen dieser Art konnten ihren Siegeszug nicht aufhalten."},
    {id:"h",t:"<strong>h)</strong> In den 1960er Jahren betrug der Warenhandel weniger als 20 Prozent der globalen Wirtschaftsleistung."}
  ],
  textps:[
    "Eine gewellte Stahlbox, zwölf Meter lang, drei Meter hoch und genauso breit. Sie ist zum greifbaren Symbol der Globalisierung geworden. Millionen von Containern kreuzen auf immer größeren Schiffen auf den Weltmeeren: {0}",
    "Der Container hat das Transportwesen revolutioniert. Bis in die 50er Jahre war es üblich, Waren einzeln zu transportieren oder sie in Säcke oder Kisten zu verladen. Für die Hafenarbeiter war das nicht nur Schwerstarbeit. {1} Immer wieder passierten nämlich in den großen Häfen der Welt schwere Unfälle.",
    "Es dauerte zehn Tage, bis die &bdquo;Warrior&rdquo; beladen war – genauso lange wie die Überfahrt. Zwar hatte es bereits seit Jahrzehnten Bemühungen gegeben, den Transport effizienter zu gestalten. {2} Erst einem US-amerikanischen Unternehmer gelang es, gemeinsam mit der Marine die Idee einer universellen Transportbox durchzusetzen.",
    "Am 26. April 1956 schipperte Malcolm McLean mit einem umgebauten Tanker von Port Newark Richtung Texas. An Bord waren 56 Container. {3} Diese 40-Fuß-Container sind noch heute täglich in Gebrauch.",
    "Dass McLean erfolgreich war, lag auch an dem mächtigen Kunden an seiner Seite, dem amerikanischen Militär. {4} McLean überzeugte schließlich die Betreiber des Hafens von New York.",
    "Heute reisen rund 90 Prozent der Güter, die über die Meere verschifft werden, in Containern. {5} Der Container reduzierte die Transportkosten auf einen Bruchteil.",
    "{6} Heute macht er ungefähr die Hälfte des Welthandels aus."
  ],
  qs:[
    {n:1,ans:"e",
     exp:"Satz e): «Für die Hafenarbeiter war das nicht nur Schwerstarbeit, sondern lebensgefährlich.» — <em>das</em> = das Schleppen von Hand (vorheriger Satz). Ergänzt den Gedanken.",
     textref:"«Bis in die 50er Jahre war es üblich, Waren einzeln zu transportieren … Für die Hafenarbeiter war das nicht nur Schwerstarbeit.» → Satz e) ergänzt: «sondern lebensgefährlich».",
     rule:"Strategie: Pronomen <em>das/dies/es</em> verweist auf Vorheriges. Suche den Satz, der die Aussage logisch fortsetzt."},
    {n:2,ans:"c",
     exp:"Satz c): «Doch sie waren am Streit … gescheitert.» — <em>sie</em> (Plural, fem.) = die Bemühungen. <em>Doch</em> signalisiert Gegenargument: Bemühungen gab es, aber sie scheiterten.",
     textref:"«Zwar hatte es bereits seit Jahrzehnten Bemühungen gegeben …» → <em>Doch sie</em> (= die Bemühungen) «waren gescheitert».",
     rule:"<em>Doch</em> + Pronomen → Gegenargument. Genus-Übereinstimmung: <em>sie</em> (Pl.) = die Bemühungen (Pl. fem.)."},
    {n:3,ans:"a",
     exp:"Satz a): «Die Größe, die <em>er</em> gewählt hatte, wurde zum Standard.» — <em>er</em> = McLean (zuletzt erwähnt). Zeitlogik: 56 Container → dann Standard.",
     textref:"«Am 26. April 1956 schipperte Malcolm McLean … An Bord waren 56 Container.» → <em>er</em> in Satz a) = McLean.",
     rule:"Pronomen <em>er</em> → letzter Mannesname im Text = McLean. Zeitliche Abfolge beachten."},
    {n:4,ans:"b",
     exp:"Satz b): «Dieses erhoffte sich … logistische Verbesserungen …» — <em>Dieses</em> (Neutrum) = das amerikanische Militär (Neutrum).",
     textref:"«dem amerikanischen Militär» → <em>Dieses</em> (Neutr., Nom.) in Satz b) = das Militär.",
     rule:"Genus: <em>Dieses</em> (Neutr.) → das Militär (Neutr.). Genus-Übereinstimmung ist der Schlüssel!"},
    {n:5,ans:"f",
     exp:"Satz f): «Gesteuert und verfolgt werden <em>diese</em> von Computern …» — <em>diese</em> (Plural) = die Container (90% der Güter).",
     textref:"«Heute reisen rund 90 Prozent der Güter … in Containern.» → <em>diese</em> in Satz f) = die Container.",
     rule:"Passiv mit Partizip am Satzanfang (C1-Merkmal). <em>diese</em> (Plural) = Container."},
    {n:6,ans:"h",
     exp:"Satz h): «In den 1960er Jahren betrug der Warenhandel weniger als 20 Prozent …» — baut Kontrast zu «Heute macht er die Hälfte aus» (Folgesatz) auf.",
     textref:"«Heute macht er ungefähr die Hälfte des Welthandels aus.» ← Satz h) liefert den historischen Kontrast: 1960er vs. heute.",
     rule:"Zeitlicher Kontrast: «1960er» (Satz h) vs. «heute» (Folgesatz). Statistik baut Kontrast auf."}
  ],
  vocab:["revolutionieren — совершать революцию в","die Abmessung — размер, габарит","der Nachschub — снабжение, подвоз","auf einen Bruchteil reduzieren — сократить до доли","die Bemühung — усилие, попытка"]
};
