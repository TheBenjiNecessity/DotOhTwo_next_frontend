import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/stories/Header";
import { getServerUser } from "@/services/userApi.service";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    let user = null;

    try {
        user = await getServerUser();
    } catch (error) {
        console.log("error", error);
    }

    function onLoginClick() {}

    function onLogoutClick() {}

    function onCreateAccountClick() {}

    return (
        <html lang="en">
            <body className={inter.className}>
                <Header
                    user={user}
                    onLogin={onLoginClick}
                    onLogout={onLogoutClick}
                    onCreateAccount={onCreateAccountClick}
                />
                {children}
            </body>
        </html>
    );
}
