import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import {
    LG_WIDTH_CLASSES,
    MD_WIDTH_CLASSES,
    SM_WIDTH_CLASSES,
    XL_WIDTH_CLASSES,
    XS_WIDTH_CLASSES,
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
    const xsWidthClass = xs ? XS_WIDTH_CLASSES[xs] : null;
    const smWidthClass = sm ? SM_WIDTH_CLASSES[sm] : null;
    const mdWidthClass = md ? MD_WIDTH_CLASSES[md] : null;
    const lgWidthClass = lg ? LG_WIDTH_CLASSES[lg] : null;
    const xlWidthClass = xl ? XL_WIDTH_CLASSES[xl] : null;

    const classes = [
        "inline-block",
        "grid-item",
        xsWidthClass,
        smWidthClass,
        mdWidthClass,
        lgWidthClass,
        xlWidthClass,
    ]
        .filter((item) => item !== null)
        .join(" ");
    return <div className={classes}>{children}</div>;
};

export default Item;
