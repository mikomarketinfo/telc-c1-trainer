// test-lv2f.js — Leseverstehen Teil 2
window.TELC_TEST = {
  id:"lv2f", type:"Leseverstehen Teil 2", kind:"lv2",
  title:"Du bist, was du isst",
  desc:"6 Fragen · In welchem Abschnitt? · C1",
  textps:[
    "<strong>Abschnitt a:</strong> Sind Sie auch ein Mensch, der sich beim Einkaufen von attraktiven Verpackungen verführen lässt? Greifen Sie lieber zu dem bunten Joghurt im Sonderangebot, statt zum schlichten Bio-Produkt? Seien Sie ehrlich: Vielen von uns geht es so. Dabei wissen wir eigentlich alle, dass gesunde Ernährung wichtig ist — und trotzdem fällt es uns schwer, die richtigen Entscheidungen zu treffen.",
    "<strong>Abschnitt b:</strong> Wissenschaftler haben herausgefunden, dass unsere Essgewohnheiten weit mehr über uns verraten, als wir denken. Menschen, die viel frisches Obst und Gemüse essen, berichten häufiger von positiver Grundstimmung und höherer Lebensqualität. Wer dagegen regelmäßig Fast Food konsumiert, zeigt nachweislich höhere Stresswerte. «Wir essen nicht nur, um satt zu werden — Essen ist auch Kommunikation, Trost und Identität», sagt Ernährungspsychologin Dr. Nina Hartmann.",
    "<strong>Abschnitt c:</strong> Besonders interessant ist der Einfluss der Ernährung auf das Gehirn. Omega-3-Fettsäuren, die vor allem in fettem Fisch vorkommen, fördern nachweislich die kognitive Leistungsfähigkeit. Antioxidantien aus Beeren und Nüssen schützen die Nervenzellen vor frühzeitigem Abbau. Umgekehrt belastet zu viel Zucker das Gehirn: Er kann Entzündungsprozesse auslösen, die langfristig das Gedächtnis beeinträchtigen.",
    "<strong>Abschnitt d:</strong> Doch was ist eigentlich «gesunde Ernährung»? Die Antwort darauf ist komplizierter als es scheint. Während die Mittelmeerdiät jahrelang als ideales Ernährungsmodell galt, zeigen neuere Studien, dass es keine universelle Lösung gibt. Jeder Mensch verstoffwechselt Nahrungsmittel unterschiedlich — bedingt durch Genetik, Darmflora und Lebensstil. Was für eine Person optimal ist, kann für eine andere kaum Wirkung zeigen.",
    "<strong>Abschnitt e:</strong> Experten empfehlen deshalb, auf die eigenen Körpersignale zu hören, statt starren Diätplänen zu folgen. Ein bewusster Umgang mit Essen bedeutet auch, sich gelegentlich etwas zu gönnen — ohne Schuldgefühle. «Das Streben nach perfekter Ernährung kann selbst zum Stressor werden», warnt Dr. Hartmann. Genuss und Ausgewogenheit seien wichtiger als Perfektion."
  ],
  qs:[
    {n:7,  t:"In welchem Abschnitt wird eine Expertin zitiert, die Essen als soziales Phänomen beschreibt? (цитируют эксперта об еде как социальном явлении)",
     opts:["a","b","c","d","e"], ans:"b",
     exp:"Abschnitt b): «Wir essen nicht nur, um satt zu werden — Essen ist auch Kommunikation, Trost und Identität», sagt Ernährungspsychologin Dr. Nina Hartmann.",
     rule:"Expertenzitat: Name + Berufsbezeichnung + direkte Rede in Anführungszeichen."},
    {n:8,  t:"In welchem Abschnitt werden die Leser direkt angesprochen und zum Nachdenken aufgefordert? (читателей спрашивают напрямую)",
     opts:["a","b","c","d","e"], ans:"a",
     exp:"Abschnitt a): «Sind Sie auch ein Mensch, der sich verführen lässt? Greifen Sie lieber zu...? Seien Sie ehrlich» — direkte Anrede der Leser (Sie-Form).",
     rule:"Direkte Leseransprache: Sie-Form + Fragen/Imperativ = читателей вовлекают в текст."},
    {n:9,  t:"In welchem Abschnitt wird erklärt, dass es keine einheitliche Ernährungsempfehlung gibt? (нет единой рекомендации)",
     opts:["a","b","c","d","e"], ans:"d",
     exp:"Abschnitt d): «es gibt keine universelle Lösung ... Was für eine Person optimal ist, kann für eine andere kaum Wirkung zeigen.»",
     rule:"<em>keine universelle Lösung</em> = нет единой рекомендации. Schlüsselformulierung."},
    {n:10, t:"In welchem Abschnitt werden konkrete Nährstoffe und ihre Wirkung auf das Gehirn beschrieben? (конкретные питательные вещества)",
     opts:["a","b","c","d","e"], ans:"c",
     exp:"Abschnitt c): Omega-3-Fettsäuren, Antioxidantien, Zucker — alle mit konkreter Wirkung auf das Gehirn beschrieben.",
     rule:"Konkrete Nährstoffe = spezifische chemische Begriffe (Omega-3, Antioxidantien). Typisch für Abschnitt c)."},
    {n:11, t:"In welchem Abschnitt wird vor den negativen Folgen zu großen Perfektionsstrebens beim Essen gewarnt? (предупреждение о перфекционизме)",
     opts:["a","b","c","d","e"], ans:"e",
     exp:"Abschnitt e): «Das Streben nach perfekter Ernährung kann selbst zum Stressor werden», warnt Dr. Hartmann.",
     rule:"Warnung erkennbar durch: <em>warnt</em> + negative Konsequenz. <em>Stressor</em> = источник стресса."},
    {n:12, t:"In welchem Abschnitt wird ein Zusammenhang zwischen Ernährung und emotionalem Wohlbefinden hergestellt? (связь питания и эмоций)",
     opts:["a","b","c","d","e"], ans:"b",
     exp:"Abschnitt b): «Menschen, die viel Obst und Gemüse essen, berichten häufiger von positiver Grundstimmung» + Fast Food → höhere Stresswerte.",
     rule:"Emotionales Wohlbefinden: <em>Grundstimmung, Stresswerte</em> = эмоциональное состояние. Korrelation Essen–Emotion."}
  ],
  vocab:["verführen — соблазнять, прельщать","die Grundstimmung — основное настроение","die Fettsäure — жирная кислота","das Antioxidans — антиоксидант","verstoffwechseln — метаболизировать","die Darmflora — микрофлора кишечника","der Stressor — источник стресса"]
};
