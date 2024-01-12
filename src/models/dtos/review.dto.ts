export type ReviewDTO = {
    id?: number;

    comment?: string;
    rating: number;
    created?: Date;

    content: any;
    info: any;

    user_id: number;
    reviewable_id: number;
};
