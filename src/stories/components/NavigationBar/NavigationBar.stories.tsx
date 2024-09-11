import type { Meta, StoryObj } from "@storybook/react";

import NavigationBar from "./NavigationBar";
import Stack from "../Stack/Stack";

const meta = {
    title: "Example/NavigationBar",
    component: NavigationBar,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: () => (
        <NavigationBar>
            <Stack fullWidth direction="row" spacing={2}>
                <NavigationBar.Logo />
                <NavigationBar.Input />
                <NavigationBar.Dropdown
                    button={
                        <NavigationBar.Button>Options</NavigationBar.Button>
                    }
                >
                    <NavigationBar.Dropdown.Item>
                        Billing
                    </NavigationBar.Dropdown.Item>
                </NavigationBar.Dropdown>
                <NavigationBar.Button>Home</NavigationBar.Button>
            </Stack>
        </NavigationBar>
    ),
};
