import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Flexbox, FlexboxProps } from "../Flexbox/Flexbox";
import Item from "./Item";

const SPACING_CLASSES = [
    "space-x-0",
    "space-x-1",
    "space-x-2",
    "space-x-3",
    "space-x-4",
];

export interface GridProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    spacing?: 0 | 1 | 2 | 3 | 4;
}

const Grid = ({ spacing = 0, children }: GridProps) => {
    const spacingClass = [SPACING_CLASSES[spacing]];

    return <div className={spacingClass.join(" ")}>{children}</div>;
};

Grid.Item = Item;

export default Grid;
