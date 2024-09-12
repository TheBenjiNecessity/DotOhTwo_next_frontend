import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import "../../../app/globals.css";
import { cn } from "../../lib/utils";

interface HeaderProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {
    centered?: boolean;
}

export const Header = ({ centered = false, children }: HeaderProps) => {
    return (
        <div className={cn("mb-2 w-full", centered && "text-center")}>
            {children}
        </div>
    );
};
