/**
 * ==========================================================
 * Sidebar
 * Real anchor links (#/path) so the browser handles focus,
 * middle-click-to-open-in-new-tab, etc. "out of the box".
 * ==========================================================
 */
const NAV_ITEMS = [
    { path: "/library", icon: "📚", label: "Bibliothek" },
    { path: "/zitate", icon: "💬", label: "Zitate" },
    { path: "/exercises", icon: "🧩", label: "Übungen" },
    { path: "/knowledge", icon: "🧠", label: "Wissen" },
    { path: "/exam", icon: "🏆", label: "Volle Prüfung" },
    { path: "/profile", icon: "👤", label: "Profil" }
];

/**
 * Render the sidebar markup.
 *
 * @param {string} currentPath - the router's current path, used
 *                                to highlight the active section
 * @returns {string}
 */
export function renderSidebar(currentPath) {
    const links = NAV_ITEMS.map((item) => {
        const isActive = currentPath.startsWith(item.path);
        const activeClass = isActive ? "active" : "";
        return `<a href="#${item.path}" class="sidebar-link ${activeClass}">${item.icon} ${item.label}</a>`;
    }).join("");

    return `
        <aside class="sidebar">
            <h2>TELC C1</h2>
            <nav>${links}</nav>
        </aside>
    `;
}
