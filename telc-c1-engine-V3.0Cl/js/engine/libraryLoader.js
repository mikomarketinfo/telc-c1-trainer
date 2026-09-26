/**
 * ==========================================================
 * Library Loader
 * Loads the list of available tests from data/index.json
 * ==========================================================
 */
export class LibraryLoader {
    static async load() {
        const response = await fetch("../data/index.json");
        if (!response.ok) {
            throw new Error("Cannot load test library.");
        }
        const library = await response.json();
        return library.tests;
    }
}
