import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export const ListItem = ({
    children,
    onClick,
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "w-full px-2 py-1",
                onClick && "cursor-pointer",
                !onClick && "cursor-default"
            )}
        >
            {children}
        </div>
    );
};
