import React from "react";
import Stack from "../Stack/Stack";
import { FaStar } from "react-icons/fa";

interface RatingProps {
    stars: number;
}

/**
 * A small
 * @param param0
 * @returns
 */
export const Rating = ({ stars }: RatingProps) => (
    <Stack inline direction="row" spacing={1}>
        {new Array(stars).fill(null).map((_, index) => (
            <FaStar
                key={index}
                className="text-yellow-500 stroke-current fill-current"
            />
        ))}
    </Stack>
);
