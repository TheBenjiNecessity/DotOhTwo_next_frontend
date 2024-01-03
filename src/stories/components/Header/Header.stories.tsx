import type { Meta, StoryObj } from "@storybook/react";
import { Header, HeaderBranding, HeaderUserMessage } from "./Header";

const meta = {
    title: "Example/Header",
    component: Header,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
    render: (args) => (
        <Header {...args}>
            <HeaderUserMessage user={{ name: "Jane Doe" }} />
        </Header>
    ),
};

export const LoggedOut: Story = {};
