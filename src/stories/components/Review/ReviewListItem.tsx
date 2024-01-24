import React from "react";

type Review = {
    name: string;
};

interface ReviewProps {
    review: Review;
}

/**
 * A small
 * @param param0
 * @returns
 */
export const Review = ({ review }: ReviewProps) => <div>review</div>;
