import React, {
    Children,
    DetailedHTMLProps,
    HTMLAttributes,
    ReactNode,
} from "react";
import "../../tailwind_imports.css";

const SPACING_CLASSES = {
    column: ["mt-0", "mt-1", "mt-2", "mt-3", "mt-4"],
    row: ["ml-0", "ml-1", "ml-2", "ml-3", "ml-4"],
};

const DIRECTION_CLASSES = {
    row: "flex-row",
    column: "flex-col",
};

interface StackProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    spacing?: 0 | 1 | 2 | 3 | 4;

    direction?: "row" | "column";

    divider?: ReactNode;
}

/**
 *
 * @param spacing {number} the amount of spacing in between elements
 * @param direction {string} one of "row" | "column". Determines if elements should be vertical or horizontal
 * @param divider {node} an element to put in between items
 * @param children {node} array of elements to be spaced apart
 * @returns
 */
export const Stack = ({
    spacing = 0,
    direction = "column",
    divider,
    children,
}: StackProps) => {
    const spacingClass = SPACING_CLASSES[direction][spacing];
    const directionClass = DIRECTION_CLASSES[direction];

    return (
        <div className={`flex ${directionClass}`}>
            {Children.map(children, (child, index) => {
                const className = index !== 0 ? spacingClass : undefined;

                return (
                    <>
                        <div className={className}>{child}</div>
                        {index < Children.count(children) && (
                            <div className={spacingClass}>{divider}</div>
                        )}
                    </>
                );
            })}
        </div>
    );
};
