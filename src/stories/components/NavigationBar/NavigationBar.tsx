import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { Input } from "./Input";
import Dropdown from "./Dropdown"; // TODO other components should also be default

interface NavigationBarProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {}

const NavigationBar = ({ children }: NavigationBarProps) => {
    return (
        <nav className="w-full border-b bg-blue-200 p-2 flex">{children}</nav>
    );
};

NavigationBar.Button = Button;
NavigationBar.Logo = Logo;
NavigationBar.Input = Input;
NavigationBar.Dropdown = Dropdown;

export default NavigationBar;
