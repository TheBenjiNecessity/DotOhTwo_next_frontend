import React, {
    Children,
    DetailedHTMLProps,
    HTMLAttributes,
    ReactNode,
} from "react";
import "../../tailwind_imports.css";
import { Flexbox, FlexboxProps } from "../Flexbox/Flexbox";
import { Expander } from "./Expander";
import { cn } from "../../lib/utils";

const SPACING_CLASSES = {
    column: ["space-y-0", "space-y-1", "space-y-2", "space-y-3", "space-y-4"],
    row: ["space-x-0", "space-x-1", "space-x-2", "space-x-3", "space-x-4"],
};

export interface SpacingProps {
    spacing?: 0 | 1 | 2 | 3 | 4;
}

interface StackProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
        SpacingProps {
    direction?: "row" | "column";
    divider?: ReactNode;
    fullWidth?: boolean;
}

/**
 *
 * @param spacing {number} the amount of spacing in between elements
 * @param direction {string} one of "row" | "column". Determines if elements should be vertical or horizontal
 * @param divider {node} an element to put in between items
 * @param children {node} array of elements to be spaced apart
 * @returns
 */
const Stack = ({
    spacing = 0,
    direction = "column",
    fullWidth = false,
    divider,
    children,
    ...restProps
}: StackProps & FlexboxProps) => {
    return (
        <Flexbox
            direction={direction}
            className={cn(
                fullWidth && "w-full",
                SPACING_CLASSES[direction][spacing]
            )}
            {...restProps}
        >
            {Children.map(children, (child, index) => {
                const shouldShowDivider =
                    divider && index + 1 < Children.count(children);

                return (
                    <>
                        {child}
                        {shouldShowDivider && divider}
                    </>
                );
            })}
        </Flexbox>
    );
};

Stack.Expander = Expander;

export default Stack;
