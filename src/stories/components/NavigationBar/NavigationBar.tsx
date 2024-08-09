import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { Input } from "./Input";

interface NavigationBarProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {}

/**
 *
 * @param primary {boolean} shows primary coloring when true, otherwise shows secondary
 * @returns
 */
const NavigationBar = ({ children }: NavigationBarProps) => {
    return (
        <nav className="w-full border-b bg-blue-200 p-2 flex">{children}</nav>
    );
};

NavigationBar.Button = Button;
NavigationBar.Logo = Logo;
NavigationBar.Input = Input;

export default NavigationBar;
