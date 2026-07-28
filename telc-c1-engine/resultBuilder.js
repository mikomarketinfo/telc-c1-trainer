/**
 * ==========================================================
 * Result Builder
 * ==========================================================
 */

export function buildResult(test, answers, score) {

    let html = `
        <h2>Ergebnis</h2>
        <p>${score.correct} von ${score.total}</p>
        <hr>
    `;

    test.questions.forEach(question => {

        const userAnswer = answers[question.id];

        const isCorrect = userAnswer === question.correct;

        const userText =
            userAnswer !== undefined
                ? question.options[userAnswer]
                : "Keine Antwort";

        const correctText =
            question.options[question.correct];

        html += `

            <div class="result-question">

                <h3>Aufgabe ${question.id}</h3>

                <p>

                    ${isCorrect ? "✅ Richtig" : "❌ Falsch"}

                </p>

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

                    ${question.explanation.correctWhy}

                </p>

                <hr>

            </div>

        `;

    });

    return html;

}