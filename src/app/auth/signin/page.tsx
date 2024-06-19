import AuthProviderButton from "@/components/auth/AuthProviderButton";
import UnProtectedRoute from "@/components/auth/UnProtectedRoute";

const PROVIDERS = {
    GOOGLE_ID: "google",
    GITHUB_ID: "github",
    FACEBOOK_ID: "facebook",
    EMAIL_ID: "email",
};

export default async function SignIn() {
    const providers = [
        //PROVIDERS.GOOGLE_ID,
        PROVIDERS.GITHUB_ID,
        //PROVIDERS.FACEBOOK_ID,
        //PROVIDERS.EMAIL_ID,
    ];

    return (
        <UnProtectedRoute>
            {Object.values(providers || []).map((providerId) => (
                <AuthProviderButton key={providerId} providerId={providerId} />
            ))}
        </UnProtectedRoute>
    );
}
