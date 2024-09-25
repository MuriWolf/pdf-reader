import { getUsers } from "$lib/server/utils/getUsers.js";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";
import { deleteUser } from "$lib/server/utils/deleteUser.js";

export const load: PageServerLoad = async ({ locals }) => {
    let currentUser; 
    if (locals?.user) {
        currentUser = locals.user;
    } else {
        redirect(303, "/login");
    }
    let users = await getUsers(); 
    return {
        users: users,
        currentUser
    }
}

export const actions = {
	delete: async ({ request, cookies }) => {
		const data = Object.fromEntries(await request.formData());

        const userAccessToken = cookies.get("access_token")
        if (!userAccessToken || userAccessToken === "") {
            return null;
        }

        deleteUser(Number(data.idUserToDelete), userAccessToken);
	}
};