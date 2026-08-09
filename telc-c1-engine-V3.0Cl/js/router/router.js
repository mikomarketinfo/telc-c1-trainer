/**
 * ==========================================================
 * Router
 * Simple hash-based router (#/path/:param).
 * Uses the browser's native history via location.hash,
 * so the Back/Forward buttons work without extra code.
 * ==========================================================
 */
const routes = [];
let notFoundHandler = () => {};

/**
 * Register a route.
 *
 * @param {string} pattern - e.g. "/test/:id"
 * @param {(params: Object) => void} handler
 */
export function addRoute(pattern, handler) {
    routes.push({ pattern, handler });
}

/**
 * Register a fallback handler for unmatched routes.
 *
 * @param {() => void} handler
 */
export function setNotFoundHandler(handler) {
    notFoundHandler = handler;
}

/**
 * Navigate to a path. Triggers a hashchange event.
 *
 * @param {string} path - e.g. "/test/lv-t2-0001"
 */
export function navigate(path) {
    location.hash = path;
}

/**
 * Return the currently active path (without the leading #).
 *
 * @returns {string}
 */
export function getCurrentPath() {
    return location.hash.replace(/^#/, "") || "/library";
}

function matchRoute(path) {
    for (const route of routes) {
        const paramNames = [];
        const regexSource = route.pattern.replace(/:[^/]+/g, (token) => {
            paramNames.push(token.slice(1));
            return "([^/]+)";
        });
        const match = path.match(new RegExp(`^${regexSource}$`));

        if (match) {
            const params = {};
            paramNames.forEach((name, index) => {
                params[name] = decodeURIComponent(match[index + 1]);
            });
            return { handler: route.handler, params };
        }
    }
    return null;
}

function handleRouteChange() {
    const path = getCurrentPath();
    const matched = matchRoute(path);

    if (matched) {
        matched.handler(matched.params);
    } else {
        notFoundHandler(path);
    }
}

/**
 * Start listening for hash changes and render the initial route.
 */
export function startRouter() {
    window.addEventListener("hashchange", handleRouteChange);
    handleRouteChange();
}
