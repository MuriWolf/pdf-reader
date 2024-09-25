import { VITE_API_URL } from "$env/static/private";
import type { UserUpdateType } from "$lib/types/UserUpdateType";

export const updateUser = async (user: UserUpdateType, currentUserAccessToken: string | undefined) => {
    const userID = Number(user.id);
    const userData = {
        nome_user: user.nome_user,
        username: user.username,
        email: user.email,
        role: user.role,
        ...(user.senha && { senha: user.senha }),
        ...(user.foto && { foto: user.foto })
    };


    if (!currentUserAccessToken || currentUserAccessToken === "") {
        return null;
    }
    
    const raw = JSON.stringify(userData);

    const requestOptions: RequestInit = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${currentUserAccessToken}`
        },
        body: raw,
        redirect: "follow",
    };

    console.log(raw);
    

    try {
        const response = await fetch(`${VITE_API_URL}/users/${userID}`, requestOptions);
        const data = await response.json();
        
        return data;
    } catch (error) {
        return error;        
    }
}