import { ReviewDTO } from "@/models/dtos/review.dto";
import { get, post, put } from "@/services/apis/server/restApi.service";
import { AxiosResponse } from "axios";

export enum LIST_BY {
    USER = "user",
    REVIEWABLE = "reviewable",
    TRENDING = "trending",
}

// this should include a function that returns a review dto
export const getReview = (
    id: number
): Promise<AxiosResponse<ReviewDTO, any>> => {
    return get<ReviewDTO>(`/review/${id}`);
};

export const createReview = (
    review: ReviewDTO
): Promise<AxiosResponse<ReviewDTO, any>> => {
    return post<ReviewDTO>("/review", review);
};

export const updateReview = (
    id: number,
    review: ReviewDTO
): Promise<AxiosResponse<ReviewDTO, any>> => {
    return put<ReviewDTO>(`/review/${id}`, review);
};
