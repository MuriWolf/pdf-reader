import { VITE_API_URL } from "$env/static/private";
import type { UserLoginType } from "$lib/types/UserLoginType";
import type { UserSignupType } from "$lib/types/UserSignupType";
import type { RequestEvent } from "@sveltejs/kit";


export const authenticateUser = async (event: RequestEvent) => {
    const { cookies } = event;
    const userAccessToken = cookies.get("access_token");

    if (!userAccessToken || userAccessToken === "") {
        return null;
    }

    const requestOptions: RequestInit = {
        method: "GET",
        headers: {'Authorization': `Bearer ${userAccessToken}`},
        redirect: "follow"
    };
    
    try {
        const response = await fetch(`${VITE_API_URL}/users/me`, requestOptions);
        const data = await response.json();

        return data;
    } catch (error) {
        return null;        
    }
}

export const loginUser = async (user: UserLoginType) => {
    const raw = JSON.stringify({
        "email": user.email,
        "senha": user.senha 
    });
    const requestOptions: RequestInit = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: raw,
        redirect: "follow",
    };

    try {
        const response = await fetch(`${VITE_API_URL}/token`, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;        
    }
}

export const signupUser = async (user: UserSignupType) => {
    const raw = JSON.stringify({
        "nome_user": user.nome_user,
        "username": user.username,
        "email": user.email,
        "senha": user.senha,
        "role": user.role,
        "foto": user.foto
    });

    const requestOptions: RequestInit = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: raw,
        redirect: "follow",
    };

    try {
        const response = await fetch(`${VITE_API_URL}/users`, requestOptions);
        const data = await response.json();
        console.log(data);
        
        return data;
    } catch (error) {
        return error;        
    }
}