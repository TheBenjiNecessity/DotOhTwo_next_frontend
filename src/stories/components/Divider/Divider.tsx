import * as React from "react";

export interface DividerProps {
    orientation?: "horizontal" | "vertical";
}

const Divider: React.FC<DividerProps> = ({ orientation = "horizontal" }) => {
    const orientationClass = orientation === "horizontal" ? "h-full" : "w-full";

    return <hr className={orientationClass} />;
};

export default Divider;
