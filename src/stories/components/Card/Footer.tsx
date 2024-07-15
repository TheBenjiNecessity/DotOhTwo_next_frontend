import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import "../../../app/globals.css";

interface FooterProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {}

export const Footer = ({ children }: FooterProps) => {
    return <div className="mt-6 w-full">{children}</div>;
};
