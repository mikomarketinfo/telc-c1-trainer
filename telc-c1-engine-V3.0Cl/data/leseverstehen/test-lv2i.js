// test-lv2i.js — Leseverstehen Teil 2
window.TELC_TEST = {
  id:"lv2i", type:"Leseverstehen Teil 2", kind:"lv2",
  title:"Helikopter-Eltern — zu viel Fürsorge schadet",
  desc:"6 Fragen · In welchem Abschnitt? · C1",
  textps:[
    "<strong>Abschnitt a:</strong> Stellen Sie sich vor: Ein 28-jähriger Mann ruft täglich seine Mutter an, um zu fragen, was er zum Mittagessen kochen soll. Eine 25-jährige Frau lässt ihre Eltern noch immer alle Behördenbriefe öffnen und beantworten. Übertrieben? Leider nicht. Solche Szenen spielen sich in vielen deutschen Haushalten ab — und Experten machen dafür das Phänomen der sogenannten Helikopter-Eltern verantwortlich.",
    "<strong>Abschnitt b:</strong> Der Begriff «Helikopter-Eltern» bezeichnet Väter und Mütter, die ständig über ihren Kindern «kreisen» — stets bereit einzugreifen, zu retten und zu kontrollieren. Das Phänomen ist keineswegs neu: Erziehungswissenschaftlerin Dr. Annette Köhler beschreibt es bereits seit den 1980er Jahren und stellt fest, dass es in den letzten Jahren deutlich zugenommen hat. «Eltern wollen das Beste für ihre Kinder — aber manchmal ist weniger mehr», sagt sie.",
    "<strong>Abschnitt c:</strong> Die Folgen überbehüteter Kindheit zeigen sich oft erst im Erwachsenenalter. Studien belegen: Junge Menschen, die kaum eigene Entscheidungen treffen durften, haben Schwierigkeiten, mit Scheitern umzugehen. Sie zeigen häufiger Symptome von Angst und Depression und weisen geringere Frustrationstoleranz auf. Auch die Fähigkeit zur Selbstregulation — also das eigenständige Steuern von Emotionen und Impulsen — ist bei ihnen oft schwächer ausgebildet.",
    "<strong>Abschnitt d:</strong> Interessanterweise handeln Helikopter-Eltern meist aus Liebe und aufrichtigem Sorge — nicht aus Kontrollwahn. Sie reagieren auf eine Welt, die ihnen zunehmend unsicher erscheint: steigende Konkurrenz auf dem Arbeitsmarkt, soziale Medien mit ihren Risiken, komplexe Bürokratie. Der Wunsch, das Kind vor all dem zu schützen, ist verständlich — doch er verhindert, dass das Kind lernt, diese Herausforderungen selbst zu meistern.",
    "<strong>Abschnitt e:</strong> Wie viel Fürsorge ist also richtig? Experten empfehlen das Konzept der «autoritativen Erziehung»: Eltern setzen klare Grenzen, geben aber gleichzeitig Raum für Selbstständigkeit. Konkret bedeutet das: Kinder scheitern lassen — und dabei begleiten, nicht retten. «Das Beste, was Eltern tun können, ist, überflüssig zu werden», formuliert Dr. Köhler pointiert."
  ],
  qs:[
    {n:7,  t:"In welchem Abschnitt werden die negativen Folgen für die psychische Entwicklung beschrieben? (негативные последствия для психики)",
     opts:["a","b","c","d","e"], ans:"c",
     exp:"Abschnitt c): Angst, Depression, geringere Frustrationstoleranz, schwache Selbstregulation — alle psychischen Folgen.",
     rule:"Psychische Folgen: Angst + Depression + Frustrationstoleranz + Selbstregulation. Explizite Liste in Abs. c)."},
    {n:8,  t:"In welchem Abschnitt wird erklärt, warum Eltern so handeln, obwohl sie Schaden anrichten? (почему родители так поступают)",
     opts:["a","b","c","d","e"], ans:"d",
     exp:"Abschnitt d): «handeln meist aus Liebe … reagieren auf eine Welt, die ihnen zunehmend unsicher erscheint.» — Motivation erklärt.",
     rule:"Motiv: Liebe + Angst vor unsicherer Welt. Nicht Böswilligkeit, sondern verständliche Reaktion."},
    {n:9,  t:"In welchem Abschnitt wird das Phänomen definiert und zeitlich eingeordnet? (определение и временная классификация)",
     opts:["a","b","c","d","e"], ans:"b",
     exp:"Abschnitt b): Definition «kreisen» + Zeitangabe «seit den 1980er Jahren» + Zunahme. Expertin wird zitiert.",
     rule:"Definition + Zeitangabe = Abschnitt b). <em>bezeichnet</em> = вводит определение."},
    {n:10, t:"In welchem Abschnitt wird mit konkreten Alltagsbeispielen veranschaulicht? (конкретные примеры из жизни)",
     opts:["a","b","c","d","e"], ans:"a",
     exp:"Abschnitt a): 28-jähriger Mann + 25-jährige Frau — zwei konkrete Szenarien als Einstieg.",
     rule:"Konkrete Beispiele: spezifische Personen + Situationen. Typischer Texteinstieg mit Illustration."},
    {n:11, t:"In welchem Abschnitt wird ein praktischer Erziehungsansatz empfohlen? (практический подход к воспитанию)",
     opts:["a","b","c","d","e"], ans:"e",
     exp:"Abschnitt e): «autoritative Erziehung» — klare Grenzen + Raum für Selbstständigkeit + Kinder scheitern lassen.",
     rule:"Praktischer Ansatz: konkreter Begriff + Empfehlungen. <em>Experten empfehlen</em> = совет."},
    {n:12, t:"In welchem Abschnitt formuliert die Expertin eine prägnante Aussage über Elternschaft? (меткое высказывание эксперта)",
     opts:["a","b","c","d","e"], ans:"e",
     exp:"Abschnitt e): «Das Beste, was Eltern tun können, ist, überflüssig zu werden» — pointiertes Zitat von Dr. Köhler.",
     rule:"Pointiertes Zitat = kurze, prägnante Aussage in Anführungszeichen. Merkmal: <em>formuliert pointiert</em>."}
  ],
  vocab:["überbehütet — слишком опекаемый","die Frustationstoleranz — толерантность к фрустрации","die Selbstregulation — саморегуляция","der Kontrollwahn — мания контроля","autoritativ — авторитетный (стиль воспитания)","pointiert — метко, точно","überflüssig — излишний, ненужный"]
};
