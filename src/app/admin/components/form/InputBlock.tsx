import { InputProps } from "./Form";
import { FormControl } from "./FormControl";

export const InputBlock = ({
    name,
    label,
    defaultValue = "",
    disabled = false,
    required = false,
    colSpan = 1,
}: InputProps) => (
    <FormControl
        name={name}
        label={label}
        required={required}
        colSpan={colSpan}
    >
        <input
            type="text"
            name={name}
            defaultValue={defaultValue}
            disabled={disabled}
        />
    </FormControl>
);
