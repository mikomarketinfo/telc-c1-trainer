// test-lv1m.js — Leseverstehen Teil 1
window.TELC_TEST = {
  id:"lv1m", type:"Leseverstehen Teil 1", kind:"lv1",
  title:"Wie Zimmerpflanzen das Wohnzimmer eroberten",
  desc:"6 Satz-Zuordnungen · Textrekonstruktion · C1",
  satze:[
    {id:"z", t:"<strong>z)</strong> Pflanzen sind nicht nur schön anzusehen — sie verbessern auch das Raumklima und heben die Stimmung. <em>(Beispiel)</em>"},
    {id:"a", t:"<strong>a)</strong> Allerdings brachten Händler und Botaniker im Laufe der Zeit immer exotischere Arten mit nach Europa, was den Reiz dieser Pflanzen erheblich steigerte."},
    {id:"b", t:"<strong>b)</strong> Das änderte sich, als im 19. Jahrhundert Glasgewächshäuser zu erschwinglichen Preisen hergestellt werden konnten."},
    {id:"c", t:"<strong>c)</strong> Damit einher ging eine wachsende Sensibilisierung für Umwelt- und Nachhaltigkeitsfragen, die viele Menschen dazu brachte, die Natur in ihr Zuhause zu holen."},
    {id:"d", t:"<strong>d)</strong> Diese Entwicklung veränderte den Wohnraum grundlegend: Wo früher kahle Fensterbänke dominierten, blühte es nun in allen Farben."},
    {id:"e", t:"<strong>e)</strong> Die Pflege dieser Pflanzen war oft anspruchsvoll, denn tropische Arten benötigen besondere Lichtverhältnisse und Temperaturen."},
    {id:"f", t:"<strong>f)</strong> Heute gilt das Begrünen des Wohnraums als Lifestyle-Trend — und sozialen Medien kommt dabei eine zentrale Rolle zu."},
    {id:"g", t:"<strong>g)</strong> Zunächst waren Zimmerpflanzen jedoch ein Privileg der Wohlhabenden, da die Haltung tropischer Gewächse teuer und aufwendig war."},
    {id:"h", t:"<strong>h)</strong> Ein weiterer Faktor war die Urbanisierung des 20. Jahrhunderts, die immer mehr Menschen in Städte und Wohnungen ohne Garten trieb. <em>(passt nicht)</em>"}
  ],
  textps:[
    "Ohne Zimmerpflanzen ist das moderne Wohnen kaum vorstellbar. {0} Doch wie kam es eigentlich dazu, dass Pflanzen vom Feld und Garten in unsere Wohnzimmer zogen?",
    "Die Geschichte der Zimmerpflanze beginnt nicht etwa in der Antike, sondern überraschenderweise erst im 17. Jahrhundert. {1} Nur wenige Adelshöfe und wohlhabende Bürger konnten sich beheizte Räume leisten, in denen empfindliche Pflanzen überwinterten.",
    "Exotische Pflanzen aus den Kolonien galten als Statussymbol. {2} Der Ficus benjamina aus Asien, die Kakteen aus Amerika, die Orchideen aus den Tropen — sie alle fanden nach und nach ihren Weg in europäische Wohnzimmer.",
    "{3} Nun konnten auch bürgerliche Haushalte Orangerien und Wintergärten anlegen. {4} Die Pflanzenhaltung wurde zum beliebten Hobby des Bürgertums.",
    "Im 20. Jahrhundert demokratisierte sich der Trend weiter. Massenproduktion und globale Lieferketten machten Zimmerpflanzen für breite Bevölkerungsschichten erschwinglich. {5}",
    "Heute dokumentieren Millionen von Menschen ihre Pflanzensammlungen auf Instagram und Pinterest. {6} Wer eine seltene Monstera oder eine blühende Orchidee besitzt, erntet Bewunderung — nicht nur im realen, sondern auch im digitalen Leben."
  ],
  qs:[
    {n:1, ans:"g",
     exp:"Satz g): «Zunächst waren Zimmerpflanzen ein Privileg der Wohlhabenden, da die Haltung tropischer Gewächse teuer war.» — erklärt die Einschränkung: nur für Reiche.",
     textref:"«Die Geschichte beginnt erst im 17. Jahrhundert.» → Satz g): <em>Zunächst</em> = historische Einschränkung.",
     rule:"<em>Zunächst</em> = первоначально (временная Einschränkung). Satz g) erklärt, warum es anfangs selten war."},
    {n:2, ans:"a",
     exp:"Satz a): «Allerdings brachten Händler immer exotischere Arten mit nach Europa.» — ergänzt: trotz der Kosten wurde das Angebot reicher.",
     textref:"«Exotische Pflanzen galten als Statussymbol.» → Satz a): <em>Allerdings</em> = однако (Ergänzung/Kontrast).",
     rule:"<em>Allerdings</em> = однако, тем не менее. Ergänzt die Aussage über Statussymbol."},
    {n:3, ans:"b",
     exp:"Satz b): «Das änderte sich, als im 19. Jahrhundert Glasgewächshäuser erschwinglich wurden.» — <em>Das</em> = die teure, exklusive Haltung.",
     textref:"«Nur wenige konnten sich … leisten» → Satz b): <em>Das änderte sich</em> = dieser Zustand änderte sich.",
     rule:"<em>Das änderte sich</em> = Anapher auf vorherige Einschränkung. Wendepunkt in der Geschichte."},
    {n:4, ans:"d",
     exp:"Satz d): «Diese Entwicklung veränderte den Wohnraum: Wo früher kahle Fensterbänke dominierten, blühte es nun.» — beschreibt die visuelle Veränderung.",
     textref:"«Nun konnten auch bürgerliche Haushalte Orangerien anlegen.» → Satz d): <em>Diese Entwicklung</em> = Anapher.",
     rule:"<em>Diese Entwicklung</em> = die neue Erschwinglichkeit. Satz d) beschreibt die sichtbare Folge."},
    {n:5, ans:"c",
     exp:"Satz c): «Damit einher ging eine wachsende Sensibilisierung für Umweltfragen, die viele dazu brachte, Natur ins Zuhause zu holen.» — erklärt den modernen Trend.",
     textref:"«Massenproduktion machte Zimmerpflanzen erschwinglich.» → Satz c): <em>Damit einher</em> = gleichzeitig damit.",
     rule:"<em>damit einher gehen</em> = сопровождаться чем-л. Kausalverbindung mit vorherigem Satz."},
    {n:6, ans:"f",
     exp:"Satz f): «Heute gilt das Begrünen als Lifestyle-Trend — und sozialen Medien kommt dabei eine zentrale Rolle zu.» — Überleitung zu Social Media.",
     textref:"«Heute dokumentieren Millionen ihre Pflanzensammlungen auf Instagram.» → Satz f) leitet diese Aussage ein.",
     rule:"<em>Heute</em> am Satzanfang = aktueller Stand. Satz f) als Überleitung zum Social-Media-Aspekt."}
  ],
  vocab:["erschwinglich — доступный по цене","die Sensibilisierung — повышение осведомлённости","das Gewächshaus — теплица","die Orangerie — оранжерея","demokratisieren — делать доступным для всех","ernten — пожинать (плоды/восхищение)","einher gehen mit — сопровождаться чем-л."]
};
