/**
 * ==========================================================
 * TELC C1 Engine
 * ==========================================================
 */

import { CONFIG } from "./config.js";
import { TestLoader } from "./engine/testLoader.js";
import { renderTest } from "./ui/renderer.js";
import { $, debug } from "./utils/helpers.js";
import { collectAnswers } from "./engine/answerCollector.js";
import { calculateScore } from "./engine/scoreEngine.js";
import { renderResult } from "./ui/resultRenderer.js";
import { buildResult } from "./engine/resultBuilder.js";

window.addEventListener(

    "DOMContentLoaded",

    init

);

async function init(){

    $("version").textContent=

        CONFIG.VERSION;

    try{

        const test=

            await TestLoader.load(

                "../data/sprachbausteine/sb0001.json"

            );

        debug(

            "Loaded",

            test.meta.id

        );

        renderTest(test);
        const button = $("checkAnswers");

    button.addEventListener("click", () => {

    const answers = collectAnswers();

    const score = calculateScore(

        test,

        answers

    );

    const html = buildResult(

    test,

    answers,

    score

);

renderResult(html);

});

    }

    catch(error){

        console.error(error);

        $("app").innerHTML=

            `<section class="card">

                <h2>Fehler</h2>

                <p>${error.message}</p>

            </section>`;

    }

}

