// test-lv2c.js — TELC C1
window.TELC_TEST = {
  id:"lv2_3", type:"Leseverstehen Teil 2", kind:"lv2",
  title:"Stress im Studium bewältigen",
  desc:"6 Fragen · In welchem Abschnitt? · C1",
  textps:[
    "<strong>Abschnitt a:</strong> Die Prüfungsphase naht, die Hausarbeiten stapeln sich, und der Professor erwartet morgen früh die fertige Seminararbeit. Wer kennt das nicht? Stress im Studium ist weit verbreitet und gehört für viele Studierende zum normalen Alltag. Dabei stellt sich die Frage: Ist das eigentlich unvermeidbar? Und wenn ja, wie kann man besser damit umgehen?",
    "<strong>Abschnitt b:</strong> Wissenschaftlich gesehen ist Stress nicht per se schädlich. Kurzfristiger Druck kann sogar leistungssteigernd wirken, da er uns fokussiert und motiviert. Problematisch wird es erst, wenn der Stress dauerhaft anhält und keine Erholungsphasen mehr stattfinden. Chronischer Stress erhöht das Risiko von Burnout, Depressionen und körperlichen Erkrankungen erheblich.",
    "<strong>Abschnitt c:</strong> Interessanterweise berichten viele Studierende, dass sie sich trotz objektiv hoher Arbeitsbelastung weniger gestresst fühlen, wenn sie das Gefühl haben, die Kontrolle über ihre Situation zu behalten. Das deutet darauf hin, dass die subjektive Wahrnehmung von Stress oft entscheidender ist als die tatsächliche Arbeitsmenge. «Das Gehirn reagiert nicht auf die Realität, sondern auf seine Interpretation der Realität», erklärt Stressforscherin Dr. Petra Meier.",
    "<strong>Abschnitt d:</strong> Konkrete Strategien können helfen, den Studienstress zu reduzieren. Dazu gehören klare Tagesstrukturen, regelmäßige Pausen und ausreichend Schlaf. Besonders effektiv ist es, große Aufgaben in kleine, überschaubare Teilschritte zu unterteilen. Sport und Bewegung bauen nachweislich Stresshormone ab. Soziale Kontakte sind ebenfalls wichtig: Wer über seine Sorgen spricht, fühlt sich schnell weniger allein damit.",
    "<strong>Abschnitt e:</strong> Viele Hochschulen haben inzwischen auf den steigenden Beratungsbedarf reagiert und bieten psychologische Beratungsstellen an. Allerdings zögern viele Studierende, diese Angebote wahrzunehmen — aus Angst vor Stigmatisierung oder weil sie glauben, das Problem selbst lösen zu müssen. Experten betonen jedoch, dass professionelle Hilfe kein Zeichen von Schwäche ist, sondern von Stärke."
  ],
  qs:[
    {n:7,t:"In welchem Abschnitt werden konkrete Ratschläge zur Stressbewältigung gegeben? (конкретные советы)",
     opts:["a","b","c","d","e"],ans:"d",
     exp:"Abschnitt d): Konkrete Strategien: Tagesstrukturen, Pausen, Schlaf, Sport, soziale Kontakte — direkte Handlungsempfehlungen.",
     rule:"Konkrete Ratschläge erkennbar durch: Liste von Maßnahmen, Imperativ-Nähe, <em>dazu gehören</em>."},
    {n:8,t:"In welchem Abschnitt zitiert der Autor eine Expertin? (цитирует эксперта)",
     opts:["a","b","c","d","e"],ans:"c",
     exp:"Abschnitt c): «Das Gehirn reagiert nicht auf die Realität …», erklärt Stressforscherin Dr. Petra Meier.» — direktes Zitat mit Quellenangabe.",
     rule:"Expertenzitat: Name + Berufsbezeichnung + direkte Rede in Anführungszeichen."},
    {n:9,t:"In welchem Abschnitt wird erklärt, wann Stress gefährlich wird? (когда стресс опасен)",
     opts:["a","b","c","d","e"],ans:"b",
     exp:"Abschnitt b): «Problematisch wird es erst, wenn der Stress dauerhaft anhält» — Bedingung für schädlichen Stress.",
     rule:"<em>erst wenn</em> = только когда → Bedingung für das Eintreten der Gefahr."},
    {n:10,t:"In welchem Abschnitt wird das Thema mit einer Frage eingeführt? (вводится с помощью вопроса)",
     opts:["a","b","c","d","e"],ans:"a",
     exp:"Abschnitt a): «Ist das eigentlich unvermeidbar? Und wenn ja, wie kann man besser damit umgehen?» — zwei Fragen als Einstieg.",
     rule:"Rhetorische Fragen als Einleitungsmittel: typisch für journalistische Texte."},
    {n:11,t:"In welchem Abschnitt wird erklärt, dass die Wahrnehmung wichtiger ist als die Realität? (восприятие важнее реальности)",
     opts:["a","b","c","d","e"],ans:"c",
     exp:"Abschnitt c): «die subjektive Wahrnehmung von Stress oft entscheidender ist als die tatsächliche Arbeitsmenge.»",
     rule:"Schlüsselwörter: <em>subjektiv</em> vs. <em>tatsächlich</em>, <em>Wahrnehmung</em> vs. <em>Realität</em>."},
    {n:12,t:"In welchem Abschnitt wird erklärt, warum Studierende keine professionelle Hilfe suchen? (почему не обращаются за помощью)",
     opts:["a","b","c","d","e"],ans:"e",
     exp:"Abschnitt e): «Aus Angst vor Stigmatisierung oder weil sie glauben, das Problem selbst lösen zu müssen.» — Gründe für Zögern.",
     rule:"Kausalität: <em>aus Angst vor</em> + <em>weil sie glauben</em> = причины нежелания обращаться за помощью."}
  ],
  vocab:["bewältigen — справляться с чем-л.","leistungssteigernd — повышающий производительность","chronisch — хронический","die Stigmatisierung — стигматизация","überschaubar — обозримый, понятный","nachweislich — доказуемо, подтверждённо"]
};
