/**
 * ==========================================================
 * Test Header
 * Shown at the top of every test view so the learner always
 * knows which exam part they are currently in.
 * ==========================================================
 */
import { moduleLabel } from "../utils/moduleLabels.js";

export function renderTestHeader(test) {
    return `
        <div class="test-header">
            <span class="test-header-module">${moduleLabel(test.meta.module)}</span>
            <h1>${test.meta.title}</h1>
            <p class="test-header-topic"><strong>Thema:</strong> ${test.meta.topic}</p>
        </div>
    `;
}
