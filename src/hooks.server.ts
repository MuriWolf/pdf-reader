import { authenticateUser } from "$lib/server/auth";
import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.user = await authenticateUser(event);

    if (!(event.locals.user)) {
        if (!(event.url.pathname.startsWith("/login"))) {
            throw redirect(303, "/login");
        } 
    } else {
        if ((event.url.pathname.startsWith("/login"))) {
            throw redirect(303, "/");
        } 
    }

    if (event.url.pathname.startsWith("/signup")) {
        if (event.locals.user.role != "admin") {
            throw redirect(303, "/");
        }
    }

    const response = await resolve(event);

    return response;
}