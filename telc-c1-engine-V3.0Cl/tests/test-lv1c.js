// test-lv1c.js — TELC C1
window.TELC_TEST = {
  id:"lv1_3", type:"Leseverstehen Teil 1", kind:"lv1",
  title:"Die Hamburger-Hypothese",
  desc:"6 Satz-Zuordnungen · Textrekonstruktion · C1",
  satze:[
    {id:"z",t:"<strong>z)</strong> Weil der Burger eine amerikanische Ikone ist, haben etliche US-Städte Anspruch auf die Vaterschaft erhoben. <em>(Beispiel)</em>"},
    {id:"a",t:"<strong>a)</strong> Beweisen lässt es sich zwar nicht, aber dass der Hamburger an Bord eines Auswandererschiffs erfunden wurde, ist bislang die wahrscheinlichste Annahme."},
    {id:"b",t:"<strong>b)</strong> Diese beiden Beispiele zeigen, dass gehacktes Fleisch wohl generell als Hamburg bezeichnet wurde."},
    {id:"c",t:"<strong>c)</strong> Diese besagt, dass die aus dieser Stadt stammenden Brüder Frank und Charles Menches Ende des 19. Jahrhunderts den Burger erfunden haben sollen."},
    {id:"d",t:"<strong>d)</strong> Ebenso liegt die Vermutung nahe, dass ein Ort namens Hamburg dem Burger seinen Namen gab."},
    {id:"e",t:"<strong>e)</strong> In vielen amerikanischen Kochbüchern aus dieser Zeit findet man Rezepte für seine Zubereitung."},
    {id:"f",t:"<strong>f)</strong> Kochen war dort vermutlich schwierig – doch pur und ohne Beilagen schmeckte das zähe Pökelfleisch nicht besonders."},
    {id:"g",t:"<strong>g)</strong> Noch immer wird der Name Hamburger oft irrtümlich auf das Wort <em>ham</em> (Englisch für Schinken) zurückgeführt."},
    {id:"h",t:"<strong>h)</strong> Tatsächlich wurde wohl in keiner dieser Städte der erste Burger serviert, denn ein ähnliches Gericht gab es schon früher."}
  ],
  textps:[
    "«Heißen Leute aus Hamburg wirklich Hamburger?» Jeder Hanseat, der die Vereinigten Staaten bereist, muss sich diese Frage stellen lassen. {0} Das Städtchen Seymour in Wisconsin etwa verweist stolz darauf, der Imbiss-Betreiber Charlie Nagreen habe 1885 die ersten flachgedrückten Fleischbällchen serviert.",
    "Eine ähnliche Geschichte tischt die Gemeinde Hamburg (Bundesstaat New York) der Öffentlichkeit auf: {1} Dokumente, die das beweisen, haben Hamburg und Seymour bislang ebenso wenig vorlegen können wie zahlreiche weitere Städte.",
    "{2} Bereits 50 Jahre zuvor kannte man das Hamburg Steak, das der Vorläufer des Hamburgers gewesen sein dürfte. In New Yorks Restaurant Delmonico's soll bereits 1834 ein solches auf der Karte gestanden haben.",
    "Als gesichert gilt hingegen, dass das Hamburg Steak Anfang des 20. Jahrhunderts in den USA ein gängiges Gericht war. {3} In einer Rezeptsammlung von 1911 ist das Hamburg Steak eine zu Kugeln geformte Hacksmasse. {4}",
    "Das Oxford English Dictionary von 1802 definierte Hamburg Steak als gepökeltes Rindfleisch. Es ist plausibel anzunehmen, dass die Hunderttausenden von Auswanderern, die über die Hansestadt in die USA verschifft wurden, das Fleisch als Proviant mit sich führten.",
    "Die Verpflegung an Bord war miserabel, zumindest für die weniger betuchten Zwischendeck-Passagiere. {5} Was lag da näher, als es in Streifen zu schneiden und – mangels Teller und Besteck – zwischen zwei Scheiben Brot zu klemmen?",
    "{6} Die Immigranten-Notverpflegung wäre dann zwischenzeitlich bei Delmonico's zum Gourmet-Schmankerl der US-Oberschicht aufgestiegen."
  ],
  qs:[
    {n:1,ans:"c",
     exp:"Satz c): «Diese besagt, dass die Brüder Menches den Burger erfunden haben sollen.» — <em>Diese</em> (fem.) = die Geschichte (fem., zuletzt erwähnt).",
     textref:"«Eine ähnliche Geschichte tischt die Gemeinde Hamburg auf» → <em>Diese</em> in Satz c) = diese Geschichte.",
     rule:"<em>Diese</em> (fem., Nom.) → bezieht sich auf <em>die Geschichte</em> (fem.). Genus beachten!"},
    {n:2,ans:"h",
     exp:"Satz h): «Tatsächlich wurde wohl in keiner dieser Städte der erste Burger serviert, denn ein ähnliches Gericht gab es schon früher.» — Überleitung zu «50 Jahre zuvor».",
     textref:"«Keine Beweise» → Satz h): tatsächlich war das Gericht schon früher bekannt. <em>denn</em> = ведь.",
     rule:"<em>denn</em> = потому что, ведь. Kausale Begründung für die Skepsis gegenüber allen Städten."},
    {n:3,ans:"e",
     exp:"Satz e): «In vielen amerikanischen Kochbüchern … findet man Rezepte für seine Zubereitung.» — <em>seine</em> = das Hamburg Steaks. Belegt «ein gängiges Gericht».",
     textref:"«das Hamburg Steak … war ein gängiges Gericht» → Satz e) belegt das mit Kochbüchern. <em>seine</em> = das Steaks.",
     rule:"<em>seine</em> (mask.) = das Hamburg Steaks. Satz e) liefert den Quellenbeleg."},
    {n:4,ans:"b",
     exp:"Satz b): «Diese beiden Beispiele zeigen…» — <em>diese beiden Beispiele</em> = Delmonico's (1834) + Rezeptsammlung (1911). Fazit nach zwei Quellen.",
     textref:"Delmonico's 1834 + Rezeptsammlung 1911 → Satz b) zieht Fazit: «diese beiden Beispiele».",
     rule:"<em>Diese beiden Beispiele</em> → fasst zwei genannte Quellen zusammen. Klassischer Fazit-Satz."},
    {n:5,ans:"f",
     exp:"Satz f): «Kochen war dort vermutlich schwierig – doch pur schmeckte das zähe Pökelfleisch nicht besonders.» — <em>dort</em> = an Bord. Erklärt, warum Brot als Lösung diente.",
     textref:"«Die Verpflegung an Bord war miserabel» → <em>dort</em> = an Bord. Kausalität: schwieriges Kochen + schlechter Geschmack → Brot.",
     rule:"<em>dort</em> = an Bord. Kausalität: Problem → Lösung im nächsten Satz."},
    {n:6,ans:"a",
     exp:"Satz a): «Beweisen lässt es sich zwar nicht, aber … ist bislang die wahrscheinlichste Annahme.» — relativierende Schlussfolgerung der gesamten Hypothese.",
     textref:"Gesamte Argumentation → Satz a): <em>zwar … aber</em> = хотя ... но. Einschränkende Schlussfolgerung.",
     rule:"Struktur: <em>zwar … aber</em> = хотя ... но. Schlusssatz mit Einschränkung. Typisch für LV1-Schlusssatz."}
  ],
  vocab:["die Vaterschaft — авторство, происхождение","sich rühmen — хвалиться","gängig — распространённый","das Pökelfleisch — солёное мясо","der Proviant — провизия, паёк","miserabel — ужасный, скверный"]
};
