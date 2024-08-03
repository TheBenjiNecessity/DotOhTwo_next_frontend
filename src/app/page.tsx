import AuthProviderList from "@/components/auth/AuthProviderList";
import LoggedInArea from "@/components/auth/LoggedInArea";
import NotLoggedInArea from "@/components/auth/NotLoggedInArea";
import UnProtectedRoute from "@/components/auth/UnProtectedRoute";
import { Logo } from "@/stories/components/Logo/Logo";
import { LoginPage } from "@/stories/pages/Login/Login";

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
        <>
            <LoggedInArea>user</LoggedInArea>
            <NotLoggedInArea>
                <LoginPage>
                    <AuthProviderList />
                </LoginPage>
            </NotLoggedInArea>
        </>
    );
}
