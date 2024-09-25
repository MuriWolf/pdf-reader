import { fail, redirect } from '@sveltejs/kit';
import { VITE_API_URL } from '$env/static/private';
import type { PageServerLoad } from './$types.js';


export async function load({ fetch, params, locals }) {

    if (locals?.user) {
        return locals?.user;
    }
}


export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
        const posts = formData.get("pdf-values")
        
        const res = await fetch(`${VITE_API_URL}/fines`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: posts
        });
        console.log(res);
        const data = await res.json();

        if (!(data.code == 200)) {
            return fail(401, { error: "error" })
        }

        return {
            success: true,
            data,
            posts
        }
	}
};