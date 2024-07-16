import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";

const meta = {
    title: "Example/Typography",
    component: Typography,
    parameters: {},
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
    args: {
        variant: "h1",
        children: "Typography",
    },
};

export const H2: Story = {
    args: {
        variant: "h2",
        children: "Typography",
    },
};

export const H3: Story = {
    args: {
        variant: "h3",
        children: "Typography",
    },
};

export const H4: Story = {
    args: {
        variant: "h4",
        children: "Typography",
    },
};

export const H5: Story = {
    args: {
        variant: "h5",
        children: "Typography",
    },
};

export const H6: Story = {
    args: {
        variant: "h6",
        children: "Typography",
    },
};

export const subtitle1: Story = {
    args: {
        variant: "subtitle1",
        children: "Typography",
    },
};

export const subtitle2: Story = {
    args: {
        variant: "subtitle2",
        children: "Typography",
    },
};

export const body1: Story = {
    args: {
        variant: "body1",
        children: "Typography",
    },
};

export const body2: Story = {
    args: {
        variant: "body2",
        children: "Typography",
    },
};

export const caption: Story = {
    args: {
        variant: "caption",
        children: "Typography",
    },
};

export const overline: Story = {
    args: {
        variant: "overline",
        children: "Typography",
    },
};
