import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import "../../../app/globals.css";

interface BodyProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {}

export const Body = ({ children }: BodyProps) => {
    return <div className="w-full">{children}</div>;
};
