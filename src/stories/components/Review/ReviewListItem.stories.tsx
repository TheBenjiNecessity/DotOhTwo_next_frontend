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
        review: {
            name: "Ut enim ad minim veniam",
            description: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            `,
            username: "username",
            rating: 5,
            date: new Date(),
            content: {
                avatarUrl: undefined,
                reviewableAvatarUrl: undefined,
            },
        },
    },
};
