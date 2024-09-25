import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { loginUser } from "$lib/server/auth";
import { UserLoginSchema } from "$lib/ZodSchemas";
import { ZodError } from "zod";


export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const data = Object.fromEntries(await request.formData());
        let apiErrors = undefined;

        try {
            const result = UserLoginSchema.parse(data);
            let response = await loginUser(result);
            if (response.detail) {
                apiErrors = [response.detail];
                throw "api error";
            }
            
            if (response.access_token && response.refresh_token && response.token_type) {
                cookies.set("access_token", response.access_token, {
                    path: "/",
                    httpOnly: true,
                    sameSite: "strict",
                    // secure: process.env.NODE_ENV === "pr",
                    maxAge: 60 * 30
                })
                cookies.set("refresh_token", response.refresh_token, {
                    path: "/",
                    httpOnly: true,
                    sameSite: "strict",
                    // secure: process.env.NODE_ENV === "pr",
                    maxAge: 60 * 60 * 24
                })
                cookies.set("token_type", response.token_type, {
                    path: "/",
                    httpOnly: true,
                    sameSite: "strict",
                    // secure: process.env.NODE_ENV === "pr",
                    maxAge: 60 * 60 * 24
                })

                throw redirect(303, "/");
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