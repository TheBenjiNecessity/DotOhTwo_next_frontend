import { SubmitButton } from "@/components/form/SubmitButton";
import { User } from "@/models/user.model";
import {
    createUser,
    getUser,
    updateUser,
} from "@/services/apis/server/user.service";
import { ROWS } from "./contants";
import { Form } from "../components/form/Form";
import { getString } from "../utils/form.utils";

export default async function Page({ searchParams }: { searchParams: any }) {
    let user: User = { username: "", email: "" };

    if (searchParams.username) {
        const userData = await getUser(searchParams.username);

        user = {
            ...userData,
        };
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
        <Form
            action={create}
            submitButtonText={
                searchParams.username ? "Update User" : "Create User"
            }
            rows={ROWS}
            data={user}
        />
    );
}
