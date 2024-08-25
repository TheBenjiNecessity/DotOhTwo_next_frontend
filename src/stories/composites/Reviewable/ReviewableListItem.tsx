import React from "react";
import Stack from "../../components/Stack/Stack";
import { Avatar } from "../../components/Avatar/Avatar";
import { Typography } from "../../components/Typography/Typography";
import { Rating } from "../Rating/Rating";

interface ReviewableListItemProps {
    name?: string;
    description?: string;
    rating: number;
    avatarUrl?: string;
}

export const ReviewableListItem = ({
    name,
    description,
    rating,
    avatarUrl,
}: ReviewableListItemProps) => (
    <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
            <Avatar imageUrl={avatarUrl} size="large" />
            <Stack>
                <Typography variant="subtitle1">{name}</Typography>
            </Stack>
        </Stack>
        <Rating score={rating} />
        <Typography variant="body1">{description}</Typography>
    </Stack>
);
