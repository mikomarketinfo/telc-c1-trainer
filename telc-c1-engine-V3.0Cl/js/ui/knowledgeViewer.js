/**
 * ==========================================================
 * Knowledge Viewer
 * ==========================================================
 */
import { $ } from "../utils/helpers.js";
import { createButton } from "./button.js";
import { KnowledgeEngine } from "../engine/knowledgeEngine.js";
import { createCard } from "./card.js";
import { createTitle } from "./title.js";

/**
 * Extended topics (with more.rows) list every connector with its position
 * rule, a Russian hint and several examples. Older topics are unchanged.
 */
function renderExtended(more) {
    if (!more || !Array.isArray(more.rows) || more.rows.length === 0) {
        return "";
    }
    const rows = more.rows
        .map((row) => {
            const examples = (row.examples || [])
                .map(
                    (e) =>
                        `<li><span class="de-example">${e.de}</span>${
                            e.ru ? `<br><span class="ru-example">${e.ru}</span>` : ""
                        }</li>`
                )
                .join("");
            return `
                <div class="knowledge-row">
                    <h4>${row.connector} <small>${row.position || ""}</small></h4>
                    ${row.meaning ? `<p>${row.meaning}</p>` : ""}
                    <ul>${examples}</ul>
                </div>`;
        })
        .join("");
    const tips = (more.tips || []).map((t) => `<li>${t}</li>`).join("");
    return `
        ${more.rule ? `<h3>Regel</h3><p>${more.rule}</p>` : ""}
        <h3>Konnektoren und Beispiele</h3>
        ${rows}
        ${tips ? `<h3>Tipps</h3><ul>${tips}</ul>` : ""}
    `;
}

export async function openKnowledge(grammarId) {
    const knowledge = await KnowledgeEngine.load(grammarId);
    const card = createCard();
    const title = createTitle(knowledge.title);
    card.appendChild(title);

    $("app").innerHTML = `
        <section class="card">
            <div id="knowledgeTitle"></div>
            <hr>
            <h3>Erklärung</h3>
            <p>${knowledge.shortExplanation}</p>
            <h3>Beispiel</h3>
            <p><strong>${knowledge.example}</strong></p>
            ${renderExtended(knowledge.more)}
            <hr>
            <div id="knowledgeButtons"></div>
        </section>
    `;

    $("knowledgeTitle").appendChild(title);

    const panel = $("knowledgeButtons");
    panel.appendChild(
        createButton({ id: "exerciseButton", text: "Übungen", type: "primary" })
    );
    panel.appendChild(
        createButton({ id: "miniTestButton", text: "Mini-Test", type: "secondary" })
    );
    panel.appendChild(
        createButton({ id: "backButton", text: "Zurück", type: "secondary", icon: "←" })
    );

    $("backButton").addEventListener("click", () => history.back());
}
