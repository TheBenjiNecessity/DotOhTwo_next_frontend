import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Item from "./Item";
import "../../../app/globals.css";
import "./grid.css";

export interface GridProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    spacing?: 0 | 1 | 2 | 3 | 4;
}

const Grid = ({ spacing = 0, children }: GridProps) => {
    const spacingClass = ["w-full", "grid-container", `spacing-${spacing}`];

    return <div className={spacingClass.join(" ")}>{children}</div>;
};

Grid.Item = Item;

export default Grid;
