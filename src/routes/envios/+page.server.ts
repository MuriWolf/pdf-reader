import { VITE_API_URL } from '$env/static/private';

export async function load({ fetch }) {
    const responsePosts = await fetch(`${VITE_API_URL}/fines`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    });
    const posts = await responsePosts.json();

    const responseUsers = await fetch(`${VITE_API_URL}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    });
    const users = await responseUsers.json();

    return { posts: posts, users: users };
}