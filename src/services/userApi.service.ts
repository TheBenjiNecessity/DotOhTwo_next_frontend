import { User } from "@/models/user.model";
import { get as localGet } from "./restapi.service";
import { get as serverGet, post as serverPost } from "./serverRestApi.service";

// TODO why have local vs server. Ugh.
export const getLocalUser = (username?: string) => {
    const urlString = username ? `/user?username=${username}` : "/user";
    ``;

    return localGet(urlString).then(async (data: Response) => {
        return data.json();
    });
};

export const getServerUser = (username?: string) => {
    if (username) {
        return serverGet(`/user?username=${username}`);
    }

    return serverGet("/user");
};

export const createServerUser = (user: User) => {
    return serverPost("/user", user);
};
