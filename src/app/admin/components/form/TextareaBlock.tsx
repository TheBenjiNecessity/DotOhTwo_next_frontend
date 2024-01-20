import { InputProps } from "./Form";
import { FormControl } from "./FormControl";

export const TextareaBlock = ({
    name,
    label,
    defaultValue = "",
    disabled = false,
    required = false,
    colSpan = 2,
}: InputProps) => (
    <FormControl
        name={name}
        label={label}
        required={required}
        colSpan={colSpan}
    >
        <textarea
            id={name}
            name={name}
            rows={4}
            className="w-full"
            defaultValue={defaultValue}
            disabled={disabled}
        />
    </FormControl>
);
