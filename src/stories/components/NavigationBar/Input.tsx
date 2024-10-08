import * as React from "react";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Component = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        const newClassName = `flex h-8 w-full rounded-md border border-input bg-background px-2 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`;
        return (
            <input type={type} className={newClassName} ref={ref} {...props} />
        );
    }
);

Component.displayName = "Input";

export const Input = Component;
