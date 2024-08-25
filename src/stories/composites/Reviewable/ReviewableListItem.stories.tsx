import type { Meta, StoryObj } from "@storybook/react";
import { ReviewableListItem } from "./ReviewableListItem";

const meta = {
    title: "Composites/ReviewableListItem",
    component: ReviewableListItem,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof ReviewableListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReviewableListItemOne: Story = {
    args: {
        name: "Coca Cola",
        description: "Coca Cola is a carbonated soft drink.",
        rating: 4,
        avatarUrl: undefined,
    },
};
