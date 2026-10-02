// test-lv1d.js — TELC C1
window.TELC_TEST = {
  id:"lv1_4", type:"Leseverstehen Teil 1", kind:"lv1",
  title:"Werbung in der sozialen Marktwirtschaft",
  desc:"6 Satz-Zuordnungen · Textrekonstruktion · C1",
  satze:[
    {id:"z",t:"<strong>z)</strong> Kurz: Werbung schaffe Transparenz und damit eine größere Entscheidungsvielfalt. <em>(Beispiel)</em>"},
    {id:"a",t:"<strong>a)</strong> Allerdings macht nicht jeder Gebrauch davon, und was könnte man schon tun?"},
    {id:"b",t:"<strong>b)</strong> Das oberste Ziel der Werbung ist es nämlich, Interesse zu wecken."},
    {id:"c",t:"<strong>c)</strong> Denn diesen Moment Aufmerksamkeit beansprucht jedes beworbene Produkt für sich, und wo viele schreien, werden nur wenige gehört."},
    {id:"d",t:"<strong>d)</strong> Dies geschieht natürlich nicht allein aus Forschungsdrang."},
    {id:"e",t:"<strong>e)</strong> Ganz zu schweigen davon, dass Werbebotschaften nicht nur von Land zu Land, sondern sogar von Region zu Region anders wahrgenommen werden können."},
    {id:"f",t:"<strong>f)</strong> Häufig hören die Zeitungsverleger und Fernsehanstalten auf diese Empfehlung."},
    {id:"g",t:"<strong>g)</strong> Hier interessiert allein die finanzielle Zukunft der Werbebranche. <em>(passt nicht)</em>"},
    {id:"h",t:"<strong>h)</strong> Davor aber fürchten sich die Werbetreibenden, weil so der Gesetzgeber auf den Plan gerufen wird."}
  ],
  textps:[
    "Werbung, so behauptet die Werbeindustrie, sei der Motor unserer sozialen Marktwirtschaft. Die Werbung reguliere die Preise, führe zu ständiger Verbesserung der Produkte und informiere den Verbraucher. {0}",
    "Wie jeder andere Wirtschaftszweig funktioniert die Werbung nach dem Prinzip von Angebot und Nachfrage. Die Werbeschaffenden müssen die Werbung attraktiv gestalten, so dass sie unterhält, neugierig macht, vielleicht auch erschreckt. {1} Ein paar Sekunden Aufmerksamkeit – das ist der maximale Preis, den ein Zuschauer bereit ist, für gute Werbung zu zahlen.",
    "Genau hier liegt das Problem oder vielmehr die Herausforderung für die gesamte Werbeindustrie. {2}",
    "Ob der Ruf der Werbung vom Konsumenten gehört wird und ob er dessen Kaufverhalten tatsächlich ändert, damit beschäftigen sich seit den 1930er Jahren Generationen von Wissenschaftlern. {3} Besonders die Wirtschaft will wissen, ob das Vermögen gut investiert ist.",
    "Werbungen überschreiten nicht nur regionale und soziale Grenzen, sondern häufig auch die des guten Geschmacks. Jeder Bürger hat das Recht, Beschwerde dagegen einzulegen. {4} Dieser könnte die Werbegesetze verschärfen.",
    "Um dies zu verhindern, hat die deutsche Werbeindustrie ein eigenes Kontrollgremium gegründet. Der Deutsche Werberat kann zwar einzelnen Firmen ihre Werbeaktionen nicht verbieten, er kann jedoch Empfehlungen aussprechen, die Werbung nicht mehr zu senden. {5} Im letzten Jahr kamen aus der Bevölkerung 606 Beschwerden über Werbungen."
  ],
  qs:[
    {n:1,ans:"b",
     exp:"Satz b): «Das oberste Ziel der Werbung ist es nämlich, Interesse zu wecken.» — erklärt den Grund für attraktive Gestaltung. <em>nämlich</em> = объяснительная частица.",
     textref:"«Die Werbeschaffenden müssen die Werbung attraktiv gestalten» → Satz b) erklärt <em>warum</em>: Ziel = Interesse wecken.",
     rule:"<em>nämlich</em> = именно, а именно (объяснение). Стоит после подлежащего+глагола."},
    {n:2,ans:"c",
     exp:"Satz c): «Denn diesen Moment Aufmerksamkeit beansprucht jedes Produkt für sich …» — erklärt, worin das Problem besteht. <em>Denn</em> = потому что.",
     textref:"«Genau hier liegt das Problem» → Satz c): <em>Denn</em> + jedes Produkt will Aufmerksamkeit = das Problem.",
     rule:"<em>Denn</em> = потому что, ведь. Вводит объяснение/причину проблемы."},
    {n:3,ans:"d",
     exp:"Satz d): «Dies geschieht natürlich nicht allein aus Forschungsdrang.» — <em>dies</em> = das Beschäftigen von Wissenschaftlern. Einschränkung: nicht nur Forschung.",
     textref:"«damit beschäftigen sich Generationen von Wissenschaftlern» → <em>Dies</em> = dieses Beschäftigen.",
     rule:"<em>dies</em> = das zuvor Erwähnte. Einschränkung mit <em>nicht allein</em>."},
    {n:4,ans:"h",
     exp:"Satz h): «Davor aber fürchten sich die Werbetreibenden, weil so der Gesetzgeber auf den Plan gerufen wird.» — <em>Davor</em> = vor der Beschwerde/dem Gesetzgeber.",
     textref:"«Jeder Bürger hat das Recht, Beschwerde einzulegen» → <em>Davor</em> = vor dieser Beschwerde/Konsequenz.",
     rule:"<em>Davor</em> = da + vor = перед этим, этого боятся. Анафора на предыдущее."},
    {n:5,ans:"f",
     exp:"Satz f): «Häufig hören die Zeitungsverleger und Fernsehanstalten auf diese Empfehlung.» — ergänzt die Empfehlung des Deutschen Werberats.",
     textref:"«er kann Empfehlungen aussprechen, die Werbung nicht mehr zu senden» → Satz f): auf <em>diese Empfehlung</em> hören.",
     rule:"<em>diese Empfehlung</em> = Anapher auf die Empfehlung des Werberats."}
  ],
  vocab:["die Entscheidungsvielfalt — разнообразие выбора","beanspruchen — претендовать на","das Kontrollgremium — контрольный орган","auf den Plan rufen — привлекать, вызывать","Forschungsdrang — тяга к исследованиям"]
};
