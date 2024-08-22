import type { Meta, StoryObj } from "@storybook/react";
import { ReviewableListItem } from "./ReviewableListItem";

const meta = {
    title: "Example/ReviewableListItem",
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
        locale: "en",
        compact: true,
        reviewable: {
            id: 123456,
            type: "beverage",
            title: "not used",
            description: "not used",
            content: null,
            info: { title: { en: "reviewable title" } },
            statistics: null,
        },
    },
};
