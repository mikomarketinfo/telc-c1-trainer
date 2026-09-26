/**
 * ==========================================================
 * Question Block
 * Shared rendering logic for any multiple-choice question
 * (used by Sprachbausteine and Leseverstehen).
 * ==========================================================
 */
import { create } from "../utils/helpers.js";

/**
 * Render a single question with radio-button options.
 *
 * @param {Object} question
 * @param {Object} answers
 * @returns {HTMLElement}
 */
export function createQuestionBlock(question, answers) {
    const block = create("div");
    block.className = "question";

    let html = `
        <h3>Aufgabe ${question.id}</h3>
        <p>${question.text}</p>
    `;

    question.options.forEach((option, index) => {
        const checked = Number(answers[question.id]) === index ? "checked" : "";
        html += `
            <label class="option">
                <input type="radio" name="q${question.id}" value="${index}" ${checked}>
                ${String.fromCharCode(65 + index)}.
                ${option}
            </label>
        `;
    });

    block.innerHTML = html;
    return block;
}
