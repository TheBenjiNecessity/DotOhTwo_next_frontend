import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { config } from "../../auth";

export default async function ProtectedRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(config);

    if (!session) {
        return redirect("/auth/signin"); // TODO get from central source
    }

    return <>{children}</>;
}
