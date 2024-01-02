import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { config } from "../../../auth";

export default async function ProtectedRoute({
    redirectUrl = "/",
    children,
}: {
    redirectUrl?: string;
    children: React.ReactNode;
}) {
    const session = await getServerSession(config);

    if (!session) {
        return redirect(redirectUrl);
    }

    return <>{children}</>;
}
