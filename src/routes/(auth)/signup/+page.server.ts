import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { loginUser, signupUser } from "$lib/server/auth";
import { UserSignupSchema } from "$lib/ZodSchemas";
import { ZodError } from "zod";


export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const data = Object.fromEntries(await request.formData());
        let apiErrors = undefined;

        try {
            const result = UserSignupSchema.parse(data);
            let response = await signupUser(result);
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