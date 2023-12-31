import { getServerSession } from "next-auth";
import { config } from "../../../auth";

export default async function ProtectedContent({
    fallback,
    children,
}: {
    fallback: React.ReactNode;
    children: React.ReactNode;
}) {
    const session = await getServerSession(config);

    if (!session) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
}
