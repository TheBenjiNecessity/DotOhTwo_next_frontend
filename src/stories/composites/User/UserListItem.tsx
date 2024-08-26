import React from "react";
import Stack from "../../components/Stack/Stack";
import { Avatar } from "../../components/Avatar/Avatar";
import { Typography } from "../../components/Typography/Typography";
import { Rating } from "../Rating/Rating";

interface UserListItemProps {
    name?: string;
    username?: string;
    avatarUrl?: string;
}

export const UserListItem = ({
    name,
    username,
    avatarUrl,
}: UserListItemProps) => (
    <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
            <Avatar imageUrl={avatarUrl} size="large" />
            <Stack>
                <Typography variant="subtitle1">{name}</Typography>
                <Typography variant="subtitle2">{username}</Typography>
            </Stack>
        </Stack>
    </Stack>
);
