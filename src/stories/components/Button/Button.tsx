import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "../../../app/globals.css";
import theme from "../../theme";
import { Typography } from "../Typography/Typography";

const SIZE_CLASS = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
};

interface ButtonProps
    extends DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        React.AriaAttributes {
    primary?: boolean;

    size?: "small" | "medium" | "large";

    variant?: "contained" | "text" | "outlined";
}

/**
 *
 * @param primary {boolean} shows primary coloring when true, otherwise shows secondary
 * @returns
 */
export const Button = ({
    primary = false,
    size = "medium",
    variant = "contained",
    children,
    ...props
}: ButtonProps) => {
    const { className: _, ...restProps } = props; // remove className

    const mode = primary ? "primary" : "secondary";
    const { color, backgroundColor, borderColor } = theme.button[mode][variant];
    const variantClassNames = [color, backgroundColor, borderColor].join(" ");
    const outlinedClass = variant === "outlined" ? "border" : "";
    const className = [
        "rounded",
        "py-1",
        "px-2",
        outlinedClass,
        variantClassNames,
        SIZE_CLASS[size],
        theme.button[mode][variant].hover,
        theme.button[mode][variant].active,
    ].join(" ");

    return (
        <button className={className} {...restProps}>
            <Typography variant="body1">{children}</Typography>
        </button>
    );
};
