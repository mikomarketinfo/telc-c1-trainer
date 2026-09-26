/**
 * ==========================================================
 * Result Builder
 * ==========================================================
 */
import { KnowledgeEngine } from "./knowledgeEngine.js";

export async function buildResult(test, answers, score) {
    let html = `
        <h2>Ergebnis</h2>
        <p>${score.correct} von ${score.total}</p>
        <hr>
    `;

    for (const question of test.questions) {
        const userAnswer = answers[question.id];
        const isCorrect = userAnswer === question.correct;
        const userText =
            userAnswer !== undefined ? question.options[userAnswer] : "Keine Antwort";
        const correctText = question.options[question.correct];

        html += `
            <div class="result-question">
                <h3>Aufgabe ${question.id}</h3>
                <p>${isCorrect ? "✅ Richtig" : "❌ Falsch"}</p>
                <p><strong>Ihre Antwort:</strong> ${userText}</p>
                <p><strong>Richtige Antwort:</strong> ${correctText}</p>
                ${await buildExplanation(question)}
                <hr>
            </div>
        `;
    }

    return html;
}

/**
 * Build the explanation block for one question.
 * Grammar questions (Sprachbausteine) link to a Knowledge Base entry.
 * Comprehension questions (Leseverstehen) show the inline explanation only.
 *
 * @param {Object} question
 * @returns {Promise<string>}
 */
async function buildExplanation(question) {
    let html = "";

    // 1. Specific explanation for THIS question always comes first (if present).
    if (question.explanation) {
        const rule = question.explanation.rule || "";
        const why = question.explanation.correctWhy || "";
        html += `<p><strong>Erklärung:</strong> ${rule}</p>`;
        if (why && why !== rule) {
            html += `<p><strong>Warum genau diese Antwort:</strong> ${why}</p>`;
        }
    }

    // 2. Optional link to the broader grammar topic in the Knowledge Base.
    if (question.grammarId) {
        const knowledge = await KnowledgeEngine.load(question.grammarId);
        if (!question.explanation) {
            // No question-specific explanation was provided - fall back to the
            // general Knowledge Base entry as the main explanation.
            html += `
                <p><strong>Erklärung:</strong> ${knowledge.shortExplanation}</p>
                <p><strong>Beispiel:</strong> ${knowledge.example}</p>
            `;
        }
        html += `
            <button
                class="learnMore primary-button"
                data-grammar="${question.grammarId}">
                📚 Mehr zum Thema "${knowledge.title}" und Übungen
            </button>
        `;
    }

    return html;
}
