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
import { goBack } from "../router.js";
export async function openKnowledge(grammarId) {
    const knowledge = await KnowledgeEngine.load(grammarId);
    const card = createCard();
    const title = createTitle(knowledge.title);
    card.appendChild(title);
    $("app").innerHTML = `
        <section class="card">
            <div id="knowledgeTitle"></div>
            <hr>
            <h3>
                Erklärung
            </h3>
            <p>
                ${knowledge.shortExplanation}
            </p>
            <h3>
                Beispiel
            </h3>
            <p>
                <strong>
                    ${knowledge.example}
                </strong>
            </p>
            <hr>
            <hr>
<div id="knowledgeButtons">
</div>
</section>
    `;
    $("knowledgeTitle").appendChild(title);
    const panel = $("knowledgeButtons");
    panel.appendChild(
        createButton({
            id: "exerciseButton",
            text: "Übungen",
            type: "primary"
        })
    );
    panel.appendChild(
        createButton({
            id: "miniTestButton",
            text: "Mini-Test",
            type: "secondary"
        })
    );
    panel.appendChild(
        createButton({
            id: "backButton",
            text: "Zurück",
            type: "secondary",
            icon: "←"
        })
    );
    $("backButton").addEventListener("click", () => goBack());
}
