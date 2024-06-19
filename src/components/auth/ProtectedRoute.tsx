import { redirect } from "next/navigation";
import { getLoggedInUser } from "@/services/apis/server/user.service";
import { getRolesArray } from "@/utils/user.utils";
import { arrayIncludesAnyFromArray } from "@/utils/array.utils";
import { isLoggedIn } from "@/services/auth/auth.service";
import { UserDTO } from "@/models/dtos/user.dto";

export default async function ProtectedRoute({
    redirectUrl = "/",
    roles = [],
    children,
}: {
    redirectUrl?: string;
    roles?: Array<string>;
    children: React.ReactNode;
}) {
    if (!isLoggedIn()) {
        return redirect(redirectUrl);
    }

    if (!roles.length) {
        return <>{children}</>;
    }

    const user: UserDTO = await getLoggedInUser();
    const userRolesArray = getRolesArray(user);
    if (!arrayIncludesAnyFromArray(userRolesArray, roles)) {
        return redirect(redirectUrl);
    }

    return <>{children}</>;
}
