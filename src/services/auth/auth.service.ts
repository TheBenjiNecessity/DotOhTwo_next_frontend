import { cookies } from "next/headers";

export function isLoggedIn() {
    const cookieStore = cookies();
    const JSSESSION = cookieStore.get("SESSION");

    return !!JSSESSION;
}
