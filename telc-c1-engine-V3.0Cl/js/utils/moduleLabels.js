/**
 * ==========================================================
 * Module Labels
 * Single source of truth for how exam modules are displayed.
 * ==========================================================
 */
export const MODULE_LABELS = {
    sprachbausteine: "📘 Sprachbausteine",
    "leseverstehen-teil1": "📖 Leseverstehen — Teil 1 (Textrekonstruktion)",
    "leseverstehen-teil2": "📖 Leseverstehen — Teil 2 (Selektives Verstehen)",
    "leseverstehen-teil3": "📖 Leseverstehen — Teil 3 (Globalverstehen)",
    hoerverstehen: "🎧 Hörverstehen"
};

export const MODULE_ORDER = [
    "sprachbausteine",
    "leseverstehen-teil1",
    "leseverstehen-teil2",
    "leseverstehen-teil3",
    "hoerverstehen"
];

export function moduleLabel(module) {
    return MODULE_LABELS[module] || module;
}
