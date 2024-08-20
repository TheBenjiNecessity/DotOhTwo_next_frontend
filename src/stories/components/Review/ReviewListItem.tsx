import React from "react";
import Stack from "../Stack/Stack";
import { Avatar } from "../Avatar/Avatar";
import { Typography } from "../Typography/Typography";
import { Rating } from "../Rating/Rating";

type ReviewContent = {
    avatarUrl?: string;
    reviewableAvatarUrl?: string;
};

type Review = {
    name: string;
    description: string;
    username: string;
    rating: number;
    date: Date;
    content: ReviewContent;
};

interface ReviewProps {
    review: Review;
}

/**
 * A small
 * @param param0
 * @returns
 */
export const Review = ({ review }: ReviewProps) => (
    <div className="p-4">
        <Stack direction="row" spacing={2}>
            <Stack.Expander>
                <Stack spacing={2}>
                    <Stack direction="row" spacing={2}>
                        <div>
                            <Avatar
                                imageUrl={review?.content?.avatarUrl}
                                size="large"
                            />
                        </div>
                        <Stack>
                            <Typography variant="h4">
                                {review?.username}
                            </Typography>
                            <Typography variant="h4">
                                {review?.username}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Rating score={review?.rating} />
                    <Typography variant="h4">{review?.name}</Typography>
                    <Typography variant="body1">
                        {review?.description}
                    </Typography>
                </Stack>
            </Stack.Expander>
            <div className="min-w-[200px]">
                <Avatar
                    imageUrl={review?.content?.reviewableAvatarUrl}
                    size="large"
                />
            </div>
        </Stack>
    </div>
);
