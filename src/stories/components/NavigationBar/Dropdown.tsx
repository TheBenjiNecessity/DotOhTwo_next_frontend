import React, { PropsWithChildren, ReactNode } from "react";
import "../../../app/globals.css";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../Dropdown/Dropdown";

interface DropdownProps extends PropsWithChildren {
    button?: ReactNode;
}

const Dropdown = ({ button, children }: DropdownProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div>{button}</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>{children}</DropdownMenuContent>
        </DropdownMenu>
    );
};

Dropdown.Item = DropdownMenuItem;

export default Dropdown;
