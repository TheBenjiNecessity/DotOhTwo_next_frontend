import type { Meta, StoryObj } from "@storybook/react";
import { SocialLoginButton } from "./SocialLoginButton";

const meta = {
    title: "Example/SocialLoginButton",
    component: SocialLoginButton,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof SocialLoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SocialLoginButtonGitHub: Story = {
    args: {
        providerId: "github",
    },
};
