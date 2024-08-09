import { ReviewDTO } from "@/models/dtos/review.dto";
import { UserDTO } from "@/models/dtos/user.dto"; // TODO: UserDAO
import { CompleteProfile, User } from "@/models/user.model";
import { get, post, put } from "@/services/apis/server/restApi.service";
import { AxiosResponse } from "axios";

// this should include a function that returns a user dto
export const getUser = (
    username?: string
): Promise<AxiosResponse<UserDTO, any>> => {
    const url = username ? `/user?username=${username}` : "/user";

    return get<UserDTO>(url);
};

export const getLoggedInUser = (): Promise<AxiosResponse<UserDTO, any>> => {
    return getUser();
};

export const searchUsers = (
    text: string
): Promise<AxiosResponse<Array<UserDTO>, any>> => {
    return get<Array<UserDTO>>(`/user/search`, {
        text,
        limit: 10, // TODO paging
        offset: 0,
    });
};

export const createUser = (
    user: User
): Promise<AxiosResponse<UserDTO, any>> => {
    return post<UserDTO>("/user", user);
};

export const updateUser = (
    user: User
): Promise<AxiosResponse<UserDTO, any>> => {
    return put<UserDTO>("/user", user);
};

export const completeProfile = (
    completeProfile: CompleteProfile
): Promise<AxiosResponse<UserDTO, any>> => {
    return put<UserDTO>("/user/complete-profile", completeProfile);
};

export const listReviewsByUser = (
    username: string
): Promise<AxiosResponse<Array<ReviewDTO>, any>> => {
    return get<Array<ReviewDTO>>(`/user/${username}/reviews`);
};
