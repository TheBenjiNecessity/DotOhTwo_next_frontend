import type { Meta, StoryObj } from "@storybook/react";

import { Flexbox } from "./Flexbox";
import "../../tailwind_imports.css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Example/Flexbox",
    component: Flexbox,
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
} satisfies Meta<typeof Flexbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Vertical: Story = {
    render: (args) => (
        <div
            className="border border-black p-4"
            style={{ height: "500px", width: "500px" }}
        >
            <Flexbox {...args}>
                <div className="border border-black py-1 px-2">item</div>
                <div className="border border-black py-1 px-2">item</div>
                <div className="border border-black py-1 px-2">item</div>
            </Flexbox>
        </div>
    ),
};

export const Horizontal: Story = {
    args: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        direction: "column",
        children: "Horizontal",
    },
};
