import type { Meta, StoryObj } from "@storybook/react";
import { MainPage } from "./Main";

const meta = {
    title: "Pages/MainPage",
    component: MainPage,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
    args: {},
};
