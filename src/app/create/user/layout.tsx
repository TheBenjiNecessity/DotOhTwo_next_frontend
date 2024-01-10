import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { ReactNode } from "react";

export default async function Page({ children }: { children: ReactNode }) {
    return (
        <ProtectedRoute roles={["ADMIN"]}>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    {children}
                </div>
            </main>
        </ProtectedRoute>
    );
}
