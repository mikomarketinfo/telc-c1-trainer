/**
 * ==========================================================
 * Sidebar Component
 * ==========================================================
 */
export function getSidebar() {
    return `
        <aside class="sidebar">
            <h2>TELC C1</h2>
            <nav>
                <button data-page="home">
                    🏠 Home
                </button>
                <button data-page="sprachbausteine">
                    📘 Sprachbausteine
                </button>
                <button data-page="lesen">
                    📖 Leseverstehen
                </button>
                <button data-page="hoeren">
                    🎧 Hörverstehen
                </button>
                <button data-page="schreiben">
                    ✍ Schreiben
                </button>
                <button data-page="wissen">
                    🧠 Wissen
                </button>
                <button data-page="statistik">
                    📊 Statistik
                </button>
                <button data-page="settings">
                    ⚙ Einstellungen
                </button>
            </nav>
        </aside>
    `;
}
