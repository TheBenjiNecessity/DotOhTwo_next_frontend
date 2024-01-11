import { ReviewDTO } from "@/models/dtos/review.dto";
import { get, post, put } from "@/services/apis/server/restApi.service";

// this should include a function that returns a review dto
export const getReview = (id: number) => {
    return get(`/review/${id}`);
};

export const createReview = (review: ReviewDTO) => {
    return post("/review", review);
};

export const updateReview = (review: ReviewDTO) => {
    return put("/review", review);
};
