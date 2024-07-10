import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import "../../../app/globals.css";

interface HeaderProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {}

export const Header = ({ children }: HeaderProps) => {
    const className = "py-1 px-2";

    return <div className={className}>{children}</div>;
};
