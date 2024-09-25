import type { Actions, PageServerLoad } from "../$types";
import { VITE_API_URL } from '$env/static/private';
import { UserUpdateSchema } from "$lib/ZodSchemas";
import { ZodError } from "zod";
import { updateUser } from "$lib/server/utils/updateUser";

export const load: PageServerLoad = async ({ locals, params }) => {
    const username = params.username; 
    const responseUserData = await fetch(`${VITE_API_URL}/users?username=${username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    });
    return await responseUserData.json();
}

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const data = Object.fromEntries(await request.formData());
        let apiErrors = undefined;

        try {
            const result = UserUpdateSchema.parse(data);
            const currentUserAccessToken = cookies.get("access_token");

            let response = await updateUser(result, currentUserAccessToken);
            if (response.detail) {
                apiErrors = [response.detail];
                throw "api error";
            }
        } catch(err: ZodError | any) {
            let formErrors = undefined;
            if (err instanceof ZodError) {
                const flattenedErrors = err.flatten();
                formErrors = flattenedErrors.fieldErrors;
            }
            const { senha, ...rest } = data;
            return {
                data: rest,
                errors: {
                    form: formErrors,
                    api: apiErrors
                }
            }
        }
    }
}