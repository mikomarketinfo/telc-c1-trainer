/**
 * ==========================================================
 * Title Component
 * ==========================================================
 */

import { create } from "../utils/helpers.js";

export function createTitle(text) {

    const title = create("h1");

    title.textContent = text;

    return title;

}