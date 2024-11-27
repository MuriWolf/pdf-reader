import { VITE_API_URL } from "$env/static/private";
import type { AllChartsType } from "$lib/types/charts/AllChartsType";

export async function getGraphs(): Promise<AllChartsType | null> {
    try {
        const response = await fetch(`${VITE_API_URL}/graph`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });   
        return await response.json() as AllChartsType;
    } catch (error) {
       console.error(error);
       return null;
    }
}