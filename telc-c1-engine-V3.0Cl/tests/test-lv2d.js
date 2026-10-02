// test-lv2d.js — TELC C1
window.TELC_TEST = {
  id:"lv2_4", type:"Leseverstehen Teil 2", kind:"lv2",
  title:"Was ist ein Artega?",
  desc:"6 Fragen · In welchem Abschnitt? · C1",
  textps:[
    "<strong>Abschnitt a:</strong> Gibt es noch Unbekanntes auf dem Automobilmarkt? Offensichtlich ja. Denn eine kleine, aber wachsende Gruppe von Enthusiasten schwört auf Fahrzeuge, die man nicht auf der Straße kaufen kann: Kleinseriensportwagen. Der Artega GT ist so ein Auto. Für ihn muss man tief in die Tasche greifen — und doch stehen Liebhaber Schlange.",
    "<strong>Abschnitt b:</strong> Der Artega GT ist ein deutsches Produkt, gebaut in Delbrück bei Paderborn. Gegründet wurde das Unternehmen von Klaus Dieter Frers, einem erfahrenen Automobilingenieur, der zuvor für namhafte Hersteller gearbeitet hatte. Das Ziel: ein leichter, agiler Sportwagen, der Fahrfreude in ihrer reinsten Form bietet — ohne unnötigen Schnickschnack.",
    "<strong>Abschnitt c:</strong> Die technischen Daten sprechen für sich: Der Artega GT wiegt lediglich 1050 Kilogramm und wird von einem 300 PS starken Motor angetrieben. Damit beschleunigt er in 4,8 Sekunden von null auf hundert Kilometer pro Stunde. Die Höchstgeschwindigkeit liegt bei 270 km/h. Interessant dabei: Das Fahrzeug erfüllt trotz seiner Sportlichkeit alle europäischen Abgasnormen.",
    "<strong>Abschnitt d:</strong> Was den Artega von anderen Sportwagen unterscheidet, ist sein Karosserie-Konzept. Statt auf schweres Stahlblech setzt das Unternehmen auf eine Kombination aus Aluminium und glasfaserverstärktem Kunststoff. Das spart Gewicht und erhöht gleichzeitig die Steifigkeit der Karosserie. Ähnliche Technologien werden sonst nur im Rennsport eingesetzt.",
    "<strong>Abschnitt e:</strong> Wer einen Artega kaufen möchte, muss sich in Geduld üben. Die Produktionskapazität ist bewusst klein gehalten, um die hohe Qualität zu sichern. Pro Jahr verlassen nur etwa 200 Fahrzeuge das Werk. Das macht jeden Artega zu einem seltenen Sammlerstück — und erklärt, warum Besitzer stolz auf ihr Fahrzeug sind."
  ],
  qs:[
    {n:7,t:"In welchem Abschnitt werden die Leistungsdaten des Fahrzeugs genannt? (технические характеристики)",
     opts:["a","b","c","d","e"],ans:"c",
     exp:"Abschnitt c): Gewicht (1050 kg), PS (300), Beschleunigung (4,8 s), Höchstgeschwindigkeit (270 km/h) — konkrete Zahlen.",
     rule:"Leistungsdaten = technische Zahlen: Gewicht, PS, Beschleunigung, Geschwindigkeit."},
    {n:8,t:"In welchem Abschnitt wird erklärt, warum der Artega selten ist? (почему редкий)",
     opts:["a","b","c","d","e"],ans:"e",
     exp:"Abschnitt e): «Pro Jahr verlassen nur etwa 200 Fahrzeuge das Werk» — begrenzte Produktion macht ihn selten.",
     rule:"Kausalität: begrenzte Produktionskapazität → Seltenheit → Sammlerstück."},
    {n:9,t:"In welchem Abschnitt werden die Ziele bei der Entwicklung des Fahrzeugs beschrieben? (цели разработки)",
     opts:["a","b","c","d","e"],ans:"b",
     exp:"Abschnitt b): «Das Ziel: ein leichter, agiler Sportwagen, der Fahrfreude in ihrer reinsten Form bietet.»",
     rule:"<em>Das Ziel:</em> = прямое указание на цель. Типичная структура: Ziel + Doppelpunkt + Beschreibung."},
    {n:10,t:"In welchem Abschnitt wird der Artega mit anderen Fahrzeugen verglichen? (сравнивается с другими)",
     opts:["a","b","c","d","e"],ans:"d",
     exp:"Abschnitt d): «Ähnliche Technologien werden sonst nur im Rennsport eingesetzt.» — Vergleich mit Rennsport.",
     rule:"Vergleich erkennbar: <em>sonst nur</em> = только в других контекстах. Vergleich durch Einordnung."},
    {n:11,t:"In welchem Abschnitt wird der Artega als Luxusprodukt eingeführt? (представлен как роскошный товар)",
     opts:["a","b","c","d","e"],ans:"a",
     exp:"Abschnitt a): «muss man tief in die Tasche greifen» = teuer. Einführung als exklusives Nischenprodukt.",
     rule:"<em>tief in die Tasche greifen</em> = раскошелиться (идиома). Kennzeichnet Luxusprodukt."},
    {n:12,t:"In welchem Abschnitt wird das spezielle Material der Karosserie erklärt? (материал кузова)",
     opts:["a","b","c","d","e"],ans:"d",
     exp:"Abschnitt d): «Aluminium und glasfaserverstärktem Kunststoff» statt Stahlblech — spezifische Materialangabe.",
     rule:"Materialangabe + technische Begründung (Gewicht + Steifigkeit) = Abschnitt d)."}
  ],
  vocab:["der Kleinseriensportwagen — мелкосерийный спортивный автомобиль","agil — быстрый, манёвренный","der Schnickschnack — ненужные украшения, излишества","die Karosserie — кузов автомобиля","glasfaserverstärkt — усиленный стекловолокном","die Steifigkeit — жёсткость","das Sammlerstück — коллекционный предмет"]
};
