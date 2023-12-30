import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import AuthProviderButton from "@/components/AuthProviderButton";
import { redirect } from "next/navigation";
import { config } from "../../../../auth";

export default async function SignIn() {
    const session = await getServerSession(config);

    // If the user is already logged in, redirect.
    if (session) {
        return redirect("/");
    }

    const providers = await getProviders();

    console.log("providers", providers);

    return (
        <>
            {Object.values(providers || []).map((provider) => (
                <AuthProviderButton key={provider.id} provider={provider} />
            ))}
        </>
    );
}
