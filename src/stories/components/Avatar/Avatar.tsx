import Image from "next/image";
import React from "react";

import smallImage from "../../assets/avatar_32x32.jpg";
import mediumImage from "../../assets/avatar_48x48.jpg";
import largeImage from "../../assets/avatar_64x64.jpg";

const SIZE = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
};

const IMAGE = {
    small: smallImage,
    medium: mediumImage,
    large: largeImage,
};

const DIMENSION = {
    small: 32,
    medium: 48,
    large: 64,
};

interface AvatarProps {
    imageUrl?: string;
    size: "small" | "medium" | "large";
}

/**
 * An image that represents a user's avatar
 * @param imageUrl: string - The image URL
 * @param size: "small" | "medium" | "large" - The size of the avatar
 * @returns
 */
export const Avatar = ({ imageUrl, size }: AvatarProps) => {
    if (!imageUrl) {
        return (
            <Image
                src={IMAGE[size]}
                alt="avatar"
                height={DIMENSION[size]}
                width={DIMENSION[size]}
                className={SIZE[size]}
            />
        );
    }

    return (
        <Image
            src={imageUrl}
            alt={imageUrl}
            height={DIMENSION[size]}
            width={DIMENSION[size]}
            className={SIZE[size]}
        />
    );
};
