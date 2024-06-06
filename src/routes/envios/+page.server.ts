export async function load({fetch}) {
    const apiUrl = "http://127.0.0.1:8000";

    const responsePosts = await fetch(`${apiUrl}/fines`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    });
    const posts = await responsePosts.json();

    return { posts: posts };
}