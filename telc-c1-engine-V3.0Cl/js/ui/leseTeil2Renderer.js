/**
 * ==========================================================
 * Leseverstehen Teil 2 — Selektives Verstehen
 * ==========================================================
 */
import { $, create } from "../utils/helpers.js";
import { getAnswers } from "../engine/appState.js";
import { createQuestionBlock } from "./questionBlock.js";
import { renderTestHeader } from "./testHeader.js";

export function renderLeseTeil2(test) {
    const app = $("app");
    app.innerHTML = "";

    const sections = test.content.sections
        .map(
            (section) => `
        <p><strong class="section-label">Abschnitt ${section.id})</strong> ${section.text}</p>
    `
        )
        .join("");

    const card = create("section");
    card.className = "card";
    card.innerHTML = `
        ${renderTestHeader(test)}
        <hr>
        <p>${test.content.instruction}</p>
        <div class="reading-text">${sections}</div>
        <hr>
        <div id="questions"></div>
    `;
    app.appendChild(card);

    const container = $("questions");
    const answers = getAnswers();

    test.questions.forEach((question) => {
        container.appendChild(createQuestionBlock(question, answers));
    });

    const button = create("button");
    button.id = "checkAnswers";
    button.className = "check-button";
    button.textContent = "Antworten prüfen";
    card.appendChild(button);
}
