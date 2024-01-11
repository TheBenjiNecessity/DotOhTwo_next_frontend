import { UserDTO } from "@/models/dtos/user.dto"; // TODO: UserDAO
import { User } from "@/models/user.model";
import { get, post, put } from "@/services/apis/server/restApi.service";

// this should include a function that returns a user dto
export const getUser = (username?: string): Promise<UserDTO> => {
    const url = username ? `/user?username=${username}` : "/user";

    return get(url).then((response) => response.data);
};

export const createUser = (user: User): Promise<UserDTO> => {
    return post("/user", user).then((response) => response.data);
};

export const updateUser = (user: User): Promise<UserDTO> => {
    return put("/user", user).then((response) => response.data);
};
