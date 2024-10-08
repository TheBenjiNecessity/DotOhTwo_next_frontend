import type { Meta, StoryObj } from "@storybook/react";

import Grid from "./Grid";

const meta = {
    title: "Example/Grid",
    component: Grid,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExtraSmall: Story = {
    render: (args) => (
        <div className="border">
            <Grid {...args}>
                <Grid.Item xs={1}>
                    <div className="border border-black w-full text-center">
                        xs-1
                    </div>
                </Grid.Item>
                <Grid.Item xs={2}>
                    <div className="border border-black w-full text-center">
                        xs-2
                    </div>
                </Grid.Item>
                <Grid.Item xs={9}>
                    <div className="border border-black w-full text-center">
                        xs-9
                    </div>
                </Grid.Item>
            </Grid>
        </div>
    ),
};

export const Small: Story = {
    render: (args) => (
        <Grid {...args}>
            <Grid.Item sm={1}>sm-1</Grid.Item>
            <Grid.Item sm={2}>sm-2</Grid.Item>
            <Grid.Item sm={9}>sm-9</Grid.Item>
        </Grid>
    ),
};

export const Combined: Story = {
    render: (args) => (
        <Grid {...args}>
            <Grid.Item xs={12} sm={6} md={4} lg={3} xl={2}>
                <div className="border border-black w-full text-center">1</div>
            </Grid.Item>
            <Grid.Item xs={12} sm={6} md={4} lg={3} xl={2}>
                <div className="border border-black w-full text-center">2</div>
            </Grid.Item>
            <Grid.Item xs={12} sm={6} md={4} lg={3} xl={2}>
                <div className="border border-black w-full text-center">3</div>
            </Grid.Item>
        </Grid>
    ),
};

export const Nested: Story = {
    render: (args) => (
        <div className="border border-red-400">
            <Grid {...args}>
                <Grid.Item xs={6}>
                    <Grid {...args}>
                        <Grid.Item xs={4}>
                            <div className="border border-black w-full text-center">
                                1
                            </div>
                        </Grid.Item>
                        <Grid.Item xs={4}>
                            <div className="border border-black w-full text-center">
                                2
                            </div>
                        </Grid.Item>
                        <Grid.Item xs={4}>
                            <div className="border border-black w-full text-center">
                                3
                            </div>
                        </Grid.Item>
                    </Grid>
                </Grid.Item>
                <Grid.Item xs={6}>
                    <div className="border border-black w-full text-center">
                        2
                    </div>
                </Grid.Item>
            </Grid>
        </div>
    ),
};
