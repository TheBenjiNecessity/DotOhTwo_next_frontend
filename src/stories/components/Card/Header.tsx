import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import "../../../app/globals.css";

interface HeaderProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {
    centered?: boolean;
}

export const Header = ({ centered = false, children }: HeaderProps) => {
    let className = "mb-2 w-full";

    if (centered) {
        className += " text-center";
    }

    return <div className={className}>{children}</div>;
};
