import type { Meta, StoryObj } from "@storybook/react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./Dropdown";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "../Button/Button";

const Component = (props: any) => {
    const onOpenChange = (open: boolean) => {
        console.log("onOpenChange", open);
    };

    const onSelect = (event: any) => {
        console.log("onSelect", event);
    };

    return (
        <DropdownMenu
            onOpenChange={onOpenChange}
            // defaultOpen={true}
            // open={}
            // modal={}
        >
            <DropdownMenuTrigger asChild>
                <div>
                    <Button>Open</Button>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={onSelect}>Profile</DropdownMenuItem>
                <DropdownMenuItem onSelect={onSelect}>Billing</DropdownMenuItem>
                <DropdownMenuItem onSelect={onSelect}>Team</DropdownMenuItem>
                <DropdownMenuItem onSelect={onSelect}>
                    Subscription
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Example/Dropdown",
    component: DropdownMenu,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        //backgroundColor: { control: "color" },
    },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    render: (args) => <Component {...args} />,
};
