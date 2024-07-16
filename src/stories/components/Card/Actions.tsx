import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import "../../../app/globals.css";

export enum CARD_ACTIONS_ALIGN {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right",
}

interface ActionsProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {
    align?: string;
}

export const Actions = ({
    align = CARD_ACTIONS_ALIGN.LEFT,
    children,
}: ActionsProps) => {
    if (align === CARD_ACTIONS_ALIGN.RIGHT) {
        return (
            <div className="flex justify-center items-center w-full">
                <div className="flex-grow"></div>
                <div className="flex-shrink">{children}</div>
            </div>
        );
    } else if (align === CARD_ACTIONS_ALIGN.CENTER) {
        return (
            <div className="flex justify-center items-center w-full">
                {children}
            </div>
        );
    } else {
        return (
            <div className="flex justify-center items-center w-full">
                <div className="flex-shrink">{children}</div>
                <div className="flex-grow"></div>
            </div>
        );
    }
};
