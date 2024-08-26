import type { Meta, StoryObj } from "@storybook/react";
import { UserListItem } from "./UserListItem";

const meta = {
    title: "Composites/UserListItem",
    component: UserListItem,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
} satisfies Meta<typeof UserListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserListItemOne: Story = {
    args: {
        name: "John Doe",
        username: "username",
        avatarUrl: undefined,
    },
};
