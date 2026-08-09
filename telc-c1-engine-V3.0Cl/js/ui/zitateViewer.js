/**
 * ==========================================================
 * Zitate Viewer
 * Quote browser with navigation and the C1 phrase toolkit.
 * Deep-dive quotes (with modelAnswer) also link to a full
 * Lernkarte and a fill-in-the-blank practice exercise.
 * ==========================================================
 */
import { $ } from "../utils/helpers.js";
import { navigate } from "../router/router.js";

function renderPhraseChips(phrases) {
    return phrases.map((phrase) => `<span class="phrase-chip">${phrase}</span>`).join("");
}

function renderRedemittel(redemittel) {
    const categories = redemittel.categories
        .map(
            (category) => `
        <details class="redemittel-category">
            <summary>${category.title}</summary>
            <ul>
                ${category.phrases.map((phrase) => `<li>${phrase}</li>`).join("")}
            </ul>
        </details>
    `
        )
        .join("");

    const structure = redemittel.structure
        .map((step) => `<li><strong>${step.title}:</strong> ${step.hint}</li>`)
        .join("");

    return `
        <section class="card">
            <h2>🧰 Redemittel-Werkzeugkasten</h2>
            <p>Nützliche C1-Konstruktionen für Ihre Antwort:</p>
            ${categories}
        </section>
        <section class="card">
            <h2>Antwortstruktur (4-5 Minuten)</h2>
            <ol>${structure}</ol>
        </section>
    `;
}

/**
 * Render one quote with prev/next navigation.
 *
 * @param {Object} theme - the theme object with title + quotes[]
 * @param {number} index - current quote index within the theme
 * @param {Object} redemittel - the shared C1 phrase toolkit
 */
export function renderZitateViewer(theme, index, redemittel) {
    const quote = theme.quotes[index];
    const total = theme.quotes.length;
    const prevDisabled = index === 0 ? "disabled" : "";
    const nextDisabled = index === total - 1 ? "disabled" : "";
    const isEnriched = Boolean(quote.modelAnswer);

    const deepDiveButtons = isEnriched
        ? `
        <div class="quote-nav">
            <a href="#/zitate/${theme.slug}/${index}/lernkarte" class="secondary-button">📖 Lernkarte</a>
            <a href="#/zitate-exercise/${quote.exerciseId}" class="secondary-button">✍️ Musterantwort üben</a>
        </div>
    `
        : "";

    const app = $("app");
    app.innerHTML = `
        <section class="card">
            <a href="#/zitate" class="back-button">⬅ Zurück zu den Themen</a>
            <span class="test-header-module">💬 Zitate · ${theme.title}</span>
            <p>Zitat ${index + 1} von ${total}</p>

            <div class="flip-card">
                <p class="quote-text">„${quote.quote}"</p>
                ${quote.author ? `<p class="quote-author">— ${quote.author}</p>` : ""}
                <button id="toggleMeaning" class="secondary-button">🔎 Bedeutung &amp; Wortschatz anzeigen</button>
                <div id="flipCardBack" class="flip-card-back" hidden>
                    <p><strong>Bedeutung:</strong> ${quote.meaning}</p>
                    <p><strong>C1-Wortschatz:</strong></p>
                    <div class="phrase-list">${renderPhraseChips(quote.phrases)}</div>
                </div>
            </div>

            ${deepDiveButtons}

            <div class="quote-nav">
                <button id="prevQuote" class="secondary-button" ${prevDisabled}>⬅ Vorheriges</button>
                <button id="nextQuote" class="secondary-button" ${nextDisabled}>Nächstes ➡</button>
            </div>
        </section>

        ${renderRedemittel(redemittel)}
    `;

    $("toggleMeaning").addEventListener("click", (event) => {
        const back = $("flipCardBack");
        back.hidden = !back.hidden;
        event.target.textContent = back.hidden
            ? "🔎 Bedeutung & Wortschatz anzeigen"
            : "🙈 Bedeutung & Wortschatz verbergen";
    });

    if (!prevDisabled) {
        $("prevQuote").addEventListener("click", () => {
            navigate(`/zitate/${theme.slug}/${index - 1}`);
        });
    }

    if (!nextDisabled) {
        $("nextQuote").addEventListener("click", () => {
            navigate(`/zitate/${theme.slug}/${index + 1}`);
        });
    }
}
