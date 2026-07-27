/**
 * ==========================================================
 * Sprachbausteine Renderer
 * ==========================================================
 */

import { $, create } from "../utils/helpers.js";

export function renderSprachbausteine(test) {

    const app = $("app");

    app.innerHTML = "";

    const card = create("section");

    card.className = "card";

    card.innerHTML = `

        <h1>${test.meta.title}</h1>

        <p>

            <strong>Thema:</strong>

            ${test.meta.topic}

        </p>

        <hr>

        <p>

            ${test.content.instruction}

        </p>

        <br>

        <div id="questions">

        </div>

    `;

    app.appendChild(card);

    const container = $("questions");

        test.questions.forEach(question => {

        container.appendChild(

            createQuestion(question)

        );

    });

    const button = create("button");

    button.id = "checkAnswers";

    button.className = "check-button";

    button.textContent = "Antworten prüfen";

    card.appendChild(button);

}

function createQuestion(question) {

    const block = create("div");

    block.className = "question";

    let html = `

        <h3>

            Aufgabe ${question.id}

        </h3>

        <p>

            ${question.text}

        </p>

    `;

    question.options.forEach(

        (option,index)=>{

            html += `

            <label class="option">

                <input

                    type="radio"

                    name="q${question.id}"

                    value="${index}">

                ${String.fromCharCode(65+index)}.

                ${option}

            </label>

            `;

        }

    );

    block.innerHTML = html;

    return block;

}
