import { get } from "./restapi.service";

export const getUser = (username: string) => {
    const urlString = username ? `/user?username=${username}` : "/user";

    return get(urlString).then((data: any) => {
        return data.json();
    });
};
