import { DetailedHTMLProps, HTMLAttributes } from "react";

export type LabelProps = {
    name: string;
    required?: boolean;
};

export const FormLabel = ({
    name,
    required = false,
    children,
}: LabelProps &
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <label htmlFor={name}>
        {children}
        {required ? " *" : ""}:
    </label>
);
