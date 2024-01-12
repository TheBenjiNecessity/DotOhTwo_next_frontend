import _ from "lodash";
import { ReviewDTO } from "./dtos/review.dto";

export type Review = {
    id?: number;

    comment?: string;
    rating: number;
    created?: Date;

    content: any;
    info: any;

    user_id: number;
    reviewable_id: number;
};

export const createDTOFromReview = (review: Review): ReviewDTO => {
    const {
        id,
        comment,
        rating,
        created,
        content,
        info,
        user_id,
        reviewable_id,
    } = review;
    const reviewDTO: ReviewDTO = {
        id,
        comment,
        rating,
        created,
        content,
        info,
        user_id,
        reviewable_id,
    };

    if (_.isEmpty(reviewDTO.id)) {
        delete reviewDTO.id;
    }

    if (_.isEmpty(reviewDTO.content)) {
        delete reviewDTO.content;
    }

    if (_.isEmpty(reviewDTO.info)) {
        delete reviewDTO.info;
    }

    return reviewDTO;
};

export const createReviewFromDTO = (reviewDTO: ReviewDTO): Review => {
    const {
        id,
        comment,
        rating,
        created,
        content,
        info,
        user_id,
        reviewable_id,
    } = reviewDTO;
    const reviewable: Review = {
        id,
        comment,
        rating,
        created,
        content,
        info,
        user_id,
        reviewable_id,
    };

    return reviewable;
};
