import { ReviewDTO } from "@/models/dtos/review.dto";
import { get, post, put } from "@/services/apis/server/restApi.service";

// this should include a function that returns a review dto
export const getReview = (id: number) => {
    return get(`/review/${id}`).then((response) => response.data);
};

export const createReview = (review: ReviewDTO) => {
    return post("/review", review).then((response) => response.data);
};

export const updateReview = (id: number, review: ReviewDTO) => {
    return put(`/review/${id}`, review).then((response) => response.data);
};
