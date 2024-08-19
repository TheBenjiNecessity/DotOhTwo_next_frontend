import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface ExpanderProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Expander = ({ children }: ExpanderProps) => {
    return <div className="flex-grow">{children}</div>;
};
