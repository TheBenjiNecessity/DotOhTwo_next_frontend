import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import {
    LG_SPANS,
    MD_SPANS,
    SM_SPANS,
    XL_SPANS,
    XS_SPANS,
} from "./item.constants";
import "../../../app/globals.css";
import { cn } from "../../lib/utils";

export interface ItemProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

const Item = ({
    xs = 0,
    sm = 0,
    md = 0,
    lg = 0,
    xl = 0,
    children,
}: ItemProps) => {
    return (
        <div
            className={cn(
                xs && XS_SPANS[xs],
                sm && SM_SPANS[sm],
                md && MD_SPANS[md],
                lg && LG_SPANS[lg],
                xl && XL_SPANS[xl]
            )}
        >
            {children}
        </div>
    );
};

export default Item;
