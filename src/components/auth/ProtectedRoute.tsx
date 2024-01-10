import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { config } from "../../../auth";
import { getUser } from "@/services/apis/server/user.service";
import { getRolesArray } from "@/utils/user.utils";
import { arrayIncludesAnyFromArray } from "@/utils/array.utils";

export default async function ProtectedRoute({
    redirectUrl = "/",
    roles = [],
    children,
}: {
    redirectUrl?: string;
    roles?: Array<string>;
    children: React.ReactNode;
}) {
    const session = await getServerSession(config);

    if (!session) {
        return redirect(redirectUrl);
    }

    const data = await getUser(session.user.name);
    const user = await data.json();

    const userRolesArray = getRolesArray(user);
    if (roles.length && !arrayIncludesAnyFromArray(userRolesArray, roles)) {
        return redirect(redirectUrl);
    }

    return <>{children}</>;
}
