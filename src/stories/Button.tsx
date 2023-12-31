import React from "react";
import "../app/globals.css";
import theme from "./theme";

const SIZE_CLASS = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
};

interface ButtonProps {
    primary?: boolean;

    size?: "small" | "medium" | "large";

    variant?: "contained" | "text" | "outlined";

    type?: "button" | "submit";

    children: React.ReactNode;

    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    primary = false,
    size = "medium",
    variant = "contained",
    children,
    ...restProps
}: ButtonProps) => {
    const mode = primary ? "primary" : "secondary";
    const variantObject = theme.button[mode][variant];
    const variantClassNames = [
        variantObject.color,
        variantObject.backgroundColor,
        variantObject.borderColor,
    ].join(" ");
    const outlinedClass = variant === "outlined" ? "border" : "";
    const className = `rounded py-1 px-2 ${outlinedClass} ${variantClassNames} ${SIZE_CLASS[size]}`;

    return (
        <button className={className} {...restProps}>
            {children}
        </button>
    );
};
