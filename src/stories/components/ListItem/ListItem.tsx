import React, { DetailedHTMLProps, HTMLAttributes } from "react";

/**
 * A small
 * @param param0
 * @returns
 */
export const ListItem = ({
    children,
    onClick,
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const pointerClass = onClick ? "cursor-pointer" : "cursor-default";

    return (
        <div onClick={onClick} className={`w-full px-2 py-1 ${pointerClass}`}>
            {children}
        </div>
    );
};
