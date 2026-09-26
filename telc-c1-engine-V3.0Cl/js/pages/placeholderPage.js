/**
 * ==========================================================
 * Placeholder Page
 * Used for sections planned for upcoming blocks, so the
 * sidebar links do not break before those blocks are built.
 * ==========================================================
 */
export function renderPlaceholderPage(title, blockNote) {
    return `
        <section class="card">
            <h1>${title}</h1>
            <p>Dieser Bereich wird in einem der nächsten Arbeitsblöcke gebaut.</p>
            <p><em>${blockNote}</em></p>
        </section>
    `;
}
