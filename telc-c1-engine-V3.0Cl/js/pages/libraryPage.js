/**
 * ==========================================================
 * Library Page
 * Shows all available tests, grouped by exam module.
 * ==========================================================
 */
import { MODULE_ORDER, moduleLabel } from "../utils/moduleLabels.js";

/**
 * Group a flat list of tests by their module.
 *
 * @param {Array<Object>} tests
 * @returns {Map<string, Array<Object>>}
 */
function groupByModule(tests) {
    const groups = new Map();
    for (const test of tests) {
        if (!groups.has(test.module)) {
            groups.set(test.module, []);
        }
        groups.get(test.module).push(test);
    }
    return groups;
}

function renderTestCard(test) {
    return `
        <a href="#/test/${test.id}" class="library-item">
            <div class="library-item-info">
                <h3>${test.title}</h3>
                <p>${test.topic}</p>
            </div>
            <span class="primary-button">Öffnen</span>
        </a>
    `;
}

/**
 * Render the library of available tests, grouped by module.
 *
 * @param {Array<Object>} tests - entries from data/index.json
 * @returns {string}
 */
export function renderLibraryPage(tests) {
    const groups = groupByModule(tests);

    const orderedModules = [
        ...MODULE_ORDER.filter((module) => groups.has(module)),
        ...[...groups.keys()].filter((module) => !MODULE_ORDER.includes(module))
    ];

    const sections = orderedModules
        .map((module) => {
            const items = groups.get(module).map(renderTestCard).join("");
            return `
                <section class="card">
                    <h2>${moduleLabel(module)}</h2>
                    <div class="library-list">
                        ${items}
                    </div>
                </section>
            `;
        })
        .join("");

    return `
        <section class="card">
            <h1>Testbibliothek</h1>
            <p>Wählen Sie einen Test aus.</p>
        </section>
        ${sections}
    `;
}
