import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { config } from "../../../auth";

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
    const session = await getServerSession(config);

    if (session) {
        if (redirectToUser) {
            return redirect(`/${session.user.name}`);
        }

        return redirect(redirectUrl);
    }

    return <>{children}</>;
}
