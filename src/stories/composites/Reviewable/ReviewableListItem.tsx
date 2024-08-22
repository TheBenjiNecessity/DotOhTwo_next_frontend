import { Reviewable } from "@/models/reviewable.model";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { ListItem } from "../../components/ListItem/ListItem";

interface ReviewableListItemProps {
    compact?: boolean;
    locale: string;
    reviewable: Reviewable;
}

/**
 * A small
 * @param param0
 * @returns
 */
export const ReviewableListItem = ({
    // ReviewableListItemProps
    compact,
    locale,
    reviewable,

    // DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    onClick,
}: ReviewableListItemProps &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
    <ListItem onClick={onClick}>{reviewable.info.title[locale]}</ListItem>
);
