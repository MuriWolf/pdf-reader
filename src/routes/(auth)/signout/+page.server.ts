import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, cookies }) => {
    cookies.delete("access_token", {
        path: "/"
    });
    cookies.delete("refresh_token", {
        path: "/"
    });
    cookies.delete("token_type", {
        path: "/"
    });

    redirect(303, "/");
}
