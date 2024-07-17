import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import "../../tailwind_imports.css";

const DIRECTION_CLASSES = {
    row: "flex-row",
    column: "flex-col",
};

const JUSTIFY_CLASSES = {
    "flex-start": "justify-start",
    "flex-end": "justify-end",
    center: "justify-center",
    "space-between": "justify-between",
    "space-around": "justify-around",
    "space-evenly": "justify-evenly",
};

const ALIGN_ITEMS_CLASSES = {
    "flex-start": "items-start",
    "flex-end": "items-end",
    center: "items-center",
    stretch: "items-stretch",
    baseline: "items-baseline",
};

export interface FlexboxProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    direction?: "row" | "column";
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly";
    alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
    fullWidth?: boolean;
    fullHeight?: boolean;
    flexGrow?: 0 | 1 | undefined;
    flexShrink?: 0 | 1 | undefined;
}

/**
 *
 * @param direction {string} one of "row" | "column". Determines if elements should be vertical or horizontal
 * @param justifyContent {string} centers the content along the main axis
 * @param alignItems {string} centers the content along the cross axis
 * @param flexGrow {number?} tells the content to take up as much space as possible
 * @param flexShrink {number?} tells the content to take up as little space as possible
 * @param fullWidth {boolean} expands the box to the entire width of its parent
 * @param fullHeight {boolean} expands the box to the entire height of its parent
 * @param children {node}
 * @returns
 */
export const Flexbox = ({
    justifyContent = "flex-start",
    alignItems = "flex-start",
    direction = "column",
    flexGrow,
    flexShrink,
    fullWidth = false,
    fullHeight = false,
    className,
    children,
}: FlexboxProps) => {
    const justifyClass = JUSTIFY_CLASSES[justifyContent];
    const alignClass = ALIGN_ITEMS_CLASSES[alignItems];
    const directionClass = DIRECTION_CLASSES[direction];
    const widthClass = fullWidth ? "w-full" : "";
    const heightClass = fullHeight ? "h-full" : "";
    let growClass = "";
    let shrinkClass = "";

    if (typeof flexGrow !== "undefined") {
        growClass = flexGrow === 0 ? "grow-0" : "grow";
    }

    if (typeof flexShrink !== "undefined") {
        shrinkClass = flexShrink === 0 ? "shrink-0" : "shrink";
    }

    const classes = [
        "flex",
        directionClass,
        justifyClass,
        alignClass,
        widthClass,
        heightClass,
        growClass,
        shrinkClass,
        className,
    ]
        .join(" ")
        .trim();

    return <div className={classes}>{children}</div>;
};
