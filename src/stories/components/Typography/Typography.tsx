import React, { DetailedHTMLProps, HTMLAttributes, ElementType } from "react";
import theme from "../../theme";
import { cn } from "../../lib/utils";

const ALIGN_CLASS = {
    inherit: "",
    left: "text-left",
    right: "text-right",
    center: "text-center",
};

const VARIANT_MAP = {
    h1: "h1" as ElementType,
    h2: "h2" as ElementType,
    h3: "h3" as ElementType,
    h4: "h4" as ElementType,
    h5: "h5" as ElementType,
    h6: "h6" as ElementType,
    subtitle1: "h6" as ElementType,
    subtitle2: "h6" as ElementType,
    body1: "p" as ElementType,
    body2: "p" as ElementType,
    caption: "p" as ElementType,
    overline: "p" as ElementType,
};

interface TypographyProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {
    align?: "inherit" | "left" | "center" | "right";
    noWrap?: boolean;
    gutterBottom?: boolean;
    variant?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "subtitle1"
        | "subtitle2"
        | "body1"
        | "body2"
        | "caption"
        | "overline";
}

export const Typography = ({
    noWrap = false,
    gutterBottom = false,
    align = "inherit",
    variant = "body1",
    className,
    children,
    ...props
}: TypographyProps) => {
    const Component: ElementType = VARIANT_MAP[variant];

    return (
        <Component
            className={cn(
                theme.typography[variant],
                ALIGN_CLASS[align],
                gutterBottom && "mb-2",
                noWrap && "whitespace-nowrap",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};
