/**
 * ==========================================================
 * Layout
 * Mounts/refreshes the sidebar. The content area itself
 * (#app) is rendered independently by each page.
 * ==========================================================
 */
import { $ } from "../utils/helpers.js";
import { renderSidebar } from "./sidebar.js";

export function updateSidebar(currentPath) {
    $("sidebar").innerHTML = renderSidebar(currentPath);
}
