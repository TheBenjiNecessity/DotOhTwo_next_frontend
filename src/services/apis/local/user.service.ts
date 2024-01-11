import { User } from "@/models/user.model";
import { get } from "@/services/apis/local/restapi.service";

export const getUser = (username?: string) => {
    const urlString = username ? `/user?username=${username}` : "/user";
    ``;

    return get(urlString);
};
