import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FormLabel, LabelProps } from "./FormLabel";

export type FormControl = {
    name: string;
    label: string;
    defaultValue?: string | undefined;
    disabled?: boolean;
    colSpan?: number;
    required?: boolean;
};

export const FormControl = ({
    name,
    label,
    required = false,
    colSpan = 1,
    children,
}: FormControl &
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <td className="px-2 py-1" colSpan={colSpan}>
        <div>
            <FormLabel name={name} required={required}>
                {label}
            </FormLabel>
        </div>
        <div>{children}</div>
    </td>
);
