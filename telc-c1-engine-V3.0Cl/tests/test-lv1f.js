// test-lv1f.js — TELC C1
window.TELC_TEST = {
  id:"lv1_6", type:"Leseverstehen Teil 1", kind:"lv1",
  title:"Keramik für Millionen",
  desc:"6 Satz-Zuordnungen · Textrekonstruktion · C1",
  satze:[
    {id:"z",t:"<strong>z)</strong> Damit haben sich die Menschen seit Jahrtausenden beschäftigt. <em>(Beispiel)</em>"},
    {id:"a",t:"<strong>a)</strong> Außerdem weist das neue Material eine extrem hohe Hitzebeständigkeit auf."},
    {id:"b",t:"<strong>b)</strong> Das macht Keramik zu einem der vielseitigsten Werkstoffe der modernen Industrie."},
    {id:"c",t:"<strong>c)</strong> Denn es handelt sich um einen Stoff, der sich durch seine besondere chemische Stabilität auszeichnet."},
    {id:"d",t:"<strong>d)</strong> Diese Erkenntnis revolutionierte die Möglichkeiten der Industrie in vielerlei Hinsicht."},
    {id:"e",t:"<strong>e)</strong> Nur so kann gewährleistet werden, dass das Endprodukt den hohen Qualitätsstandards entspricht."},
    {id:"f",t:"<strong>f)</strong> Sie kann nämlich so präzise geformt werden, dass selbst kleinste Bauteile möglich sind."},
    {id:"g",t:"<strong>g)</strong> So entstand in den 1980er Jahren eine völlig neue Klasse von Keramikwerkstoffen."},
    {id:"h",t:"<strong>h)</strong> Wie diese Technik genau funktioniert, bleibt jedoch ein gut gehütetes Betriebsgeheimnis. <em>(passt nicht)</em>"}
  ],
  textps:[
    "Töpfern, Fliesen legen, Porzellan bemalen. {0} Doch Keramik ist weit mehr als Kunsthandwerk und Küchendekoration — sie hat sich zum unverzichtbaren High-Tech-Werkstoff entwickelt.",
    "Klassische Keramik kennt man aus Küche und Bad. Doch in den letzten Jahrzehnten haben Materialwissenschaftler völlig neue keramische Verbindungen entwickelt. {1} Diese Hochleistungskeramik kann mehr als ihre traditionelle Verwandte.",
    "Was macht Hochleistungskeramik so besonders? {2} Sie ist nicht nur hart und kratzfest, sondern auch extrem leicht. {3} Dadurch eignet sie sich hervorragend für den Einsatz in der Luft- und Raumfahrt sowie in der Medizintechnik.",
    "Ein besonderer Vorteil liegt in der Präzision der Fertigung. {4} Das ermöglicht den Einsatz in winzigen Mikrochips und hochkomplexen Motorteilen gleichermaßen.",
    "Die Herstellung von Hochleistungskeramik ist jedoch äußerst aufwändig. Jeder Produktionsschritt muss sorgfältig kontrolliert werden. {5} Nur wenige Unternehmen weltweit beherrschen diesen Prozess vollständig.",
    "{6} Und damit erschlossen sich der Menschheit völlig neue technische Möglichkeiten, von der Raumfahrt bis zur Zahnmedizin."
  ],
  qs:[
    {n:1,ans:"g",
     exp:"Satz g): «So entstand in den 1980er Jahren eine völlig neue Klasse von Keramikwerkstoffen.» — <em>So</em> zeigt Schlussfolgerung aus Forschungsarbeit.",
     textref:"«Materialwissenschaftler haben völlig neue keramische Verbindungen entwickelt» → Satz g): <em>So</em> = als Resultat davon.",
     rule:"<em>So</em> als Konnektor = так, таким образом (Schlussfolgerung/Ergebnis)."},
    {n:2,ans:"c",
     exp:"Satz c): «Denn es handelt sich um einen Stoff, der sich durch seine besondere chemische Stabilität auszeichnet.» — antwortet auf «Was macht Hochleistungskeramik so besonders?»",
     textref:"«Was macht Hochleistungskeramik so besonders?» → Satz c): <em>Denn</em> + chemische Stabilität = Antwort.",
     rule:"Rhetorische Frage → Antwort mit <em>Denn</em>. <em>es handelt sich um</em> = речь идёт о (C1-Floskel)."},
    {n:3,ans:"a",
     exp:"Satz a): «Außerdem weist das neue Material eine extrem hohe Hitzebeständigkeit auf.» — weiterer Vorteil nach «hart und kratzfest».",
     textref:"«nicht nur hart und kratzfest, sondern auch extrem leicht» → Satz a): <em>Außerdem</em> = ещё один плюс.",
     rule:"<em>Außerdem</em> = кроме того (Ergänzung). Fügt weiteren Vorteil hinzu."},
    {n:4,ans:"f",
     exp:"Satz f): «Sie kann nämlich so präzise geformt werden, dass selbst kleinste Bauteile möglich sind.» — erklärt den Präzisionsvorteil.",
     textref:"«Ein besonderer Vorteil liegt in der Präzision der Fertigung.» → Satz f): <em>nämlich</em> = объяснение.",
     rule:"<em>nämlich</em> = именно, а именно (объяснение после утверждения)."},
    {n:5,ans:"e",
     exp:"Satz e): «Nur so kann gewährleistet werden, dass das Endprodukt den hohen Qualitätsstandards entspricht.» — Begründung für sorgfältige Kontrolle.",
     textref:"«Jeder Produktionsschritt muss sorgfältig kontrolliert werden.» → Satz e): <em>Nur so</em> = только так.",
     rule:"<em>Nur so</em> = только таким образом (Bedingung für Qualität)."},
    {n:6,ans:"d",
     exp:"Satz d): «Diese Erkenntnis revolutionierte die Möglichkeiten der Industrie in vielerlei Hinsicht.» — fasst die Bedeutung der neuen Keramik zusammen.",
     textref:"«So entstand in den 1980er Jahren eine völlig neue Klasse» → Satz d): <em>Diese Erkenntnis</em> = diese neue Klasse.",
     rule:"<em>Diese Erkenntnis</em> = Anapher auf die neue Werkstoffklasse. Fazit-Formulierung."}
  ],
  vocab:["die Hitzebeständigkeit — жаростойкость","vielseitig — универсальный, многосторонний","auszeichnen (sich) — отличаться чем-л.","das Betriebsgeheimnis — производственная тайна","gewährleisten — гарантировать","erschließen — открывать, осваивать"]
};
