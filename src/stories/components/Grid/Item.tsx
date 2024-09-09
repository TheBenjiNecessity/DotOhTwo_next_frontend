import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import {
    LG_SPANS,
    MD_SPANS,
    SM_SPANS,
    XL_SPANS,
    XS_SPANS,
} from "./item.constants";
import "../../../app/globals.css";

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
    const xsSpanClass = xs ? XS_SPANS[xs] : null;
    const smSpanClass = sm ? SM_SPANS[sm] : null;
    const mdSpanClass = md ? MD_SPANS[md] : null;
    const lgSpanClass = lg ? LG_SPANS[lg] : null;
    const xlSpanClass = xl ? XL_SPANS[xl] : null;

    const classes = [
        xsSpanClass,
        smSpanClass,
        mdSpanClass,
        lgSpanClass,
        xlSpanClass,
    ]
        .filter((item) => item !== null)
        .join(" ");
    return <div className={classes}>{children}</div>;
};

export default Item;
