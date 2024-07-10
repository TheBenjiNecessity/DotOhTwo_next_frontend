import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import "../../../app/globals.css";
import theme from "../../theme";

interface CardProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {}

/**
 *
 * @returns
 */
export const Card = ({ className, children }: CardProps) => {
    const newClassName = `rounded border shadow py-1 px-2 ${className}`;

    return <div className={newClassName}>{children}</div>;
};