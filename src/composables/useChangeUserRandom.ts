import { $, useStore } from "@builder.io/qwik";
import type { UserRandomI } from "./interfaces/UserRandomI";


export const useChangeUserRandom = () => {
    const user: { data: UserRandomI | undefined } = useStore({ data: undefined });
    const changeUserRandom = $(async () => {
        try {
            const response = await fetch("https://randomuser.me/api/");
            const data: UserRandomI = await response.json();
            user.data = data;
        } catch (error) {
            console.error(error);
        }
    });

    return { user, changeUserRandom };
};