import { VITE_API_URL } from '$env/static/private';

export async function load({ fetch, params, locals }) {
    const username = params.username; 

    let currentUser = false;

    if (locals?.user?.username === params.username) {
        currentUser = true;
    }
    
    const responseUserData = await fetch(`${VITE_API_URL}/users?username=${username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    });
    const userData = await responseUserData.json();

    const responseUserPosts = await fetch(`${VITE_API_URL}/fines?username=${username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    });
    const userPosts = await responseUserPosts.json();

    return {
        userData, userPosts, currentUser
    };
}