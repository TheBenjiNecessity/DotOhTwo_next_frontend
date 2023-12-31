import { get as localGet } from "./restapi.service";
import { get as serverGet } from "./serverRestApi.service";

export const getLocalUser = (username?: string) => {
    const urlString = username ? `/user?username=${username}` : "/user";
    ``;

    return localGet(urlString).then(async (data: Response) => {
        return data.json();
    });
};

// TODO add "user" type
export const getServerUser = (username?: string) => {
    const urlString = username ? `/user?username=${username}` : "/user";
    ``;

    return serverGet(urlString).then(async (data: Response) => {
        return data.json();
    });
};
