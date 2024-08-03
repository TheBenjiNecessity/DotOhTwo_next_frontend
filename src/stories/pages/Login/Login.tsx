import Card, { CARD_WIDTH } from "../../components/Card/Card";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Logo } from "../../components/Logo/Logo";

interface LoginPageProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {}

export const LoginPage = ({ children }: LoginPageProps) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between md:p-24 h-full">
            <Card width={CARD_WIDTH.MEDIUM}>
                <div className="text-center mb-4">
                    <Logo size="large" />
                </div>
                <h1 className="w-full text-lg mb-4 pl-2">
                    Sign in with your social account
                </h1>

                {children}
            </Card>
        </main>
    );
};
