import { VITE_API_URL } from "$env/static/private";
import type { UserUpdateType } from "$lib/types/UserUpdateType";

export const deleteUser = async (userID: number, currentUserAccessToken: string | undefined) => {
    if (!currentUserAccessToken || currentUserAccessToken === "") {
        return null;
    }
    
    const requestOptions: RequestInit = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${currentUserAccessToken}`
        },
        redirect: "follow",
    };

    try {
        const response = await fetch(`${VITE_API_URL}/users/${userID}`, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;        
    }
}