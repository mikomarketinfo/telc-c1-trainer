/**
 * ==========================================================
 * Button Component
 * ==========================================================
 */

import { create } from "../utils/helpers.js";

export function createButton({

    id = "",

    text = "",

    type = "primary",

    icon = "",

    className = ""

}) {

    const button = create("button");

    button.id = id;

    button.className =

        `${type}-button ${className}`.trim();

    button.innerHTML =

        icon

            ? `${icon} ${text}`

            : text;

    return button;

}