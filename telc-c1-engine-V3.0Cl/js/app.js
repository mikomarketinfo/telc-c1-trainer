/**
 * ==========================================================
 * TELC C1 Engine
 * ==========================================================
 */
import { CONFIG } from "./config.js";
import { TestLoader } from "./engine/testLoader.js";
import { LibraryLoader } from "./engine/libraryLoader.js";
import { renderTest } from "./ui/renderer.js";
import { renderLibraryPage } from "./pages/libraryPage.js";
import { renderPlaceholderPage } from "./pages/placeholderPage.js";
import { $, debug } from "./utils/helpers.js";
import { collectAnswers } from "./engine/answerCollector.js";
import { calculateScore } from "./engine/scoreEngine.js";
import { renderResult } from "./ui/resultRenderer.js";
import { openKnowledge } from "./ui/knowledgeViewer.js";
import { buildResult } from "./engine/resultBuilder.js";
import { setCurrentTest, clearAnswers } from "./engine/appState.js";
import { addRoute, startRouter, getCurrentPath, navigate } from "./router/router.js";
import { updateSidebar } from "./layout/layout.js";
import { ZitateLoader } from "./engine/zitateLoader.js";
import { renderZitatePage } from "./pages/zitatePage.js";
import { renderZitateViewer } from "./ui/zitateViewer.js";
import { renderZitatLernkarte } from "./ui/zitateLernkarte.js";

let libraryCache = null;

window.addEventListener("DOMContentLoaded", init);

async function init() {
    $("version").textContent = CONFIG.VERSION;

    addRoute("/library", showLibrary);
    addRoute("/test/:id", showTest);
    addRoute("/zitate", showZitatePage);
    addRoute("/zitate/:theme", (params) => showZitateViewer(params.theme, 0));
    addRoute("/zitate/:theme/:index", (params) =>
        showZitateViewer(params.theme, Number(params.index))
    );
    addRoute("/zitate/:theme/:index/lernkarte", (params) =>
        showZitatLernkarte(params.theme, Number(params.index))
    );
    addRoute("/zitate-exercise/:id", showZitateExercise);
    addRoute("/exercises", () =>
        showPlaceholder("🧩 Übungen", "Wird in Block 5 gebaut (Übungen je Regel).")
    );
    addRoute("/knowledge", () =>
        showPlaceholder("🧠 Wissen", "Wird in Block 6 gebaut (Wissensdatenbank + Mindmap).")
    );
    addRoute("/exam", () =>
        showPlaceholder("🏆 Volle Prüfung", "Wird in Block 4 gebaut (Zeitlimit / ohne Zeitlimit).")
    );
    addRoute("/profile", () =>
        showPlaceholder("👤 Profil", "Wird in Block 7 gebaut (lokales Profil, Fehlerliste).")
    );

    window.addEventListener("hashchange", () => updateSidebar(getCurrentPath()));
    updateSidebar(getCurrentPath());

    startRouter();
}

async function getLibrary() {
    if (!libraryCache) {
        libraryCache = await LibraryLoader.load();
    }
    return libraryCache;
}

async function showLibrary() {
    try {
        const tests = await getLibrary();
        $("app").innerHTML = renderLibraryPage(tests);
    } catch (error) {
        showError(error);
    }
}

function showPlaceholder(title, note) {
    $("app").innerHTML = renderPlaceholderPage(title, note);
}

let zitateThemesCache = null;
let zitateThemeDataCache = new Map();

async function getZitateThemes() {
    if (!zitateThemesCache) {
        zitateThemesCache = await ZitateLoader.loadIndex();
    }
    return zitateThemesCache;
}

async function showZitatePage() {
    try {
        const themes = await getZitateThemes();
        $("app").innerHTML = renderZitatePage(themes);
    } catch (error) {
        showError(error);
    }
}

async function showZitateViewer(slug, index) {
    try {
        const themes = await getZitateThemes();
        const themeEntry = themes.find((theme) => theme.slug === slug);

        if (!themeEntry) {
            throw new Error(`Zitat-Thema "${slug}" wurde nicht gefunden.`);
        }

        if (!zitateThemeDataCache.has(slug)) {
            zitateThemeDataCache.set(slug, await ZitateLoader.loadTheme(themeEntry.path));
        }

        const theme = { ...zitateThemeDataCache.get(slug), slug };
        const redemittel = await ZitateLoader.loadRedemittel();

        if (index < 0 || index >= theme.quotes.length) {
            navigate(`/zitate/${slug}/0`);
            return;
        }

        renderZitateViewer(theme, index, redemittel);
    } catch (error) {
        showError(error);
    }
}

async function showZitatLernkarte(slug, index) {
    try {
        const themes = await getZitateThemes();
        const themeEntry = themes.find((theme) => theme.slug === slug);

        if (!themeEntry) {
            throw new Error(`Zitat-Thema "${slug}" wurde nicht gefunden.`);
        }

        if (!zitateThemeDataCache.has(slug)) {
            zitateThemeDataCache.set(slug, await ZitateLoader.loadTheme(themeEntry.path));
        }

        const theme = { ...zitateThemeDataCache.get(slug), slug };
        renderZitatLernkarte(theme, index);
    } catch (error) {
        showError(error);
    }
}

async function showZitateExercise(params) {
    try {
        const path = `../data/zitate/exercises/${params.id}.json`;
        const test = await TestLoader.load(path);

        clearAnswers();
        setCurrentTest(test);
        renderTest(test);
        attachCheckAnswers(test);
    } catch (error) {
        showError(error);
    }
}

async function showTest(params) {
    try {
        const tests = await getLibrary();
        const entry = tests.find((test) => test.id === params.id);

        if (!entry) {
            throw new Error(`Test "${params.id}" wurde nicht in der Bibliothek gefunden.`);
        }

        const test = await TestLoader.load(entry.path);
        debug("Loaded", test.meta.id);

        // Fix: clear leftover answers from a previously opened test so that
        // matching question IDs don't show up as already checked.
        clearAnswers();

        setCurrentTest(test);
        renderTest(test);
        attachCheckAnswers(test);
    } catch (error) {
        showError(error);
    }
}

function attachCheckAnswers(test) {
    const button = $("checkAnswers");
    if (!button) {
        return;
    }

    button.addEventListener("click", async () => {
        const answers = collectAnswers();
        const score = calculateScore(test, answers);
        const html = await buildResult(test, answers, score);
        renderResult(html);

        document.querySelectorAll(".learnMore").forEach((learnMoreButton) => {
            learnMoreButton.addEventListener("click", async () => {
                await openKnowledge(learnMoreButton.dataset.grammar);
            });
        });
    });
}

function showError(error) {
    console.error(error);
    $("app").innerHTML = `
        <section class="card">
            <h2>Fehler</h2>
            <p>${error.message}</p>
        </section>
    `;
}
