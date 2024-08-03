import type { Meta, StoryObj } from "@storybook/react";
import { LoginPage } from "./Login";

const meta = {
    title: "Pages/LoginPage",
    component: LoginPage,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
    args: {},
};
