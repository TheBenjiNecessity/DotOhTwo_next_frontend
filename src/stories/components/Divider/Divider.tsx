import * as React from "react";
import "./divider.css";
import { cn } from "../../lib/utils";

export interface DividerProps {
    orientation?: "horizontal" | "vertical";
}

const Divider: React.FC<DividerProps> = ({ orientation = "horizontal" }) => {
    return (
        <hr
            className={cn(
                "self-stretch",
                `divider-${orientation}`,
                orientation === "horizontal" && "w-auto",
                orientation != "horizontal" && "h-auto"
            )}
        />
    );
};

export default Divider;
