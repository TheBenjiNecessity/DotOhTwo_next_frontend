import React from "react";
import Stack from "../Stack/Stack";
import { Avatar } from "../Avatar/Avatar";
import { Typography } from "../Typography/Typography";
import { Rating } from "../Rating/Rating";

type User = {
    username: string;
    name: string;
    avatarUrl?: string;
};

type Reviewable = {
    name: string;
    avatarUrl?: string;
};

interface ReviewProps {
    name: string;
    description: string;
    rating: number;
    date: Date;
    user: User;
    reviewable: Reviewable;
}

export const Review = ({
    name,
    description,
    rating,
    date,
    user,
    reviewable,
}: ReviewProps) => (
    <div className="p-4">
        <Stack direction="row" spacing={2}>
            <Stack.Expander>
                <Stack spacing={2}>
                    <Stack direction="row" spacing={2}>
                        <Avatar imageUrl={user.avatarUrl} size="large" />
                        <Stack>
                            <Typography variant="h5">{user.name}</Typography>
                            <Typography variant="h6">
                                {user.username}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Rating score={rating} />
                    <Typography variant="h4">{name}</Typography>
                    <Typography variant="body1">{description}</Typography>
                </Stack>
            </Stack.Expander>
            <div className="min-w-[200px]">
                <Stack direction="row" spacing={2}>
                    <Avatar imageUrl={reviewable.avatarUrl} size="large" />
                    <Stack>
                        <Typography variant="h5">{reviewable.name}</Typography>
                    </Stack>
                </Stack>
            </div>
        </Stack>
    </div>
);
