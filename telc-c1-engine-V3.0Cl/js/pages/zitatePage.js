/**
 * ==========================================================
 * Zitate Page — list of quote themes
 * ==========================================================
 */
export function renderZitatePage(themes) {
    const items = themes
        .map(
            (theme) => `
        <a href="#/zitate/${theme.slug}" class="library-item">
            <div class="library-item-info">
                <h3>${theme.title}</h3>
                <p>${theme.count} Zitate</p>
            </div>
            <span class="primary-button">Öffnen</span>
        </a>
    `
        )
        .join("");

    return `
        <section class="card">
            <h1>💬 Zitate</h1>
            <p>Üben Sie Argumentation für die mündliche und schriftliche Prüfung anhand von Zitaten.</p>
        </section>
        <section class="card">
            <h2>Themen</h2>
            <div class="library-list">
                ${items}
            </div>
        </section>
    `;
}
