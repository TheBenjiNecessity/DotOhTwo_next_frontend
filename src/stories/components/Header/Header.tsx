import React, { ReactNode } from "react";
import "../../../app/globals.css";
import Stack from "../Stack/Stack";
import { Flexbox } from "../Flexbox/Flexbox";

type User = {
    name: string;
};

interface HeaderUserMessageProps {
    user?: User;
}

interface HeaderProps {
    children?: ReactNode;
}

export const HeaderBranding = () => (
    <Stack direction="row" spacing={1} alignItems="center">
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path
                    d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                    fill="#FFF"
                />
                <path
                    d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                    fill="#555AB9"
                />
                <path
                    d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                    fill="#91BAF8"
                />
            </g>
        </svg>
        <h1 className="font-bold">Dot Oh Two</h1>
    </Stack>
);

export const HeaderUserMessage = ({ user }: HeaderUserMessageProps) => {
    if (!user) return null;

    return (
        <span className="text-gray-800 text-sm">
            Welcome, <b className="text-black">{user.name}</b>!
        </span>
    );
};

export const Header = ({ children }: HeaderProps) => (
    <header>
        <div className="border-b border-black border-solid px-2 py-1">
            <Flexbox direction="row" alignItems="center">
                <Flexbox
                    flexShrink={1}
                    justifyContent="flex-start"
                    direction="row"
                    alignItems="center"
                >
                    <HeaderBranding />
                </Flexbox>
                <Flexbox
                    flexGrow={1}
                    justifyContent="flex-end"
                    direction="row"
                    alignItems="center"
                >
                    {children}
                </Flexbox>
            </Flexbox>
        </div>
    </header>
);
