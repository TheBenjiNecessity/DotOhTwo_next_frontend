import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "./Rating";

const meta = {
    title: "Example/Rating",
    component: Rating,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RatingOne: Story = {
    args: {
        stars: 5,
    },
};
