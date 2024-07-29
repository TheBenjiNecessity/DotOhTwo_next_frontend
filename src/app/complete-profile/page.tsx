import ProtectedRoute from "@/components/auth/ProtectedRoute";
import CompleteProfilePage from "@/components/pages/complete-profile/CompleteProfilePage";

export default async function Page() {
    return (
        <ProtectedRoute shouldCompleteProfile={false}>
            <CompleteProfilePage />
        </ProtectedRoute>
    );
}
