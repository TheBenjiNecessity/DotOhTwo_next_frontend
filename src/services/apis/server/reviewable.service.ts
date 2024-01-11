import { ReviewableDTO } from "@/models/dtos/reviewable.dto";
import { get, post, put } from "@/services/apis/server/restApi.service";

// this should include a function that returns a reviewable dto
export const getReviewable = (id: number) => {
    return get(`/reviewable/${id}`);
};

export const createReviewable = (reviewable: ReviewableDTO) => {
    return post("/reviewable", reviewable);
};

export const updateReviewable = (reviewable: ReviewableDTO) => {
    return put("/reviewable", reviewable);
};
