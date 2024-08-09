import type { Meta, StoryObj } from "@storybook/react";

import Stack from "./Stack";
import "../../tailwind_imports.css";
import Divider from "../Divider/Divider";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Example/Stack",
    component: Stack,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        //backgroundColor: { control: "color" },
    },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Vertical: Story = {
    render: (args) => (
        <Stack spacing={4} {...args}>
            <div className="border border-black">test</div>
            <div className="border border-black">test</div>
            <div className="border border-black">test</div>
        </Stack>
    ),
};

export const Horizontal: Story = {
    render: (args) => (
        <Stack direction="row" spacing={4} {...args}>
            <div className="border border-black">test</div>
            <div className="border border-black">test</div>
            <div className="border border-black">test</div>
        </Stack>
    ),
};

export const DividerVertical: Story = {
    render: (args) => (
        <Stack
            direction="row"
            spacing={4}
            divider={<Divider orientation="vertical" />}
            {...args}
        >
            <div className="border border-black">test</div>
            <div className="border border-black">test</div>
            <div className="border border-black">test</div>
        </Stack>
    ),
};

export const DividerHorizontal: Story = {
    render: (args) => (
        <Stack spacing={4} divider={<Divider />} {...args}>
            <div className="border border-black">test</div>
            <div className="border border-black">test</div>
            <div className="border border-black">test</div>
        </Stack>
    ),
};
