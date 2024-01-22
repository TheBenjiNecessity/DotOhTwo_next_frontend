import { getProviders } from "next-auth/react";
import AuthProviderButton from "./AuthProviderButton";
import { Stack } from "@/stories/components/Stack/Stack";

export default async function AuthProviderList() {
    const providers = await getProviders();

    return (
        <Stack spacing={1}>
            {Object.values(providers || []).map((provider, index) => (
                <AuthProviderButton key={index} provider={provider} />
            ))}
        </Stack>
    );
}
