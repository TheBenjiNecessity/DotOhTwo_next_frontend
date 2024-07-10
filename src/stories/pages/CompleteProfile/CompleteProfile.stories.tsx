import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import { CompleteProfile } from "./CompleteProfile";
import { useForm } from "react-hook-form";

const Component = (props: any) => {
    const form = useForm();

    return <CompleteProfile form={form} />;
};

const meta = {
    title: "Example/CompleteProfile",
    component: Component,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Page: Story = {
    render: (args) => <Component {...args} />,
};
