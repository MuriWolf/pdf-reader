import { fail } from '@sveltejs/kit';
import { VITE_API_URL } from '$env/static/private';

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