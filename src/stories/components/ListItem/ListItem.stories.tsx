import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "./ListItem";
import { ReviewableListItem } from "../../composites/Reviewable/ReviewableListItem";

const meta = {
    title: "Example/ListItem",
    component: ListItem,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListItemOne: Story = {
    render: (args) => (
        <ListItem {...args}>
            <ReviewableListItem
                locale="en"
                reviewable={{
                    id: 123456,
                    type: "beverage",
                    title: "not used",
                    description: "not used",
                    content: null,
                    info: { title: { en: "reviewable title" } },
                    statistics: null,
                }}
            />
        </ListItem>
    ),
};
