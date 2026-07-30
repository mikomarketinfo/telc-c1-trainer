/**
 * ==========================================================
 * TELC C1 Engine
 * Utility Helpers
 * ==========================================================
 */
/**
 * Returns element by id.
 *
 * @param {string} id
 * @returns {HTMLElement|null}
 */
export function $(id) {
    return document.getElementById(id);
}
/**
 * Creates HTML element.
 *
 * @param {string} tag
 * @returns {HTMLElement}
 */
export function create(tag) {
    return document.createElement(tag);
}
/**
 * Clears HTML element.
 *
 * @param {HTMLElement} element
 */
export function clear(element) {
    element.innerHTML = "";
}
/**
 * Safe console output.
 *
 * @param {...any} args
 */
export function debug(...args) {
    console.log("[TELC]", ...args);
}
/**
 * Returns current ISO date.
 *
 * @returns {string}
 */
export function today() {
    return new Date().toISOString();
}
/**
 * Creates horizontal line.
 *
 * @returns {HTMLHRElement}
 */
export function hr() {
    return document.createElement("hr");
}
