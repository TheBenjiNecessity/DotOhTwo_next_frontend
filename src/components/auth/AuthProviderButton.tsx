"use client";

import { SocialLoginButton } from "@/stories/components/SocialLoginButton/SocialLoginButton";
import { signIn } from "next-auth/react";

export default function AuthProviderButton({ provider }: any) {
    return (
        <SocialLoginButton
            providerId={provider.id}
            onClick={() => signIn(provider.id)}
        />
    );
}
