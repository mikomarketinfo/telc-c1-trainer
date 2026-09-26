/**
 * ==========================================================
 * Zitate Loader
 * ==========================================================
 */
export class ZitateLoader {
    static async loadIndex() {
        const response = await fetch("../data/zitate/index.json");
        if (!response.ok) {
            throw new Error("Zitate-Themen konnten nicht geladen werden.");
        }
        const index = await response.json();
        return index.themes;
    }

    static async loadTheme(path) {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Zitat-Thema unter "${path}" konnte nicht geladen werden.`);
        }
        return response.json();
    }

    static async loadRedemittel() {
        const response = await fetch("../data/zitate/redemittel.json");
        if (!response.ok) {
            throw new Error("Redemittel konnten nicht geladen werden.");
        }
        return response.json();
    }
}
