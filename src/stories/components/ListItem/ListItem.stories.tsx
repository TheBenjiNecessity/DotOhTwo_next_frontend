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
    render: (args) => <ListItem {...args}></ListItem>,
};
