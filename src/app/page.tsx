import AuthProviderList from "@/components/auth/AuthProviderList";
import UnProtectedRoute from "@/components/auth/UnProtectedRoute";
import { Logo } from "@/stories/components/Logo/Logo";

export default async function Home() {
    /**
     * TODO
     * show:
     *   branding
     *   sign up/sign in buttons
     *   bottom navigation
     *     about
     *     contact
     *     ...etc
     */

    return (
        <UnProtectedRoute>
            <main className="flex min-h-screen flex-col items-center justify-between md:p-24 h-full">
                <div
                    id="login-card"
                    className="flex flex-col w-full h-full md:w-[400px] md:w-[500px] bg-white text-black rounded shadow pb-2 pt-10 px-6 md:px-16"
                >
                    <div className="text-center mb-4">
                        <Logo size="large" />
                    </div>
                    <h1 className="w-full text-lg mb-4 pl-2">
                        Sign in with your social account
                    </h1>

                    <AuthProviderList />
                </div>
            </main>
        </UnProtectedRoute>
    );
}
