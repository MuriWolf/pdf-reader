import { VITE_API_URL } from "$env/static/private";

export const getUsers = async () => {
    const requestOptions: RequestInit = {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        redirect: "follow",
    };

    try {
        const response = await fetch(`${VITE_API_URL}/users`, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }

}