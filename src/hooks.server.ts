import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    
    if (event.url.pathname.startsWith("/login")) {
        event.locals.user = null;
    } else {
        event.locals.user = "murillo";
    }

    const response = await resolve(event);

    return response;
}