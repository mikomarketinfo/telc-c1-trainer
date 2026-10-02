// test-lv2h.js — Leseverstehen Teil 2
window.TELC_TEST = {
  id:"lv2h", type:"Leseverstehen Teil 2", kind:"lv2",
  title:"Hirndoping an deutschen Hochschulen",
  desc:"6 Fragen · In welchem Abschnitt? · C1",
  textps:[
    "<strong>Abschnitt a:</strong> Kurz vor der Abschlussprüfung, nach schlaflosen Nächten und wochenlangem Lernen: Wer hat nicht schon einmal fantasiert, einfach eine Pille zu nehmen, die das Gehirn auf Hochtouren bringt? Was wie Science-Fiction klingt, ist an deutschen Universitäten bereits Realität. Laut einer aktuellen Studie hat jeder fünfte Studierende schon einmal sogenannte kognitive Enhancer ausprobiert — Substanzen, die Konzentration, Gedächtnis oder Wachheit steigern sollen.",
    "<strong>Abschnitt b:</strong> Tatsächlich ist die wissenschaftliche Beweislage dünn. Zwar zeigen einige Studien kurzfristige Effekte bei bestimmten Aufgaben, doch ein genereller Intelligenzboost lässt sich nicht belegen. Zudem hängt die Wirkung stark vom Ausgangsniveau ab: Wer ausgeruht und konzentriert ist, profitiert kaum. Wirksamkeitsnachweise für gesunde Personen fehlen weitgehend. «Die meisten Menschen überschätzen die Wirkung und unterschätzen die Risiken», sagt die Neurowissenschaftlerin Prof. Dr. Sandra Becker.",
    "<strong>Abschnitt c:</strong> Die Risiken sind tatsächlich nicht zu unterschätzen. Viele der verwendeten Substanzen haben ernsthafte Nebenwirkungen: Schlaflosigkeit, Herzrasen, Abhängigkeit und psychische Instabilität zählen zu den häufig berichteten Problemen. Besonders gefährlich ist der unkontrollierte Konsum verschreibungspflichtiger Medikamente wie Ritalin oder Modafinil, die für medizinische Zwecke entwickelt wurden und ohne ärztliche Aufsicht erhebliche Schäden verursachen können.",
    "<strong>Abschnitt d:</strong> Ethisch ist das Thema ebenfalls heikel. Wenn Leistungssteigerung durch Substanzen zum Standard wird, entsteht ein indirekter Druck: Wer mitmachen will, muss sein Gehirn «aufrüsten». Das untergräbt die Chancengleichheit, denn Zugang zu teuren Mitteln haben nicht alle. Außerdem stellt sich die Frage, ob Erfolg unter dem Einfluss von Enhancern noch als eigene Leistung gilt. Universitäten und Ethikkommissionen diskutieren derzeit, ob und wie das Thema reguliert werden sollte.",
    "<strong>Abschnitt e:</strong> Es gibt jedoch auch gute Nachrichten. Für alle, die natürliche Alternativen suchen: Regelmäßiger Schlaf, ausgewogene Ernährung und moderate körperliche Bewegung zeigen in Studien konsistent positive Effekte auf die kognitive Leistung — ohne Risiken. Auch Meditationstechniken und strukturierte Lernpausen können die Konzentration messbar verbessern. Vor allem eines hilft laut Experten am zuverlässigsten: früh genug anfangen zu lernen."
  ],
  qs:[
    {n:7,  t:"In welchem Abschnitt wird erklärt, dass Hirndoping soziale Ungleichheit verstärken kann? (усиливает неравенство)",
     opts:["a","b","c","d","e"], ans:"d",
     exp:"Abschnitt d): «Das untergräbt die Chancengleichheit, denn Zugang zu teuren Mitteln haben nicht alle.»",
     rule:"Chancengleichheit ≠ Ungleichheit. <em>untergräbt</em> = подрывает. Soziale Ungleichheit durch ungleichen Zugang."},
    {n:8,  t:"In welchem Abschnitt werden konkrete körperliche und psychische Risiken aufgelistet? (конкретные риски)",
     opts:["a","b","c","d","e"], ans:"c",
     exp:"Abschnitt c): «Schlaflosigkeit, Herzrasen, Abhängigkeit und psychische Instabilität» — explizite Liste von Risiken.",
     rule:"Liste von Risiken = Schlaflosigkeit + Herzrasen + Abhängigkeit + Instabilität. Keine Bewertung, nur Aufzählung."},
    {n:9,  t:"In welchem Abschnitt wird das Thema mit einer Frage aus dem Alltag der Studierenden eingeführt? (вводится вопросом из жизни)",
     opts:["a","b","c","d","e"], ans:"a",
     exp:"Abschnitt a): «Kurz vor der Abschlussprüfung … Wer hat nicht schon einmal fantasiert …» — Einstieg mit alltäglicher Situation.",
     rule:"Rhetorische Frage als Einstieg + Alltagssituation (Prüfung) = typischer Textbeginn. Abschnitt a)."},
    {n:10, t:"In welchem Abschnitt wird eine Expertin zitiert, die die Risiken betont? (цитируют эксперта)",
     opts:["a","b","c","d","e"], ans:"b",
     exp:"Abschnitt b): «Die meisten Menschen überschätzen die Wirkung und unterschätzen die Risiken», sagt Prof. Dr. Sandra Becker.",
     rule:"Expertenzitat: Name + Titel + direkte Rede = Abschnitt b)."},
    {n:11, t:"In welchem Abschnitt werden natürliche Alternativen zum Hirndoping empfohlen? (натуральные альтернативы)",
     opts:["a","b","c","d","e"], ans:"e",
     exp:"Abschnitt e): Schlaf, Ernährung, Bewegung, Meditation, früh lernen — alle ohne Risiken.",
     rule:"Natürliche Alternativen: keine chemischen Substanzen. Schlüsselwörter: <em>natürliche Alternativen, ohne Risiken</em>."},
    {n:12, t:"In welchem Abschnitt wird die wissenschaftliche Wirksamkeit von Enhancern in Frage gestellt? (сомнения в эффективности)",
     opts:["a","b","c","d","e"], ans:"b",
     exp:"Abschnitt b): «Wirksamkeitsnachweise für gesunde Personen fehlen weitgehend» + «kein genereller Intelligenzboost belegbar».",
     rule:"Wirksamkeit in Frage gestellt: <em>lässt sich nicht belegen, fehlen weitgehend</em> = недоказано."}
  ],
  vocab:["der kognitive Enhancer — когнитивный усилитель","die Beweislage — доказательная база","verschreibungspflichtig — отпускаемый по рецепту","die Chancengleichheit — равенство возможностей","untergräbt — подрывает","die Ethikkommission — этическая комиссия","konsistent — последовательно, стабильно"]
};
