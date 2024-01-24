import type { Meta, StoryObj } from "@storybook/react";
import { Review } from "./ReviewListItem";

const meta = {
    title: "Example/Review",
    component: Review,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Review>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReviewOne: Story = {
    args: {
        review: { name: "review" },
    },
};
