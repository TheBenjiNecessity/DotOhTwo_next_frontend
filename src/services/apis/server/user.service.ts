import { UserDTO } from "@/models/dtos/user.dto"; // TODO: UserDAO
import { User } from "@/models/user.model";
import { get, post, put } from "@/services/apis/server/restApi.service";

// this should include a function that returns a user dto
export const getUser = (username?: string): Promise<UserDTO> => {
    const url = username ? `/user?username=${username}` : "/user";

    return get(url).then((response) => {
        return response.data;
    });
};

export const getLoggedInUser = (): Promise<UserDTO> => {
    return getUser();
};

export const searchUsers = (text: string): Promise<Array<UserDTO>> => {
    return get(`/user/search`, {
        text,
        limit: 10, // TODO paging
        offset: 0,
    }).then((response) => response.data);
};

export const createUser = (user: User): Promise<UserDTO> => {
    return post("/user", user).then((response) => response.data);
};

export const updateUser = (user: User): Promise<UserDTO> => {
    return put("/user", user).then((response) => response.data);
};
