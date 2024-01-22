import ProtectedContent from "@/components/auth/ProtectedContent";
import UnProtectedRoute from "@/components/auth/UnProtectedRoute";
import Image from "next/image";

export default function Home() {
    return (
        <UnProtectedRoute>
            <main className="flex min-h-screen flex-col items-center justify-between p-24 h-full">
                <div className="w-full">
                    <div className="inline-block w-full md:w-1/2">
                        <h1>Dot Oh Two</h1>
                    </div>
                    <div className="inline-block w-full md:w-1/2">
                        <AuthProviderList />
                    </div>
                </div>
            </main>
        </UnProtectedRoute>
    );
}
