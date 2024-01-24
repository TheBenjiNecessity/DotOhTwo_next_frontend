import React from "react";

const SIZE_CLASS: Record<string, string> = {
    small: "text-4xl pt-1",
    medium: "text-6xl pt-2",
    large: "text-8xl pt-3",
};

interface LogoProps {
    size: "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: LogoProps) => {
    return (
        <div className={`inline-block ${SIZE_CLASS[size]}`}>
            .<sup>02</sup>
        </div>
    );
};
