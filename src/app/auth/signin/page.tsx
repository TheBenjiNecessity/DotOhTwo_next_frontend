import { getProviders } from "next-auth/react";
import AuthProviderButton from "@/components/auth/AuthProviderButton";
import UnProtectedRoute from "@/components/auth/UnProtectedRoute";

export default async function SignIn() {
    const providers = await getProviders();

    return (
        <UnProtectedRoute>
            {Object.values(providers || []).map((provider) => (
                <AuthProviderButton key={provider.id} provider={provider} />
            ))}
        </UnProtectedRoute>
    );
}
