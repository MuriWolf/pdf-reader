import type { PageServerLoad } from "./$types.js";

export const ssr = false;

export const load: PageServerLoad = async ({ locals }) => {
    return {
        user: locals.user
    }
}