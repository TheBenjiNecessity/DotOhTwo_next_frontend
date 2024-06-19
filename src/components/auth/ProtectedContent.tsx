import { isLoggedIn } from "@/services/auth/auth.service";

export default async function ProtectedContent({
    fallback,
    children,
}: {
    fallback: React.ReactNode;
    children: React.ReactNode;
}) {
    if (!isLoggedIn()) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
}
