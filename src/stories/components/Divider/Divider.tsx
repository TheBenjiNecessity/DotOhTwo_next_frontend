import * as React from "react";
import "./divider.css";

export interface DividerProps {
    orientation?: "horizontal" | "vertical";
}

const Divider: React.FC<DividerProps> = ({ orientation = "horizontal" }) => {
    const sizeClass = orientation === "horizontal" ? "w-auto" : "h-auto";
    return (
        <hr className={`self-stretch divider-${orientation} ${sizeClass}`} />
    );
};

export default Divider;
