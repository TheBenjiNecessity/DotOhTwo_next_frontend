import AuthProviderList from "@/components/auth/AuthProviderList";
import LoggedInArea from "@/components/auth/LoggedInArea";
import NotLoggedInArea from "@/components/auth/NotLoggedInArea";
import NavigationBar from "@/stories/components/NavigationBar/NavigationBar";
import Stack from "@/stories/components/Stack/Stack";
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
            <LoggedInArea>
                <NavigationBar>
                    <Stack fullWidth direction="row" spacing={2}>
                        <NavigationBar.Logo />
                        <NavigationBar.Input />
                        <NavigationBar.Button>Home</NavigationBar.Button>
                    </Stack>
                </NavigationBar>
            </LoggedInArea>
            <NotLoggedInArea>
                <LoginPage>
                    <AuthProviderList />
                </LoginPage>
            </NotLoggedInArea>
        </>
    );
}
