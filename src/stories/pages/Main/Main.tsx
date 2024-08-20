import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface MainPageProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {}

export const MainPage = ({ children }: MainPageProps) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between md:p-24 h-full"></main>
    );
};
