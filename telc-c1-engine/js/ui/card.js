/**
 * ==========================================================
 * Card Component
 * ==========================================================
 */

import { create } from "../utils/helpers.js";

export function createCard() {

    const card = create("section");

    card.className = "card";

    return card;

}