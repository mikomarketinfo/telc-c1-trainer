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
import { setAnswer, clearAnswers } from "./appState.js";

export function collectAnswers() {
    
    clearAnswers();

    const answers = {};

    const radios = document.querySelectorAll(
        "input[type='radio']:checked"
    );

    radios.forEach(radio => {

        const questionId = radio.name.replace("q", "");

        const selected = Number(radio.value);

        answers[questionId] = selected;

            setAnswer(

                questionId,

                selected

            );

    });

    return answers;

}