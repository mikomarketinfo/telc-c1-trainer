/**
 * ==========================================================
 * Leseverstehen Teil 1 — Textrekonstruktion
 * ==========================================================
 */
import { $, create } from "../utils/helpers.js";
import { getAnswers } from "../engine/appState.js";
import { createQuestionBlock } from "./questionBlock.js";
import { renderTestHeader } from "./testHeader.js";

export function renderLeseTeil1(test) {
    const app = $("app");
    app.innerHTML = "";

    const paragraphs = test.content.paragraphs.map((p) => `<p>${p}</p>`).join("");
    const sentenceList = test.content.sentences
        .map((s) => `<p><strong>${s.id})</strong> ${s.text}</p>`)
        .join("");

    const card = create("section");
    card.className = "card";
    card.innerHTML = `
        ${renderTestHeader(test)}
        <hr>
        <p>${test.content.instruction}</p>
        <div class="reading-text">${paragraphs}</div>
        <div class="sentence-pool">
            <h3>Sätze (2 passen nicht):</h3>
            ${sentenceList}
        </div>
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
