import _ from "lodash";
import { Reviewable } from "../reviewable.model";

export type ReviewableDTO = {
    id?: number;
    type: string;
    title: string;
    description: string;
    content?: any;
    info?: any;
    statistics?: any;
};

export const createDTOFromReviewable = (
    reviewable: Reviewable
): ReviewableDTO => {
    const { type, title, description, content, info, statistics } = reviewable;
    const reviewableDTO: ReviewableDTO = {
        type,
        title,
        description,
        content,
        info,
        statistics,
    };

    if (_.isEmpty(reviewableDTO.id)) {
        delete reviewableDTO.id;
    }

    if (_.isEmpty(reviewableDTO.content)) {
        delete reviewableDTO.content;
    }

    if (_.isEmpty(reviewableDTO.info)) {
        delete reviewableDTO.info;
    }

    if (_.isEmpty(reviewableDTO.statistics)) {
        delete reviewableDTO.statistics;
    }

    return reviewableDTO;
};

export const createReviewableFromDTO = (
    reviewableDTO: ReviewableDTO
): Reviewable => {
    const { type, title, description, content, info, statistics } =
        reviewableDTO;
    const reviewable: Reviewable = {
        type,
        title,
        description,
        content,
        info,
        statistics,
    };

    return reviewable;
};
