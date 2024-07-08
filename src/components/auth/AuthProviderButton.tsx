import { SocialLoginButton } from "@/stories/components/SocialLoginButton/SocialLoginButton";
import Link from "next/link";

interface AuthProviderButtonProps {
    providerId: string;
}

export default function AuthProviderButton({
    providerId,
}: AuthProviderButtonProps) {
    const href = `${process.env.AUTH_PROVIDER_URL}/oauth2/authorization/${providerId}`;
    return (
        <Link href={href}>
            <SocialLoginButton providerId={providerId} />
        </Link>
    );
}
