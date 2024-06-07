import { fail } from '@sveltejs/kit';

const apiUrl = "http://127.0.0.1:8000";

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
        const posts = formData.get("pdf-values")

        const res = await fetch(`${apiUrl}/fines`, {
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