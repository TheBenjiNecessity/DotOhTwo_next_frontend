import { getLoggedInUser } from "@/services/apis/server/user.service";
import { isLoggedIn } from "@/services/auth/auth.service";
import { redirect } from "next/navigation";

/**
 * A route component that only shows its content if the user is signed out.
 * Otherwise, the user is redirected.
 * @param redirectUrl {string} the url to redirect to if the user is signed in
 */
export default async function UnProtectedRoute({
    redirectToUser = true,
    redirectUrl = "/",
    children,
}: {
    redirectToUser?: boolean;
    redirectUrl?: string;
    children: React.ReactNode;
}) {
    if (isLoggedIn()) {
        // TODO get logged in user info (cached?)
        if (redirectToUser) {
            const user = await getLoggedInUser(); // This should be cached on login
            return redirect(`/${user.username}`);
        }

        return redirect(redirectUrl);
    }

    return <>{children}</>;
}
