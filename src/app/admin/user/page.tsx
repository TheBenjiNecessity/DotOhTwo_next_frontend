import { User } from "@/models/user.model";
import {
    createUser,
    getUser,
    searchUsers,
    updateUser,
} from "@/services/apis/server/user.service";
import { ROWS } from "./contants";
import { Form } from "../components/form/Form";
import { getString } from "../utils/form.utils";
import { FormLabel } from "../components/form/FormLabel";
import { SubmitButton } from "@/components/form/SubmitButton";
import { UserList } from "../components/user/UserList";

type SearchParams = {
    username: string;
    search: string;
};

type Props = {
    searchParams: SearchParams;
};

export default async function Page({ searchParams }: { searchParams: any }) {
    const { username, search } = searchParams;
    let usersList: Array<User> = [];
    let user: User = { username: "", email: "" };

    if (username) {
        const userData = await getUser(username);

        user = {
            ...userData,
        };
    }

    if (search) {
        const data = await searchUsers(search);
        usersList = data.map((datum: any) => ({
            id: datum.id,
            username: datum.username,
            email: datum.email,
            phone: datum.phone,
            DOB: datum.DOB,
            roles: datum.roles,
            content: datum.content,
            settings: datum.settings,
            preferences: datum.preferences,
            statistics: datum.statistics,
        }));
    }

    async function create(formData: FormData) {
        "use server";

        const rawFormData = {
            username: searchParams.username
                ? searchParams.username
                : getString(formData, "username"),
            DOB: getString(formData, "DOB"),
            email: getString(formData, "email"),
            phone: getString(formData, "phone"),
            roles: getString(formData, "roles"),
            content: JSON.parse(getString(formData, "content") || "{}"),
            settings: JSON.parse(getString(formData, "settings") || "{}"),
            preferences: JSON.parse(getString(formData, "preferences") || "{}"),
            statistics: JSON.parse(getString(formData, "statistics") || "{}"),
        };

        const dtoUser = {
            ...rawFormData,
            DOB: new Date(rawFormData.DOB),
        };

        if (searchParams.username) {
            await updateUser(dtoUser);
        } else {
            await createUser(dtoUser);
        }
    }

    return (
        <div>
            <form className="w-full">
                <FormLabel name="search">Search</FormLabel>
                <input
                    type="text"
                    id="search"
                    name="search"
                    list="users"
                    className="w-full"
                />
                <SubmitButton className="my-2 p-2 border border-black bg-white">
                    Search
                </SubmitButton>
            </form>

            <div>
                <UserList users={usersList} />
            </div>

            <hr className="border border-black my-1 border-top-width-0" />
            <Form
                action={create}
                submitButtonText={
                    searchParams.username ? "Update User" : "Create User"
                }
                rows={ROWS}
                data={user}
            />
        </div>
    );
}
