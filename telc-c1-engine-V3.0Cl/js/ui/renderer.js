/**
 * ==========================================================
 * TELC C1 Engine
 * Universal Renderer
 * ==========================================================
 */
import { renderSprachbausteine } from "./sprachbausteineRenderer.js";
import { renderLeseTeil1 } from "./leseTeil1Renderer.js";
import { renderLeseTeil2 } from "./leseTeil2Renderer.js";
import { renderLeseTeil3 } from "./leseTeil3Renderer.js";

const RENDERERS = {
    sprachbausteine: renderSprachbausteine,
    "leseverstehen-teil1": renderLeseTeil1,
    "leseverstehen-teil2": renderLeseTeil2,
    "leseverstehen-teil3": renderLeseTeil3
};

/**
 * Render test according to module type.
 *
 * @param {Object} test
 */
export function renderTest(test) {
    const render = RENDERERS[test.meta.module];
    if (!render) {
        throw new Error(`Unsupported module: ${test.meta.module}`);
    }
    render(test);
}
