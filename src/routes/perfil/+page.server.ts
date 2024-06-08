import { VITE_API_URL } from '$env/static/private';

export async function load({ fetch }) {
    const userID = 1;
    
    const responseUserData = await fetch(`${VITE_API_URL}/users/${userID}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    });
    const userData = await responseUserData.json();

    const responseUserPosts = await fetch(`${VITE_API_URL}/fines?user_id=${userID}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    });
    const userPosts = await responseUserPosts.json();

    return {
        userData, userPosts
    };
}