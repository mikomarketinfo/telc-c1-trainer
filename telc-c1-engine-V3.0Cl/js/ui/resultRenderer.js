/**
 * ==========================================================
 * Result Renderer
 * ==========================================================
 */
export function renderResult(result) {
    let panel = document.getElementById("resultPanel");
    if (!panel) {
        panel = document.createElement("section");
        panel.id = "resultPanel";
        panel.className = "card";
        document.getElementById("app").appendChild(panel);
    }
    panel.innerHTML = result;
}
