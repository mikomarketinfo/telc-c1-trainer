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

        const knowledge = await KnowledgeEngine.load(
            question.grammarId
        );

        const userText =
            userAnswer !== undefined
                ? question.options[userAnswer]
                : "Keine Antwort";

        const correctText =
            question.options[question.correct];

        html += `

            <div class="result-question">

                <h3>Aufgabe ${question.id}</h3>

                <p>${isCorrect ? "✅ Richtig" : "❌ Falsch"}</p>

                <p>
                    <strong>Ihre Antwort:</strong>
                    ${userText}
                </p>

                <p>
                    <strong>Richtige Antwort:</strong>
                    ${correctText}
                </p>

                <p>
                    <strong>Erklärung:</strong>
                    ${knowledge.shortExplanation}
                </p>

                <p>
                    <strong>Beispiel:</strong>
                    ${knowledge.example}
                </p>

                <button
                    class="learnMore primary-button"
                    data-grammar="${question.grammarId}">
                    📚 Mehr erfahren und Übungen
                </button>

                <hr>

            </div>

        `;

    }

    return html;

}