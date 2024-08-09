import ProtectedRoute from "@/components/auth/ProtectedRoute";
import CompleteProfilePage from "@/components/pages/complete-profile/CompleteProfilePage";
import { getUserFromDTO, UserDTO } from "@/models/dtos/user.dto";
import { getLoggedInUser } from "@/services/apis/server/user.service";

export default async function Page() {
    const userDTO: UserDTO = await getLoggedInUser().then((res) => res.data);
    const user = getUserFromDTO(userDTO);

    return (
        <ProtectedRoute shouldCompleteProfile={false}>
            <CompleteProfilePage user={user} />
        </ProtectedRoute>
    );
}
