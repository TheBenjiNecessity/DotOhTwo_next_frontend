import { ReviewableDTO } from "@/models/dtos/reviewable.dto";
import { get, post, put } from "@/services/apis/server/restApi.service";
import { AxiosResponse } from "axios";

// this should include a function that returns a reviewable dto
export const getReviewable = (
    id: number
): Promise<AxiosResponse<ReviewableDTO, any>> => {
    return get<ReviewableDTO>(`/reviewable/${id}`);
};

export const searchReviewables = (
    text: string
): Promise<AxiosResponse<Array<ReviewableDTO>, any>> => {
    return get<Array<ReviewableDTO>>(`/reviewable/search`, {
        text,
        locale: "en", // TODO get from browser? localization?
        limit: 10,
        offset: 0,
    });
};

export const createReviewable = (
    reviewable: ReviewableDTO
): Promise<AxiosResponse<ReviewableDTO, any>> => {
    return post<ReviewableDTO>("/reviewable", reviewable);
};

export const updateReviewable = (
    id: number,
    reviewable: ReviewableDTO
): Promise<AxiosResponse<ReviewableDTO, any>> => {
    return put<ReviewableDTO>(`/reviewable/${id}`, reviewable);
};
