import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "../../../app/globals.css";
import theme from "../../theme";
import { Typography } from "../Typography/Typography";

import { cn } from "../../lib/utils";

const getSizeClass = (size: string): "body1" | "body2" | "h6" | undefined => {
    switch (size) {
        case "small":
            return "body2";
        case "medium":
            return "body1";
        case "large":
            return "h6";
        default:
            return undefined;
    }
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
    className,
    children,
    ...restProps
}: ButtonProps) => {
    const mode = primary ? "primary" : "secondary";

    return (
        <button
            className={cn(
                "rounded py-1 px-2",
                variant === "outlined" && "border",
                theme.button[mode][variant].color,
                theme.button[mode][variant].backgroundColor,
                theme.button[mode][variant].borderColor,
                theme.button[mode][variant].hover,
                theme.button[mode][variant].active,
                className
            )}
            {...restProps}
        >
            <Typography variant={getSizeClass(size)}>{children}</Typography>
        </button>
    );
};
