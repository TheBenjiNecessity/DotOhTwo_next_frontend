"use client";

import { signIn } from "next-auth/react";

export default function AuthProviderButton({ provider }: any) {
    return (
        <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
        </button>
    );
}

//http://localhost:8080/login/oauth2/code/github

// http://localhost:8080/login/oauth2/authorization/github
