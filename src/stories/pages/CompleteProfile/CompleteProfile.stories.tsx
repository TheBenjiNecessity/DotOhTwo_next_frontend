import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import { CompleteProfile } from "./CompleteProfile";
import { useForm } from "react-hook-form";

async function onFormAction(prevState: any, formData: FormData) {
    return {
        errors: null,
    };
}

const Component = (props: any) => {
    const form = useForm();

    return <CompleteProfile form={form} formAction={onFormAction} {...props} />;
};

const meta = {
    title: "Pages/CompleteProfile",
    component: Component,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Page: Story = {
    render: (args) => <Component {...args} />,
};
