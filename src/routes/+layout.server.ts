import type { PageServerLoad } from "./$types";

export const ssr = false;

export const load: PageServerLoad = async ({ locals }) => {
    let isUserLogged: boolean;
    isUserLogged = !locals.user ? false : true;
    return {
        isUserLogged: isUserLogged
    }
}