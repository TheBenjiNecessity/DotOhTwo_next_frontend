import React from "react";
import Stack from "../Stack/Stack";
import { Avatar } from "../Avatar/Avatar";
import { Typography } from "../Typography/Typography";
import { Rating } from "../Rating/Rating";
import { DateLabel } from "../DateLabel/DateLabel";
import Grid from "../Grid/Grid";

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
    <Grid spacing={1}>
        <Grid.Item xs={8}>
            <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                    <Avatar imageUrl={user.avatarUrl} size="large" />
                    <Stack>
                        <Typography variant="subtitle1">{user.name}</Typography>
                        <Typography variant="subtitle2">
                            {user.username}
                        </Typography>
                    </Stack>
                </Stack>
                <Rating score={rating} />
                <DateLabel date={date} />
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body1">{description}</Typography>
            </Stack>
        </Grid.Item>
        <Grid.Item xs={4}>
            <Stack direction="row" spacing={2}>
                <Avatar imageUrl={reviewable.avatarUrl} size="large" />
                <Stack>
                    <Typography variant="h5">{reviewable.name}</Typography>
                </Stack>
            </Stack>
        </Grid.Item>
    </Grid>
);
