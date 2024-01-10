import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { createUser, getUser } from "@/services/apis/server/user.service";
import { getServerSession } from "next-auth";
import { config } from "../../../auth";
import { User } from "@/models/user.model";

export default async function Page({ params }: { params: any }) {
    let userNameSlug = params.slug[0];
    let user = null;

    const data = await getUser(userNameSlug);

    if (data.status >= 200 && data.status < 300) {
        user = await data.json();
    } else if (data.status === 404) {
        // if we got to the user page with a username that matches the username that is logged in (the current user matches the user route)
        // and that user does not exist in the data base since we got a 404 then create that user in the database.
        const session = await getServerSession(config);

        if (session.user.name === userNameSlug) {
            const newUser: User = {
                username: session.user.name,
                email: session.user.email,
            };

            const createdData = await createUser(newUser);

            if (createdData.status >= 200 && createdData.status < 300) {
                user = await createdData.json();
            } else {
                // what happens if user creation fails? (BE failure/user already exists (would not be able to get here?))
                // what if someone tries to create and account using one auth provider but logs in using another with same email?
                // what if a user is able to create an account with a username that already exists? Should be based on EMAIL and username.
                // show error page?
                // could this be put into a different component?
            }
        }
    } else {
        // TODO retrieving user failed... go to error page? show error info?
    }

    return (
        <ProtectedRoute>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        User Page
                    </p>
                    {user?.email}
                </div>
            </main>
        </ProtectedRoute>
    );
}
