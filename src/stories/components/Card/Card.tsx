import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import "../../../app/globals.css";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Actions } from "./Actions";

export enum CARD_WIDTH {
    FULL = "full",
    LARGE = "half",
    MEDIUM = "quarter",
    SMALL = "third",
}

interface CardProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {
    width?: CARD_WIDTH;
}

const Card = ({
    width = CARD_WIDTH.FULL,
    className = "",
    children,
}: CardProps) => {
    const classes = [
        "rounded",
        "border",
        "shadow",
        "bg-white",
        "p-6",
        className,
    ];

    switch (width) {
        case CARD_WIDTH.FULL:
            classes.push("w-full");
            break;
        case CARD_WIDTH.LARGE:
            classes.push("w-[1000px]");
            break;
        case CARD_WIDTH.MEDIUM:
            classes.push("w-[500px]");
            break;
        case CARD_WIDTH.SMALL:
            classes.push("w-[250px]");
            break;
    }

    return <div className={classes.join(" ")}>{children}</div>;
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Actions = Actions;

export default Card;
