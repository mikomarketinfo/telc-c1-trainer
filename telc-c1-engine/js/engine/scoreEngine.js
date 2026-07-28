/**
 * ==========================================================
 * Score Engine
 * ==========================================================
 */

export function calculateScore(test, answers) {

    let correct = 0;

    test.questions.forEach(question => {

        const answer = answers[question.id];

        if (answer === question.correct) {

            correct++;

        }

    });

    return {

        correct,

        total: test.questions.length

    };

}