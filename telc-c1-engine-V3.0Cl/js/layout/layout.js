/**
 * ==========================================================
 * Main Layout
 * ==========================================================
 */
import { getSidebar } from "./sidebar.js";
export function renderLayout(content) {
    return `
        <div class="layout">
            ${getSidebar()}
            <main class="content">
                ${content}
            </main>
        </div>
    `;
}
