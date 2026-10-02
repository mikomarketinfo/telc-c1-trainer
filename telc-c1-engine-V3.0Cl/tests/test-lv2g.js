// test-lv2g.js — Leseverstehen Teil 2
window.TELC_TEST = {
  id:"lv2g", type:"Leseverstehen Teil 2", kind:"lv2",
  title:'Dann geh doch zu Fuß, Schatz!',
  desc:"6 Fragen · In welchem Abschnitt? · C1",
  textps:[
    "<strong>Abschnitt a:</strong> Wenn ich meiner Partnerin sage, dass ich das Auto bald reparieren muss, macht sie große Augen. «Schon wieder?», fragt sie. Ja, schon wieder. Denn ein altes Auto zu besitzen bedeutet in dieser Stadt: ständig schrauben, ständig Geld ausgeben, ständig erklären. Warum ich es trotzdem behalte? Ganz einfach: Ich liebe es. Es ist mein erstes Auto, Baujahr 1987, und ich werde es nicht hergeben.",
    "<strong>Abschnitt b:</strong> Dabei hat meine Partnerin statistisch gesehen natürlich recht. Der öffentliche Nahverkehr in unserer Stadt ist tatsächlich besser geworden. Die neue U-Bahn-Linie verbindet mittlerweile alle wichtigen Stadtteile. Wer flexibel ist und nicht auf den letzten Drücker zur Arbeit muss, kommt problemlos ohne Auto durch den Alltag. Das gebe ich offen zu.",
    "<strong>Abschnitt c:</strong> Trotzdem wäre ein Leben ohne Auto für mich unvorstellbar. Nicht wegen der Bequemlichkeit — das wäre ein schlechtes Argument. Sondern weil das Auto für mich ein Stück Freiheit bedeutet. Spontan in den Urlaub fahren, die Schwiegereltern besuchen, nachts um drei Uhr noch irgendwohin — das geht nur mit eigenem Auto. Diese Freiheit hat ihren Preis, und den zahle ich gerne.",
    "<strong>Abschnitt d:</strong> Natürlich ist mir auch klar, dass Autos zur Umweltbelastung beitragen. Die Debatten über Feinstaubwerte, CO₂-Emissionen und den Klimawandel nehme ich ernst. Ich kaufe Bio-Lebensmittel, trenne meinen Müll gewissenhaft und fliege so wenig wie möglich. Mein Auto ist sozusagen mein einziges ökologisches Sündenkonto — und dafür schäme ich mich ein bisschen.",
    "<strong>Abschnitt e:</strong> Letztendlich muss jeder selbst entscheiden, welche Kompromisse er eingeht. Eine pauschale Verurteilung von Autofahrern halte ich für genauso falsch wie eine Verharmlosung der ökologischen Folgen. Was mich stört, sind Dogmatiker auf beiden Seiten: die, die jeden, der kein Auto fährt, für weltfremd halten, und die, die Autobesitzer pauschal als Klimakiller beschimpfen. Der vernünftige Mittelweg fehlt in dieser Debatte oft."
  ],
  qs:[
    {n:7,  t:"In welchem Abschnitt räumt der Autor Fehler oder Schwächen ein? (автор признаёт слабости)",
     opts:["a","b","c","d","e"], ans:"d",
     exp:"Abschnitt d): «dafür schäme ich mich ein bisschen» — der Autor gibt zu, dass sein Auto ein ökologisches Problem darstellt.",
     rule:"Eingestehen von Fehlern: <em>schäme ich mich</em> + <em>nehme ich ernst</em> = признание слабости/вины."},
    {n:8,  t:"In welchem Abschnitt begründet der Autor seinen Standpunkt mit einem emotionalen Argument? (эмоциональный аргумент)",
     opts:["a","b","c","d","e"], ans:"a",
     exp:"Abschnitt a): «Es ist mein erstes Auto … und ich werde es nicht hergeben» — emotionale Bindung, nicht rationale Begründung.",
     rule:"Emotionales Argument: persönliche Bindung, Nostalgie, Gefühle. Kein sachliches Argument."},
    {n:9,  t:"In welchem Abschnitt gibt der Autor zu, dass das Gegenargument sachlich korrekt ist? (признаёт правоту оппонента)",
     opts:["a","b","c","d","e"], ans:"b",
     exp:"Abschnitt b): «meine Partnerin hat statistisch gesehen natürlich recht … Das gebe ich offen zu.»",
     rule:"<em>Das gebe ich offen zu</em> = открыто признаю. Konzession = уступка оппоненту."},
    {n:10, t:"In welchem Abschnitt kritisiert der Autor extreme Positionen auf beiden Seiten? (критикует крайние позиции)",
     opts:["a","b","c","d","e"], ans:"e",
     exp:"Abschnitt e): «Dogmatiker auf beiden Seiten» — sowohl Auto-Fans als auch Klimaaktivisten werden kritisiert.",
     rule:"Beide Seiten kritisiert: <em>auf beiden Seiten</em> = на обеих сторонах. Ausgeglichene Kritik."},
    {n:11, t:"In welchem Abschnitt nennt der Autor konkrete Situationen, die ein Auto erfordern? (конкретные ситуации, требующие машину)",
     opts:["a","b","c","d","e"], ans:"c",
     exp:"Abschnitt c): «spontan in den Urlaub, Schwiegereltern besuchen, nachts um drei» — drei konkrete Beispiele.",
     rule:"Konkrete Situationen = spezifische Beispiele mit Verben (fahren, besuchen). Keine abstrakten Argumente."},
    {n:12, t:"In welchem Abschnitt wird zugegeben, dass der öffentliche Nahverkehr gut funktioniert? (признаёт хороший транспорт)",
     opts:["a","b","c","d","e"], ans:"b",
     exp:"Abschnitt b): «Der öffentliche Nahverkehr in unserer Stadt ist tatsächlich besser geworden … kommt problemlos ohne Auto durch.»",
     rule:"<em>tatsächlich besser geworden</em> + <em>problemlos ohne Auto</em> = признание качества ÖPNV."}
  ],
  vocab:["auf den letzten Drücker — в последний момент","das Sündenkonto — список грехов","gewissenhaft — добросовестно","die Verharmlosung — преуменьшение","pauschal — огульно, без разбора","der Dogmatiker — догматик","der Kompromiss — компромисс"]
};
