export async function load({ fetch }) {
    const apiUrl = "http://127.0.0.1:8000";
    const userID = 1;
    
    const responseUserData = await fetch(`${apiUrl}/users/${userID}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    });
    const userData = await responseUserData.json();

    const responseUserPosts = await fetch(`${apiUrl}/fines?user_id=${userID}`, {
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