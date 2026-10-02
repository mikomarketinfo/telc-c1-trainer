// test-lv1k.js — Leseverstehen Teil 1
window.TELC_TEST = {
  id:"lv1k", type:"Leseverstehen Teil 1", kind:"lv1",
  title:"Auf Goldsuche in Deutschland",
  desc:"6 Satz-Zuordnungen · Textrekonstruktion · C1",
  satze:[
    {id:"z", t:"<strong>z)</strong> Gold fasziniert die Menschen seit Jahrtausenden — nicht nur als Schmuck, sondern auch als Wirtschafts- und Machtfaktor. <em>(Beispiel)</em>"},
    {id:"a", t:"<strong>a)</strong> Allerdings sind die Mengen, die Hobbyschürfer heute finden, meist so gering, dass sie den Aufwand kaum lohnen."},
    {id:"b", t:"<strong>b)</strong> Daher ist es ratsam, sich vor einer Goldsuche über die geltenden Gesetze zu informieren, da diese von Bundesland zu Bundesland variieren."},
    {id:"c", t:"<strong>c)</strong> Dennoch zieht das Goldsuchen jedes Jahr Tausende von Hobbyschürfern in die Natur."},
    {id:"d", t:"<strong>d)</strong> Diese Hoffnung hat eine lange Geschichte, die bis ins Mittelalter zurückreicht."},
    {id:"e", t:"<strong>e)</strong> Die meisten Goldvorkommen in Deutschland entstanden durch geologische Prozesse, bei denen goldhaltiges Gestein durch Erosion abgetragen und in Flussbetten abgelagert wurde."},
    {id:"f", t:"<strong>f)</strong> Goldwaschen gilt im deutschen Recht nicht überall als erlaubt und kann in bestimmten Naturschutzgebieten sogar unter Strafe stehen."},
    {id:"g", t:"<strong>g)</strong> Obwohl Deutschland kein klassisches Goldland ist, gibt es hier tatsächlich einige Regionen, in denen Gold gefunden werden kann."},
    {id:"h", t:"<strong>h)</strong> So hat die Goldsuche in manchen Regionen eine neue wirtschaftliche Bedeutung als Tourismusangebot erhalten. <em>(passt nicht)</em>"}
  ],
  textps:[
    "«Vielleicht steckt ja doch ein kleines Nugget im Bach» — dieser Gedanke treibt viele Menschen hinaus an die Flussufer. {0} Schon im Mittelalter suchten Menschen in deutschen Flüssen nach dem glänzenden Edelmetall.",
    "{1} Tatsächlich lässt sich in Flüssen wie dem Rhein, der Isar oder dem Schwarzwälder Kinzig noch heute Gold finden.",
    "Aber woher kommt das Gold überhaupt? {2} Durch die Strömung werden diese sogenannten Seifengoldvorkommen transportiert und abgelagert — typischerweise hinter Felsen oder in Flussbiegungen, wo das Wasser langsamer wird.",
    "Die Realität des Goldwaschens ist jedoch nüchterner als der Traum. {3} Selbst in ertragreichen Jahren sprechen Experten von wenigen Gramm — ein eher symbolischer Gewinn im Vergleich zum Zeitaufwand.",
    "Wer dennoch auf Schatzsuche gehen möchte, sollte sich gründlich vorbereiten. {4} In einigen Regionen sind spezielle Genehmigungen erforderlich, in anderen ist das Goldwaschen als traditioneller Brauch offiziell anerkannt.",
    "{5} Mit der richtigen Ausrüstung und dem nötigen Wissen kann das Goldwaschen jedoch zu einem unvergesslichen Naturerlebnis werden.",
    "Clubs und Vereine bieten inzwischen geführte Goldwaschen an, bei denen Anfänger die Technik erlernen können. {6} Für die meisten Teilnehmer steht dabei weniger das Gold im Vordergrund als das Erlebnis selbst."
  ],
  qs:[
    {n:1, ans:"d",
     exp:"Satz d): «Diese Hoffnung hat eine lange Geschichte, die bis ins Mittelalter zurückreicht.» — <em>Diese Hoffnung</em> = die Hoffnung, ein Nugget zu finden (vorheriger Satz).",
     textref:"«Vielleicht steckt doch ein kleines Nugget im Bach» → <em>Diese Hoffnung</em> in Satz d) = diese Hoffnung auf Gold.",
     rule:"<em>Diese</em> (fem.) → bezieht sich auf <em>die Hoffnung</em>. Temporale Ergänzung: «bis ins Mittelalter»."},
    {n:2, ans:"g",
     exp:"Satz g): «Obwohl Deutschland kein klassisches Goldland ist, gibt es hier tatsächlich einige Regionen …» — Einschränkung + positive Information über Fundorte.",
     textref:"«Schon im Mittelalter suchten Menschen in deutschen Flüssen nach Gold» → Satz g): <em>tatsächlich</em> bestätigt die Möglichkeit.",
     rule:"<em>Obwohl … dennoch / tatsächlich</em> = Konzession + Gegenargument. Typische C1-Struktur."},
    {n:3, ans:"e",
     exp:"Satz e): «Die meisten Goldvorkommen entstanden durch geologische Prozesse … abgelagert.» — antwortet auf «Woher kommt das Gold?»",
     textref:"«Aber woher kommt das Gold überhaupt?» → Satz e) = direkte Antwort auf die Frage.",
     rule:"Rhetorische Frage → Antwort. Satz e) erklärt den geologischen Ursprung."},
    {n:4, ans:"a",
     exp:"Satz a): «Allerdings sind die Mengen meist so gering, dass sie den Aufwand kaum lohnen.» — Einschränkung nach «nüchterner als der Traum».",
     textref:"«Die Realität des Goldwaschens ist nüchterner als der Traum.» → Satz a) liefert die konkrete Einschränkung.",
     rule:"<em>Allerdings</em> = однако (Einschränkung). Konkretisiert die nüchterne Realität."},
    {n:5, ans:"b",
     exp:"Satz b): «Daher ist es ratsam, sich über die geltenden Gesetze zu informieren …» — Empfehlung zur Vorbereitung.",
     textref:"«Wer auf Schatzsuche gehen möchte, sollte sich gründlich vorbereiten.» → Satz b): <em>Daher</em> = следовательно.",
     rule:"<em>Daher</em> = поэтому (следствие). Логическое следствие aus der Empfehlung zur Vorbereitung."},
    {n:6, ans:"c",
     exp:"Satz c): «Dennoch zieht das Goldsuchen jedes Jahr Tausende von Hobbyschürfern in die Natur.» — trotz rechtlicher Einschränkungen bleibt es beliebt.",
     textref:"Zuvor: rechtliche Einschränkungen + geltende Gesetze → Satz c): <em>Dennoch</em> = тем не менее.",
     rule:"<em>Dennoch</em> = тем не менее (Gegenargumentation). Trotz Hindernissen: Beliebtheit bleibt."}
  ],
  vocab:["der Schürfer — золотоискатель","das Nugget — самородок (золота)","die Erosion — эрозия","das Seifengold — россыпное золото","nüchtern — трезвый, реалистичный","ertragreich — урожайный, прибыльный","variieren — варьироваться"]
};
