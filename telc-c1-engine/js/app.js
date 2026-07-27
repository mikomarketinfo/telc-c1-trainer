/**
 * ==========================================================
 * TELC C1 Engine
 * Application Entry Point
 * ==========================================================
 */

import { CONFIG } from "./config.js";
import { $, debug } from "./utils/helpers.js";
import { TestLoader } from "./engine/testLoader.js";

window.addEventListener("DOMContentLoaded", init);

async function init() {

    showVersion();

    debug("Application started.");

    try {

        const test = await TestLoader.load(
            "../data/sprachbausteine/sb0001.json"
        );

        renderTest(test);

    } catch (error) {

        console.error(error);

        $("app").innerHTML = `
            <section class="card">
                <h1>Fehler</h1>
                <p>${error.message}</p>
            </section>
        `;

    }

}

function showVersion() {

    $("version").textContent = CONFIG.VERSION;

}

function renderTest(test) {

    const app = $("app");

    const question = test.questions[0];

    app.innerHTML = `
        <section class="card">

            <h1>${test.meta.title}</h1>

            <p><strong>Thema:</strong> ${test.meta.topic}</p>

            <hr>

            <p>${test.content.text}</p>

            <br>

            <h2>Beispiel</h2>

            <p>${question.text}</p>

            <ul>
                ${question.options
                    .map(
                        (option, index) =>
                            `<li>${String.fromCharCode(
                                65 + index
                            )}. ${option}</li>`
                    )
                    .join("")}
            </ul>

        </section>
    `;

}