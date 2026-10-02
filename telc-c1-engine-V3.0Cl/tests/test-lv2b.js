// test-lv2b.js — TELC C1
window.TELC_TEST = {
  id:"lv2_2", type:"Leseverstehen Teil 2", kind:"lv2",
  title:"Selbermachen als Trend",
  desc:"6 Fragen · In welchem Abschnitt? · C1",
  textps:[
    "<strong>Abschnitt a:</strong> Mach es selbst! «Do it yourself» hat heute Hochkonjunktur. Vom Eierwärmer bis zur Stoffserviette muss alles individuell gestaltet sein. Selbermachen schone den Planeten und dämme den Massenkonsum ein, jubeln Aktivisten. Würden Sie, liebe Leser, sich der Meinung anschließen, dass in diesem Fall die Begeisterung ein wenig übertrieben ist? Wie etwa Sauerkraut aus der Dose – das findet man schließlich in jedem Lebensmittelgeschäft.",
    "<strong>Abschnitt b:</strong> Ja, ich gebe zu: Ich bin leicht zufriedenzustellen. Mir schmecken Produkte aus dem Supermarkt. Ich kann diesem Trend durchaus positive Seiten abgewinnen. Mit den eigenen Händen etwas herzustellen kann schließlich dazu beitragen, dass man sich entspannt. Andererseits stört es mich aber gewaltig, wie sehr das Selbermachen heutzutage überhöht wird.",
    "<strong>Abschnitt c:</strong> Das Heimwerken solle das Glücksempfinden erhöhen, den Konsum eindämmen: Solche Behauptungen hört man immer wieder. Denjenigen, die so hohe Erwartungen haben, möchte man entgegenrufen: Schaltet mal einen Gang herunter! Heimwerken und Kaufen gehören zusammen wie Hammer und Nagel. Dass Selbermachen den Konsum reduziert, ist fraglich. Die Industrie hat den Trend erkannt – der Konsum wird dadurch sogar angekurbelt.",
    "<strong>Abschnitt d:</strong> Doch warum ist das Heimwerken eigentlich zum Trend geworden? Wer im Beruf tagein, tagaus am Computer sitzt, sehnt sich irgendwann nach einem Ausgleich. Im Beruf, so eine These des Neurobiologen Gerald Hüther, spüren viele längst nicht mehr die Wichtigkeit ihres Tuns. Zuhause aber haben sie das Sagen.",
    "<strong>Abschnitt e:</strong> Nicht immer reicht die eigene Fantasie aus. Ob sie etwas nähen oder ein neues Bett bauen wollen – online finden Bastler zu jedem Thema eine Anleitung. Durch den Austausch entstehen Communitys. Man könnte annehmen, dass die Menschen sich auf diese Weise näherkommen. Letztlich kommt es womöglich gar nicht darauf an, dass selbstgemachtes Sauerkraut besser schmeckt – sondern darauf, dass man mit anderen darüber reden kann."
  ],
  qs:[
    {n:7,t:"In welchem Abschnitt arbeitet die Autorin mit einem Vergleich? (использует сравнение)",
     opts:["a","b","c","d","e"],ans:"c",
     exp:"Abschnitt c): «Heimwerken und Kaufen gehören zusammen wie Hammer und Nagel.» — direkter Vergleich mit <em>wie</em>.",
     rule:"Vergleich erkennbar durch: <em>wie</em>, <em>genauso wie</em>, <em>ähnlich wie</em>. Hier: Hammer und Nagel = bildlicher Vergleich."},
    {n:8,t:"In welchem Abschnitt argumentiert die Autorin mithilfe einer fremden Autorität? (ссылается на авторитет)",
     opts:["a","b","c","d","e"],ans:"d",
     exp:"Abschnitt d): Die Autorin zitiert den Neurobiologen Gerald Hüther als externe Autorität für ihre These.",
     rule:"Fremde Autorität = Experte/Wissenschaftler wird namentlich zitiert. <em>so eine These des Neurobiologen Gerald Hüther</em>."},
    {n:9,t:"In welchem Abschnitt formuliert die Autorin einen Appell? (формулирует призыв)",
     opts:["a","b","c","d","e"],ans:"c",
     exp:"Abschnitt c): «Schaltet mal einen Gang herunter!» — direkter Appell im Imperativ.",
     rule:"Appell erkennbar durch: Imperativ + direkte Ansprache. Восклицательный знак усиливает призыв."},
    {n:10,t:"In welchem Abschnitt legt die Autorin ihre persönliche Haltung dar? (выражает личную позицию)",
     opts:["a","b","c","d","e"],ans:"b",
     exp:"Abschnitt b): «Ja, ich gebe zu: Ich bin leicht zufriedenzustellen.» — Ich-Form, persönliche Einstellung.",
     rule:"Persönliche Haltung: Ich-Form + <em>ich finde/gebe zu/stört mich</em> = личная позиция автора."},
    {n:11,t:"In welchem Abschnitt spricht die Autorin eine Vermutung aus? (высказывает предположение)",
     opts:["a","b","c","d","e"],ans:"e",
     exp:"Abschnitt e): «Man könnte annehmen, dass die Menschen sich … näherkommen.» — <em>könnte annehmen</em> = Konjunktiv als Vermutung.",
     rule:"Vermutung: <em>könnte, dürfte, womöglich, vermutlich</em>. Конъюнктив II = предположение, неуверенность."},
    {n:12,t:"In welchem Abschnitt sucht die Autorin bei den Lesern nach Zustimmung? (ищет согласия читателей)",
     opts:["a","b","c","d","e"],ans:"a",
     exp:"Abschnitt a): «Würden Sie, liebe Leser, sich der Meinung anschließen, dass … die Begeisterung übertrieben ist?» — direkte Leserfrage.",
     rule:"Zustimmung suchen: direkte Anrede «liebe Leser» + Frage im Konjunktiv = читателя приглашают согласиться."}
  ],
  vocab:["Hochkonjunktur haben — переживать бум","eindämmen — сдерживать, ограничивать","überhöhen — преувеличивать","ankurbeln — стимулировать","sich sehnen nach — стремиться к, тосковать по","die Anleitung — инструкция, руководство","womöglich — возможно, пожалуй"]
};
