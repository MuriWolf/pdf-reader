import type { PageServerLoad } from "../$types";
import type { UserType } from "$lib/types/UserType";

export const load: PageServerLoad = () => {

    let userData: UserType = {
        id_user: 1,
        nome_user: "",
        email: "",
        role: "user",
        username: "",
    };

    return userData;
}