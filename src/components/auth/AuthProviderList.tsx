import { getProviders } from "next-auth/react";
import AuthProviderButton from "./AuthProviderButton";
import { Stack } from "@/stories/components/Stack/Stack";

export default async function AuthProviderList() {
    const providers = await getProviders();

    return (
        <>
            {Object.values(providers || []).map((provider, index) => (
                <div key={index} className={index !== 0 ? "mt-1" : undefined}>
                    <AuthProviderButton provider={provider} />
                </div>
            ))}
        </>
    );
}
