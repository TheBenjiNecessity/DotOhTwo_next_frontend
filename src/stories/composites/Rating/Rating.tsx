import React from "react";
import Stack from "../../components/Stack/Stack";
import { FaStar, FaStarHalf } from "react-icons/fa";

const MAX_SCORE = 5;

interface RatingProps {
    score: number;
}

export const Rating = ({ score }: RatingProps) => {
    if (score > MAX_SCORE) {
        throw new Error(`Score cannot be greater than ${MAX_SCORE}`);
    }

    if (score < 0) {
        throw new Error("Score cannot be less than 0");
    }

    const scoreRounded = Math.floor(score);

    return (
        <Stack inline direction="row" spacing={1}>
            {new Array(scoreRounded).fill(null).map((_, index) => (
                <FaStar
                    key={index}
                    className="text-yellow-500 stroke-current fill-current"
                />
            ))}
            {Number.isInteger(score) ? null : (
                <FaStarHalf className="text-yellow-500 stroke-current fill-current" />
            )}
        </Stack>
    );
};
