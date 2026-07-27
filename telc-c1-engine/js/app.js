/**
 * ==========================================================
 * TELC C1 Engine
 * ==========================================================
 */

import { CONFIG } from "./config.js";
import { TestLoader } from "./engine/testLoader.js";
import { renderTest } from "./ui/renderer.js";
import { $, debug } from "./utils/helpers.js";

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
