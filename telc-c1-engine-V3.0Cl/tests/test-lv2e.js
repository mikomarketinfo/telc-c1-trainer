// test-lv2e.js — TELC C1
window.TELC_TEST = {
  id:"lv2_5", type:"Leseverstehen Teil 2", kind:"lv2",
  title:"Zwischen Familie und Studium",
  desc:"6 Fragen · In welchem Abschnitt? · C1",
  textps:[
    "<strong>Abschnitt a:</strong> Studieren mit Kind — das klingt nach einem Balanceakt, und das ist es auch. Wer während des Studiums Mutter oder Vater wird, steht vor einer gewaltigen Herausforderung. Laut einer aktuellen Studie studieren in Deutschland rund sechs Prozent aller Studierenden mit mindestens einem Kind. Die Zahl steigt seit Jahren. Aber sind diese Studierenden wirklich im Nachteil?",
    "<strong>Abschnitt b:</strong> Ich sage klar: Nein. Studierende Eltern sind organisiert, fokussiert und wissen genau, warum sie studieren. Sie können es sich schlicht nicht leisten, Zeit zu verschwenden. Eine Kommilitonin von mir, Mutter von zwei Kindern, hat ihr Studium in der Regelstudienzeit abgeschlossen — mit Bestnoten. Ihre Erklärung: «Ich hatte keine Zeit für Prokrastination.»",
    "<strong>Abschnitt c:</strong> Dabei sind die strukturellen Hürden nicht zu unterschätzen. Vorlesungen, die bis abends dauern, mangelnde Kinderbetreuung auf dem Campus und fehlende finanzielle Unterstützung machen das Doppelleben schwer. Viele Universitäten haben zwar Familienbüros eingerichtet, doch das reicht oft nicht aus. Vergleicht man Deutschland mit skandinavischen Ländern, wird der Rückstand deutlich.",
    "<strong>Abschnitt d:</strong> Bemerkenswert ist, dass studierende Eltern häufig motivierter sind als ihre kinderlosen Kommilitonen. Sie haben ein klares Ziel vor Augen und geben dieses auch an ihre Kinder weiter: Bildung ist wichtig. Studien belegen, dass Kinder von Akademikern selbst häufiger einen Hochschulabschluss anstreben. So kann das Studium mit Kind eine Art Investition in die nächste Generation sein.",
    "<strong>Abschnitt e:</strong> Was wünschen sich studierende Eltern am meisten? Laut Umfragen: flexible Studienmodelle, mehr Betreuungsplätze und finanzielle Entlastung. Einige Hochschulen experimentieren bereits mit Teilzeitstudiengängen und Online-Lehre. Das Bundesministerium für Bildung fördert entsprechende Projekte. Doch bis diese Maßnahmen flächendeckend wirken, wird es noch dauern."
  ],
  qs:[
    {n:7,t:"In welchem Abschnitt nennt der Autor seine persönliche Meinung klar? (личное мнение)",
     opts:["a","b","c","d","e"],ans:"b",
     exp:"Abschnitt b): «Ich sage klar: Nein.» — explizite Ich-Meinung. Klare persönliche Aussage.",
     rule:"Persönliche Meinung: <em>Ich sage klar</em> + Ich-Form + persönliches Beispiel (Kommilitonin)."},
    {n:8,t:"In welchem Abschnitt werden die Wünsche studierender Eltern genannt? (пожелания)",
     opts:["a","b","c","d","e"],ans:"e",
     exp:"Abschnitt e): «Was wünschen sich studierende Eltern am meisten?» — direkte Frage + Antwort mit Liste.",
     rule:"Rheorische Frage + Liste = Wünsche/Forderungen. <em>laut Umfragen</em> = belegt durch Daten."},
    {n:9,t:"In welchem Abschnitt wird ein konkretes Beispiel aus dem Leben genannt? (конкретный пример)",
     opts:["a","b","c","d","e"],ans:"b",
     exp:"Abschnitt b): Die Kommilitonin mit zwei Kindern, Regelstudienzeit, Bestnoten — konkretes Einzelbeispiel.",
     rule:"Konkretes Beispiel: Name/Beschreibung einer Person + spezifische Details + direktes Zitat."},
    {n:10,t:"In welchem Abschnitt werden Probleme bei der Vereinbarkeit genannt? (проблемы совмещения)",
     opts:["a","b","c","d","e"],ans:"c",
     exp:"Abschnitt c): Späte Vorlesungen + mangelnde Kinderbetreuung + fehlende finanzielle Unterstützung = strukturelle Probleme.",
     rule:"Probleme/Hürden: <em>nicht zu unterschätzen</em>, <em>machen das Doppelleben schwer</em>, <em>reicht oft nicht aus</em>."},
    {n:11,t:"In welchem Abschnitt wird ein Vergleich mit anderen Ländern gemacht? (сравнение с другими странами)",
     opts:["a","b","c","d","e"],ans:"c",
     exp:"Abschnitt c): «Vergleicht man Deutschland mit skandinavischen Ländern, wird der Rückstand deutlich.»",
     rule:"Vergleich: <em>Vergleicht man … mit …</em> = wenn man vergleicht. Länderbezug im Kontext."},
    {n:12,t:"In welchem Abschnitt wird Studieren als Vorbild für Kinder dargestellt? (учёба как пример для детей)",
     opts:["a","b","c","d","e"],ans:"d",
     exp:"Abschnitt d): «Bildung ist wichtig» + Kinder von Akademikern streben selbst Hochschulabschluss an.",
     rule:"<em>an ihre Kinder weitergeben</em> = передавать детям как пример. Investition in nächste Generation."}
  ],
  vocab:["der Balanceakt — балансирование, сложное совмещение","die Prokrastination — прокрастинация, откладывание","die Hürde — барьер, препятствие","flächendeckend — повсеместный, охватывающий всю территорию","anstreben — стремиться к чему-л.","die Regelstudienzeit — нормативный срок обучения"]
};
