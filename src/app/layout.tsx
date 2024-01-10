import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/stories/components/Header/Header";
import { getServerUser } from "@/services/userApi.service";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dot Oh Two",
    description: "Review site",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
