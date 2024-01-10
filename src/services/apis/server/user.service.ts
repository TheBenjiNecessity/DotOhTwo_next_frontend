import { User } from "@/models/user.model";
import { get, post, put } from "@/services/apis/server/restApi.service";

// this should include a function that returns a user dto
export const getUser = (username?: string) => {
    if (username) {
        return get(`/user?username=${username}`);
    }

    return get("/user");
};

export const createUser = (user: User) => {
    return post("/user", user);
};

export const updateUser = (user: User) => {
    return put("/user", user);
};
