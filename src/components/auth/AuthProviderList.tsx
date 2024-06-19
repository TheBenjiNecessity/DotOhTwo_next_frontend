import { PROVIDERS_LIST } from "@/constants/auth.constants";
import AuthProviderButton from "./AuthProviderButton";

export default async function AuthProviderList() {
    return (
        <>
            {Object.values(PROVIDERS_LIST || []).map((providerId, index) => (
                <div
                    key={providerId}
                    className={index !== 0 ? "mt-1" : undefined}
                >
                    <AuthProviderButton providerId={providerId} />
                </div>
            ))}
        </>
    );
}
