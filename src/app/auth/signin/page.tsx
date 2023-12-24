import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import AuthProviderButton from "@/components/AuthProviderButton";
import { redirect } from "next/navigation";

export default async function SignIn() {
    const session = await getServerSession(authOptions);

    // session: {
    //     user: {
    //         name: 'username',
    //         email: 'test@test.com',
    //         image: 'url'
    //     }
    // }

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
