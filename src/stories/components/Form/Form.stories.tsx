import type { Meta, StoryObj } from "@storybook/react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./Form";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";

const Component = (props: any) => {
    const form = useForm();

    console.log("form", form);

    return (
        <Form {...form}>
            <FormField
                control={form.control}
                name="example"
                render={() => (
                    <FormItem>
                        <FormLabel>Form Label</FormLabel>
                        <FormControl>
                            <Input placeholder="FormControl" />
                        </FormControl>
                        <FormDescription>
                            This is an form description
                        </FormDescription>
                        <FormMessage>This is an form message</FormMessage>
                    </FormItem>
                )}
            />
        </Form>
    );
};

const meta = {
    title: "Example/FormField",
    component: Component,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormOne: Story = {
    render: (args) => <Component {...args} />,
};
