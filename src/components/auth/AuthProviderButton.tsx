import { SocialLoginButton } from "@/stories/components/SocialLoginButton/SocialLoginButton";
import Link from "next/link";

interface AuthProviderButtonProps {
    providerId: string;
}

export default function AuthProviderButton({
    providerId,
}: AuthProviderButtonProps) {
    return (
        <Link
            href={`${process.env.AUTH_PROVIDER_URL}/oauth2/authorization/${providerId}`}
        >
            <SocialLoginButton providerId={providerId} />
        </Link>
    );
}
