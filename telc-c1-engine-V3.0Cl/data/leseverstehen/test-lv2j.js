// test-lv2j.js — Leseverstehen Teil 2
window.TELC_TEST = {
  id:"lv2j", type:"Leseverstehen Teil 2", kind:"lv2",
  title:"Bachelor- und Masterarbeiten — Sinn oder Unsinn?",
  desc:"6 Fragen · In welchem Abschnitt? · C1",
  textps:[
    "<strong>Abschnitt a:</strong> Drei Monate, manchmal sechs — und am Ende ein Stapel Papier mit 60 bis 120 Seiten. Die Abschlussarbeit gilt als Krönung des Studiums, als Beweis wissenschaftlicher Reife. Aber ist sie das wirklich noch? Oder ist sie zu einem Ritual geworden, das mehr schadet als nützt — ein Akt kollektiver Selbsttäuschung, an dem Hochschulen, Lehrende und Studierende gleichermaßen beteiligt sind?",
    "<strong>Abschnitt b:</strong> Die Kritik ist nicht neu. Seit Jahren bemängeln Professoren, dass viele Abschlussarbeiten weder wissenschaftlich innovativ noch praxisrelevant sind. Sie werden geschrieben, bewertet und anschließend nie wieder gelesen. «Ich schätze, dass 90 Prozent der Bachelorarbeiten keinen Mehrwert für die Wissenschaft haben», sagt Prof. Dr. Klaus Ritter von der Universität Hamburg — und er ist damit nicht allein.",
    "<strong>Abschnitt c:</strong> Befürworter halten dagegen: Die Arbeit lehrt das wissenschaftliche Arbeiten, das Strukturieren von Gedanken, das kritische Lesen von Quellen. Diese Fähigkeiten seien im Berufsleben unverzichtbar — unabhängig davon, ob die Arbeit selbst gelesen wird. «Es geht nicht um das Produkt, sondern um den Prozess», argumentiert die Erziehungswissenschaftlerin Dr. Ines Vogel.",
    "<strong>Abschnitt d:</strong> Ein praktisches Problem bleibt die Betreuung. In vielen Fächern betreut ein Professor gleichzeitig zwanzig oder dreißig Abschlussarbeiten. Individuelle Rückmeldungen bleiben dann oft auf der Strecke. Manche Studierende berichten, ihren Betreuer während des gesamten Schreibprozesses kaum gesehen zu haben. Das untergräbt den pädagogischen Wert der Arbeit erheblich.",
    "<strong>Abschnitt e:</strong> Reformideen gibt es viele: Portfolios statt Abschlussarbeiten, Projektarbeiten in Kooperation mit Unternehmen, mündliche Prüfungen als Abschluss. In einigen skandinavischen Ländern wird die schriftliche Abschlussarbeit bereits durch andere Formate ergänzt oder ersetzt. Die Diskussion in Deutschland steht jedoch erst am Anfang."
  ],
  qs:[
    {n:7,  t:"In welchem Abschnitt wird ein konkretes Zitat eines kritischen Professors genannt? (цитата критически настроенного профессора)",
     opts:["a","b","c","d","e"], ans:"b",
     exp:"Abschnitt b): «Ich schätze, dass 90 Prozent der Bachelorarbeiten keinen Mehrwert haben», sagt Prof. Dr. Klaus Ritter — direktes Zitat mit Name.",
     rule:"Konkretes Zitat: Name + Universität + direkte Rede in Anführungszeichen."},
    {n:8,  t:"In welchem Abschnitt werden alternative Prüfungsformate vorgeschlagen? (альтернативные форматы)",
     opts:["a","b","c","d","e"], ans:"e",
     exp:"Abschnitt e): Portfolios, Projektarbeiten, mündliche Prüfungen — konkrete Alternativen zur schriftlichen Abschlussarbeit.",
     rule:"Alternative Formate = konkrete Vorschläge. Stichwörter: Portfolios, Projekte, mündlich."},
    {n:9,  t:"In welchem Abschnitt wird mangelnde Betreuung als Problem dargestellt? (недостаточная поддержка)",
     opts:["a","b","c","d","e"], ans:"d",
     exp:"Abschnitt d): Ein Professor betreut 20-30 Arbeiten gleichzeitig, individuelle Rückmeldungen fehlen oft.",
     rule:"Mangelnde Betreuung: viele Studierende pro Professor + kaum individuelle Rückmeldung."},
    {n:10, t:"In welchem Abschnitt wird der Lernprozess selbst als wichtiger bewertet als das Ergebnis? (процесс важнее результата)",
     opts:["a","b","c","d","e"], ans:"c",
     exp:"Abschnitt c): «Es geht nicht um das Produkt, sondern um den Prozess», sagt Dr. Vogel.",
     rule:"Prozess > Produkt: direkte Aussage. <em>nicht … sondern</em> = не … а."},
    {n:11, t:"In welchem Abschnitt wird die Abschlussarbeit grundsätzlich infrage gestellt? (ставится под сомнение принципиально)",
     opts:["a","b","c","d","e"], ans:"a",
     exp:"Abschnitt a): «Oder ist sie zu einem Ritual geworden, das mehr schadet als nützt?» — grundsätzliche Infragestellung.",
     rule:"Grundsätzliche Infragestellung: rhetorische Frage + «mehr schadet als nützt» + «kollektive Selbsttäuschung»."},
    {n:12, t:"In welchem Abschnitt werden internationale Beispiele für Reformen genannt? (международные примеры реформ)",
     opts:["a","b","c","d","e"], ans:"e",
     exp:"Abschnitt e): «In einigen skandinavischen Ländern wird die schriftliche Abschlussarbeit bereits ersetzt.» — konkrete Länderbeispiele.",
     rule:"Internationale Beispiele: Länder werden namentlich genannt (skandinavische Länder)."}
  ],
  vocab:["die Krönung — венец, завершение","die Selbsttäuschung — самообман","der Mehrwert — добавленная ценность","die Betreuung — научное руководство","untergräbt — подрывает","das Portfolio — портфолио","unverzichtbar — незаменимый"]
};
