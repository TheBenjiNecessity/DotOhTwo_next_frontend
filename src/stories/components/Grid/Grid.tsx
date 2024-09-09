import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Item from "./Item";
import "../../../app/globals.css";
import { GAPS } from "./grid.constants";

export interface GridProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const Grid = ({ spacing = 0, children }: GridProps) => {
    const spacingClass = ["w-full", "grid", "grid-cols-12", GAPS[spacing]];

    return <div className={spacingClass.join(" ")}>{children}</div>;
};

Grid.Item = Item;

export default Grid;
