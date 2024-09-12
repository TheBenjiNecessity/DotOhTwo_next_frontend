import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import "../../../app/globals.css";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Actions } from "./Actions";
import { cn } from "../../lib/utils";

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
    return (
        <div
            className={cn(
                "rounded",
                "border",
                "shadow",
                "bg-white",
                "p-6",
                width === CARD_WIDTH.FULL && "w-full",
                width === CARD_WIDTH.LARGE && "w-[1000px]",
                width === CARD_WIDTH.MEDIUM && "w-[500px]",
                width === CARD_WIDTH.SMALL && "w-[250px]",
                className
            )}
        >
            {children}
        </div>
    );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Actions = Actions;

export default Card;
