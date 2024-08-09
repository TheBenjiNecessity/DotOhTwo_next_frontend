import type { Meta, StoryObj } from "@storybook/react";

import NavigationBar from "./NavigationBar";
import Stack from "../Stack/Stack";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Example/NavigationBar",
    component: NavigationBar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    render: () => (
        <NavigationBar>
            <Stack fullWidth direction="row" spacing={2}>
                <NavigationBar.Logo />
                <NavigationBar.Input />
                <NavigationBar.Button>Home</NavigationBar.Button>
            </Stack>
        </NavigationBar>
    ),
};
