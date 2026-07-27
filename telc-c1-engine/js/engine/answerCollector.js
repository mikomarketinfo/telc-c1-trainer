/**
 * ==========================================================
 * TELC C1 Engine
 * Answer Collector
 * ==========================================================
 */

/**
 * Collect all selected answers.
 *
 * @returns {Object}
 */
export function collectAnswers() {

    const answers = {};

    const radios = document.querySelectorAll(
        "input[type='radio']:checked"
    );

    radios.forEach(radio => {

        const questionId = radio.name.replace("q", "");

        answers[questionId] = Number(radio.value);

    });

    return answers;

}