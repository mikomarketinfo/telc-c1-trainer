/**
 * ==========================================================
 * Zitat Lernkarte
 * Full reference view for an "enriched" quote: translations,
 * arguments, examples, model answer, speech analysis.
 * Falls back gracefully if a quote has no enriched fields.
 * ==========================================================
 */
import { $ } from "../utils/helpers.js";

function renderStars(relevance) {
    return "★".repeat(relevance) + "☆".repeat(5 - relevance);
}

function renderKeywords(keywords) {
    return keywords
        .map((k) => `<li><strong>${k.de}</strong> — ${k.ru}</li>`)
        .join("");
}

function renderArguments(items) {
    return items
        .map(
            (item) => `
        <li>
            <p>${item.ru}</p>
            <p class="de-example">${item.de}</p>
        </li>
    `
        )
        .join("");
}

function renderExamples(examples) {
    return examples
        .map(
            (example) => `
        <li>
            <p>${example.ru}</p>
            <p class="de-example">${example.de}</p>
        </li>
    `
        )
        .join("");
}

function renderTopics(topics) {
    return topics
        .map((topic) => `<li>${topic.name} ${renderStars(topic.relevance)}</li>`)
        .join("");
}

function renderSpeechAnalysis(rows) {
    return rows
        .map((row) => `<tr><td>${row.function}</td><td>${row.phrase}</td></tr>`)
        .join("");
}

function renderVocabularyTable(rows) {
    return rows
        .map((row) => `<tr><td>${row.de}</td><td>${row.ru}</td></tr>`)
        .join("");
}

/**
 * Render the full Lernkarte for one quote, or a short notice
 * if this quote has not been enriched yet.
 *
 * @param {Object} theme
 * @param {number} index
 */
export function renderZitatLernkarte(theme, index) {
    const quote = theme.quotes[index];
    const app = $("app");

    if (!quote.modelAnswer) {
        app.innerHTML = `
            <section class="card">
                <a href="#/zitate/${theme.slug}/${index}" class="back-button">⬅ Zurück zum Zitat</a>
                <h1>📖 Lernkarte</h1>
                <p>Für dieses Zitat gibt es noch keine vertiefte Lernkarte. Sie kommt in einer der nächsten Iterationen.</p>
            </section>
        `;
        return;
    }

    app.innerHTML = `
        <section class="card">
            <a href="#/zitate/${theme.slug}/${index}" class="back-button">⬅ Zurück zum Zitat</a>
            <span class="test-header-module">📖 Lernkarte · ${theme.title}</span>
            <h1>„${quote.quote}"</h1>
            ${quote.author ? `<p class="quote-author">— ${quote.author}</p>` : ""}
        </section>

        <section class="card">
            <h2>Übersetzung</h2>
            <p><strong>Wörtlich:</strong> ${quote.translationLiteral}</p>
            <p><strong>Sinngemäß:</strong> ${quote.translationNatural}</p>
        </section>

        <section class="card">
            <h2>Hauptgedanke</h2>
            <p>${quote.meaning}</p>
        </section>

        <section class="card">
            <h2>Schlüsselwörter</h2>
            <ul class="keyword-list">${renderKeywords(quote.keywords)}</ul>
        </section>

        <section class="card">
            <h2>Wann trifft das Zitat zu?</h2>
            <p>${quote.whenValid}</p>
            <h2>Wann kann man widersprechen?</h2>
            <p>${quote.whenToObject}</p>
        </section>

        <section class="card">
            <h2>Argumente dafür</h2>
            <ul class="argument-list">${renderArguments(quote.argumentsFor)}</ul>
            <h2>Argumente dagegen</h2>
            <ul class="argument-list">${renderArguments(quote.argumentsAgainst)}</ul>
        </section>

        <section class="card">
            <h2>Beispiele</h2>
            <ul class="argument-list">${renderExamples(quote.examples)}</ul>
        </section>

        <section class="card">
            <h2>C1-Wortschatz</h2>
            <div class="phrase-list">${quote.phrases.map((p) => `<span class="phrase-chip">${p}</span>`).join("")}</div>
        </section>

        <section class="card">
            <h2>Mögliche Prüferfragen</h2>
            <ul>${quote.examinerQuestions.map((q) => `<li>${q}</li>`).join("")}</ul>
        </section>

        <section class="card">
            <h2>Themen</h2>
            <ul class="topic-list">${renderTopics(quote.topics)}</ul>
            <h2>Ähnliche Zitate</h2>
            <ul>${quote.similarQuotes.map((q) => `<li>„${q}"</li>`).join("")}</ul>
        </section>

        <section class="card">
            <h2>Musterantwort (C1)</h2>
            <div class="reading-text">${quote.modelAnswer
                .split("\n\n")
                .map((p) => `<p>${p}</p>`)
                .join("")}</div>
            <a href="#/zitate-exercise/${quote.exerciseId || ""}" class="primary-button">
                ✍️ Musterantwort als Übung machen
            </a>
        </section>

        <section class="card">
            <h2>Redemittel-Analyse</h2>
            <table class="analysis-table">
                <thead><tr><th>Funktion</th><th>Konstruktion</th></tr></thead>
                <tbody>${renderSpeechAnalysis(quote.speechAnalysis)}</tbody>
            </table>
        </section>

        <section class="card">
            <h2>Wortschatz zum Merken</h2>
            <table class="analysis-table">
                <thead><tr><th>Deutsch</th><th>Русский</th></tr></thead>
                <tbody>${renderVocabularyTable(quote.vocabularyTable)}</tbody>
            </table>
        </section>
    `;
}
