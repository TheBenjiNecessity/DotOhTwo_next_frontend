import { ReviewableDTO } from "@/models/dtos/reviewable.dto";
import { get, post, put } from "@/services/apis/server/restApi.service";

// this should include a function that returns a reviewable dto
export const getReviewable = (id: number): Promise<ReviewableDTO> => {
    return get(`/reviewable/${id}`).then((response) => response.data); // TODO: Need to deal with these responses
};

export const searchReviewables = (
    text: string
): Promise<Array<ReviewableDTO>> => {
    console.log("searchReviewables", text);
    return get(`/reviewable/search`, {
        text,
        locale: "en", // TODO get from browser? localization?
        limit: 10,
        offset: 0,
    }).then((response) => response.data);
};

export const createReviewable = (
    reviewable: ReviewableDTO
): Promise<ReviewableDTO> => {
    return post("/reviewable", reviewable).then((response) => {
        return response.data;
    });
};

export const updateReviewable = (
    id: number,
    reviewable: ReviewableDTO
): Promise<ReviewableDTO> => {
    return put(`/reviewable/${id}`, reviewable).then(
        (response) => response.data
    );
};
