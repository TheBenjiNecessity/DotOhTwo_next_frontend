import { User } from "@/models/user.model";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { ListItem } from "../ListItem/ListItem";

interface UserListItemProps {
    user: User;
}

/**
 * A small
 * @param param0
 * @returns
 */
export const UserListItem = ({
    user,
    onClick,
}: UserListItemProps &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return <ListItem onClick={onClick}>{user.username}</ListItem>;
};
