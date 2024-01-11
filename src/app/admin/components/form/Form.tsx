import { SubmitButton } from "@/components/form/SubmitButton";
import { InputBlock } from "./InputBlock";
import { TextareaBlock } from "./TextareaBlock";

export type InputProps = {
    name: string;
    label: string;
    defaultValue?: string | undefined;
    disabled?: boolean;
    colSpan?: number;
    required?: boolean;
};

type FormInputProps = {
    type: string;
    isJSON?: boolean;
    isDate?: boolean;
};

type RowProps = {
    inputs: Array<InputProps & FormInputProps>;
};

type FormProps = {
    action: (formData: FormData) => void;
    submitButtonText: string;
    rows: Array<RowProps>;
    data?: any;
};

export const Form = ({ action, submitButtonText, rows, data }: FormProps) => {
    return (
        <form className="w-full" action={action}>
            <table className="w-full">
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            {row.inputs.map((input) => {
                                const defaultValue = data?.[input.name];
                                const date = new Date(defaultValue);
                                const isValid = !isNaN(
                                    Date.parse(defaultValue)
                                );

                                if (input.type === "input") {
                                    return (
                                        <InputBlock
                                            key={input.name}
                                            name={input.name}
                                            label={input.label}
                                            defaultValue={
                                                input.isDate && isValid
                                                    ? date.toISOString()
                                                    : defaultValue
                                            }
                                            disabled={input.disabled}
                                            required={input.required}
                                            colSpan={input.colSpan}
                                        />
                                    );
                                } else if (input.type === "textarea") {
                                    return (
                                        <TextareaBlock
                                            key={input.name}
                                            name={input.name}
                                            label={input.label}
                                            defaultValue={
                                                input.isJSON
                                                    ? JSON.stringify(
                                                          defaultValue
                                                      )
                                                    : defaultValue
                                            }
                                            disabled={input.disabled}
                                            required={input.required}
                                            colSpan={input.colSpan}
                                        />
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            <SubmitButton className="my-2 p-2 border border-black bg-white">
                {submitButtonText}
            </SubmitButton>
        </form>
    );
};
