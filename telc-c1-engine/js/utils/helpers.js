/**
 * ==========================================================
 * Helper Functions
 * ==========================================================
 */

/**
 * Returns DOM element by id.
 * @param {string} id
 * @returns {HTMLElement|null}
 */
export function $(id){

    return document.getElementById(id);

}

/**
 * Creates HTML element.
 * @param {string} tag
 * @returns {HTMLElement}
 */
export function create(tag){

    return document.createElement(tag);

}

/**
 * Clears element.
 * @param {HTMLElement} element
 */
export function clear(element){

    element.innerHTML="";

}

/**
 * Prints debug information.
 * @param {...any} args
 */
export function debug(...args){

    console.log("[TELC]",...args);

}

/**
 * Returns current date.
 * @returns {string}
 */
export function today(){

    return new Date().toISOString();

}