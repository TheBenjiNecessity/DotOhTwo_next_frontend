import type { Meta, StoryObj } from "@storybook/react";
import { UserListItem } from "./UserListItem";

const meta = {
    title: "Example/UserListItem",
    component: UserListItem,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof UserListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserListItemOne: Story = {
    args: {
        user: {
            id: "",
            username: "Username",
            email: "email@email.com",
            phone: "5555555555",
            DOB: new Date(),
            roles: "",
            content: null,
            settings: null,
            preferences: null,
            statistics: null,
        },
    },
};
