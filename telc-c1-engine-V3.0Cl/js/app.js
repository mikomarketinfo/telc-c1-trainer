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
import { openKnowledge } from "./ui/knowledgeViewer.js";
import { buildResult } from "./engine/resultBuilder.js";
import { registerPage } from "./router.js";
import { setCurrentTest } from "./engine/appState.js";
window.addEventListener("DOMContentLoaded", init);
async function init() {
    $("version").textContent = CONFIG.VERSION;
    try {
        const test = await TestLoader.load("../data/sprachbausteine/sb0001.json");
        debug("Loaded", test.meta.id);
        renderTest(test);
        setCurrentTest(test);
        registerPage((state) => {
            renderTest(state.currentTest);
        });
        const button = $("checkAnswers");
        button.addEventListener("click", async () => {
            const answers = collectAnswers();
            const score = calculateScore(test, answers);
            const html = await buildResult(test, answers, score);
            renderResult(html);
            document.querySelectorAll(".learnMore").forEach((button) => {
                button.addEventListener("click", async () => {
                    await openKnowledge(button.dataset.grammar);
                });
            });
        });
    } catch (error) {
        console.error(error);
        $("app").innerHTML = `<section class="card">
                <h2>Fehler</h2>
                <p>${error.message}</p>
            </section>`;
    }
}
