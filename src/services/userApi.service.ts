import { User } from "@/models/user.model";
import { get as localGet } from "./restapi.service";
import {
    get as serverGet,
    post as serverPost,
    put as serverPut,
} from "./serverRestApi.service";

// TODO why have local vs server. Ugh.
export const getLocalUser = (username?: string) => {
    const urlString = username ? `/user?username=${username}` : "/user";
    ``;

    return localGet(urlString).then(async (data: Response) => {
        return data.json();
    });
};

// this should include a function that returns a user dto
export const getServerUser = (username?: string) => {
    if (username) {
        return serverGet(`/user?username=${username}`);
    }

    return serverGet("/user");
};

export const createServerUser = (user: User) => {
    return serverPost("/user", user);
};

export const updateServerUser = (user: User) => {
    return serverPut("/user", user);
};
