// tests/manifest.js
// ══════════════════════════════════════════════════════════════
// ЕДИНСТВЕННЫЙ ФАЙЛ для изменения при добавлении нового теста.
// tests-pdf.html больше не трогать!
//
// Формат строки:
// {id:"уникальный_id", type:"Тип", title:"Название", desc:"Описание", file:"tests/test-xxx.js"},
//
// Типы: "Sprachbausteine" | "Leseverstehen Teil 1" | "Leseverstehen Teil 2" | "Leseverstehen Teil 3"
// ══════════════════════════════════════════════════════════════

var TESTS_MANIFEST = [

  // ── SPRACHBAUSTEINE ─────────────────────────────────────────
  {id:"sb1",  type:"Sprachbausteine",      title:'Wer hat das "Handy" erfunden?',            desc:"22 Lücken · C1", file:"tests/test-sb1.js"},
  {id:"sb2",  type:"Sprachbausteine",      title:"Das Gehirn des Rauchers",                  desc:"22 Lücken · C1", file:"tests/test-sb2.js"},
  {id:"sb3",  type:"Sprachbausteine",      title:"Neues aus der Bionik",                     desc:"22 Lücken · C1", file:"tests/test-sb3.js"},

  // ── LESEVERSTEHEN TEIL 1 ─────────────────────────────────────
  {id:"lv1a", type:"Leseverstehen Teil 1", title:"Eine Box verändert die Welt",              desc:"6 Lücken · C1",  file:"tests/test-lv1a.js"},
  {id:"lv1b", type:"Leseverstehen Teil 1", title:"Satzzeichen, mächtige Werkzeuge",          desc:"6 Lücken · C1",  file:"tests/test-lv1b.js"},
  {id:"lv1c", type:"Leseverstehen Teil 1", title:"Die Hamburger-Hypothese",                  desc:"6 Lücken · C1",  file:"tests/test-lv1c.js"},
  {id:"lv1d", type:"Leseverstehen Teil 1", title:"Werbung in der Marktwirtschaft",           desc:"6 Lücken · C1",  file:"tests/test-lv1d.js"},
  {id:"lv1e", type:"Leseverstehen Teil 1", title:"Schreiben oder tippen",                    desc:"6 Lücken · C1",  file:"tests/test-lv1e.js"},
  {id:"lv1f", type:"Leseverstehen Teil 1", title:"Keramik für Millionen",                    desc:"6 Lücken · C1",  file:"tests/test-lv1f.js"},
  {id:"lv1g", type:"Leseverstehen Teil 1", title:"Für eine neue Sprache ist es nie zu spät", desc:"6 Lücken · C1",  file:"tests/test-lv1g.js"},
  {id:"lv1h", type:"Leseverstehen Teil 1", title:"Piraten — damals und heute",               desc:"6 Lücken · C1",  file:"tests/test-lv1h.js"},

  // ── LESEVERSTEHEN TEIL 2 ─────────────────────────────────────
  {id:"lv2a", type:"Leseverstehen Teil 2", title:"Welche Bedeutung haben Träume?",           desc:"6 Fragen · C1",  file:"tests/test-lv2a.js"},
  {id:"lv2b", type:"Leseverstehen Teil 2", title:"Selbermachen als Trend",                   desc:"6 Fragen · C1",  file:"tests/test-lv2b.js"},
  {id:"lv2c", type:"Leseverstehen Teil 2", title:"Stress im Studium bewältigen",             desc:"6 Fragen · C1",  file:"tests/test-lv2c.js"},
  {id:"lv2d", type:"Leseverstehen Teil 2", title:"Was ist ein Artega?",                      desc:"6 Fragen · C1",  file:"tests/test-lv2d.js"},
  {id:"lv2e", type:"Leseverstehen Teil 2", title:"Zwischen Familie und Studium",             desc:"6 Fragen · C1",  file:"tests/test-lv2e.js"},

  // ── LESEVERSTEHEN TEIL 3 ─────────────────────────────────────
  {id:"lv3a", type:"Leseverstehen Teil 3", title:"Zukunftsperspektiven Verpackung",          desc:"11+1 · C1",      file:"tests/test-lv3a.js"},
  {id:"lv3b", type:"Leseverstehen Teil 3", title:"Camping — ein Trend mit Geschichte",       desc:"11+1 · C1",      file:"tests/test-lv3b.js"},
  {id:"lv3c", type:"Leseverstehen Teil 3", title:"MINT-Fächer: Nachwuchs gesucht",          desc:"11+1 · C1",      file:"tests/test-lv3c.js"},
  {id:"lv3d", type:"Leseverstehen Teil 3", title:"Die Spielzeugindustrie im Wandel",         desc:"11+1 · C1",      file:"tests/test-lv3d.js"},
  {id:"lv3e", type:"Leseverstehen Teil 3", title:"Sabbatical — Auszeit vom Beruf",           desc:"11+1 · C1",      file:"tests/test-lv3e.js"},
  {id:"lv3f", type:"Leseverstehen Teil 3", title:"Alter ist nicht gleich Alter",             desc:"11+1 · C1",      file:"tests/test-lv3f.js"},
  {id:"lv3g", type:"Leseverstehen Teil 3", title:"Macht Reisen wirklich glücklich?",         desc:"11+1 · C1",      file:"tests/test-lv3g.js"},

  // ── NEU BATCH 2 ─────────────────────────────────────────────
  {id:"lv2f", type:"Leseverstehen Teil 2", title:"Du bist, was du isst",                     desc:"6 Fragen · C1",  file:"tests/test-lv2f.js"},
  {id:"lv3h", type:"Leseverstehen Teil 3", title:"Essen in der Mensa — Hochschulgastronomie", desc:"11+1 · C1",      file:"tests/test-lv3h.js"},
  {id:"sb4",  type:"Sprachbausteine",      title:"Ehrenamt in Deutschland",                   desc:"22 Lücken · C1", file:"tests/test-sb4.js"},
  {id:"lv1i", type:"Leseverstehen Teil 1", title:"Die Maus als Stimmungsbarometer",           desc:"6 Lücken · C1",  file:"tests/test-lv1i.js"},

  // ── NEU BATCH 3 ─────────────────────────────────────────────
  {id:"lv1j", type:"Leseverstehen Teil 1", title:"Höhlenforschung: Expeditionen ins Erdinnere", desc:"6 Lücken · C1",  file:"tests/test-lv1j.js"},
  {id:"lv2g", type:"Leseverstehen Teil 2", title:'Dann geh doch zu Fuß, Schatz!',             desc:"6 Fragen · C1",  file:"tests/test-lv2g.js"},
  {id:"lv3i", type:"Leseverstehen Teil 3", title:"Zweisprachig aufwachsen — Fluch oder Segen?", desc:"11+1 · C1",    file:"tests/test-lv3i.js"},
  {id:"sb5",  type:"Sprachbausteine",      title:"Plastik im Ozean — ein globales Problem",   desc:"22 Lücken · C1", file:"tests/test-sb5.js"},

  // ── NEU BATCH 4 ─────────────────────────────────────────────
  {id:"lv1k", type:"Leseverstehen Teil 1", title:"Auf Goldsuche in Deutschland",              desc:"6 Lücken · C1",  file:"tests/test-lv1k.js"},
  {id:"lv2h", type:"Leseverstehen Teil 2", title:"Hirndoping an deutschen Hochschulen",       desc:"6 Fragen · C1",  file:"tests/test-lv2h.js"},
  {id:"lv3j", type:"Leseverstehen Teil 3", title:"Haben Navis unser Gehirn verändert?",       desc:"11+1 · C1",      file:"tests/test-lv3j.js"},
  {id:"sb6",  type:"Sprachbausteine",      title:"E-Learning an deutschen Hochschulen",       desc:"22 Lücken · C1", file:"tests/test-sb6.js"},

  // ── NEU BATCH 5 ─────────────────────────────────────────────
  {id:"lv1l", type:"Leseverstehen Teil 1", title:"Der Lift — eine Würdigung",                 desc:"6 Lücken · C1",  file:"tests/test-lv1l.js"},
  {id:"lv2i", type:"Leseverstehen Teil 2", title:"Helikopter-Eltern — zu viel Fürsorge",      desc:"6 Fragen · C1",  file:"tests/test-lv2i.js"},
  {id:"lv3k", type:"Leseverstehen Teil 3", title:"Geisteswissenschaften — ein Studium ohne Zukunft?", desc:"11+1 · C1", file:"tests/test-lv3k.js"},
  {id:"sb7",  type:"Sprachbausteine",      title:"Schlaftypen: Eulen und Lerchen",            desc:"22 Lücken · C1", file:"tests/test-sb7.js"},

  // ── NEU BATCH 6 (FINAL) ─────────────────────────────────────
  {id:"lv1m", type:"Leseverstehen Teil 1", title:"Wie Zimmerpflanzen das Wohnzimmer eroberten", desc:"6 Lücken · C1",  file:"tests/test-lv1m.js"},
  {id:"lv2j", type:"Leseverstehen Teil 2", title:"Abschlussarbeiten — Sinn oder Unsinn?",       desc:"6 Fragen · C1",  file:"tests/test-lv2j.js"},
  {id:"lv3l", type:"Leseverstehen Teil 3", title:"Kleingärten — grüne Oasen in der Stadt",      desc:"11+1 · C1",      file:"tests/test-lv3l.js"},

  // ── GRAMMATIK ────────────────────────────────────────────────
  {id:"gr1",  type:"Grammatik", title:"Modalsatz: indem · dadurch dass · ohne dass",           desc:"10 Aufgaben · C1", file:"tests/test-gr1.js"},
  {id:"gr2",  type:"Grammatik", title:"Konzessivsatz: obwohl · wenngleich · auch wenn",        desc:"10 Aufgaben · C1", file:"tests/test-gr2.js"},
  {id:"gr3",  type:"Grammatik", title:"Konsekutiv & Konditional: sodass · sofern · es sei denn", desc:"10 Aufgaben · C1", file:"tests/test-gr3.js"},
  {id:"gr4",  type:"Grammatik", title:"Konjunktiv I: Indirekte Rede",                          desc:"10 Aufgaben · C1", file:"tests/test-gr4.js"},
  {id:"gr5",  type:"Grammatik", title:"Konjunktiv II: Irrealis · hätte sollen · wäre worden",  desc:"10 Aufgaben · C1", file:"tests/test-gr5.js"},
  {id:"gr6",  type:"Grammatik", title:"Passiv: Vorgangspassiv · Zustandspassiv · Modalpassiv", desc:"10 Aufgaben · C1", file:"tests/test-gr6.js"},
  {id:"gr7",  type:"Grammatik", title:"Partizipialkonstruktionen: Partizip I & II als Attribut", desc:"10 Aufgaben · C1", file:"tests/test-gr7.js"},
  {id:"gr8",  type:"Grammatik", title:"Funktionsverbgefüge: zur Verfügung · in Frage · in Kauf", desc:"10 Aufgaben · C1", file:"tests/test-gr8.js"},
  {id:"gr9",  type:"Grammatik", title:"Temporalsatz & Adversativsatz: sobald · seitdem · wohingegen", desc:"10 Aufgaben · C1", file:"tests/test-gr9.js"},
  {id:"gr10", type:"Grammatik", title:"Konnektoren des formellen Textes: demzufolge · zumal",  desc:"10 Aufgaben · C1", file:"tests/test-gr10.js"}

  // ── NEUE TESTS HIER HINZUFÜGEN ───────────────────────────────

];
