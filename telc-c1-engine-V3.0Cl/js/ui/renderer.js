/**
 * ==========================================================
 * TELC C1 Engine
 * Universal Renderer
 * ==========================================================
 */
import { renderSprachbausteine } from "./sprachbausteineRenderer.js";
/**
 * Render test according to module type.
 *
 * @param {Object} test
 */
export function renderTest(test) {
    switch (test.meta.module) {
        case "sprachbausteine":
            renderSprachbausteine(test);
            break;
        default:
            throw new Error(`Unsupported module: ${test.meta.module}`);
    }
}
