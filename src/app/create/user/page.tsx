import { SubmitButton } from "@/components/form/SubmitButton";
import { User } from "@/models/user.model";
import {
    createServerUser,
    getServerUser,
    updateServerUser,
} from "@/services/userApi.service";

const InputBlock = ({
    name,
    label,
    defaultValue = "",
    disabled = false,
    required = false,
}: {
    name: string;
    label: string;
    defaultValue?: string | undefined;
    disabled?: boolean;
    required?: boolean;
}) => (
    <td className="px-2 py-1">
        <div>
            <label htmlFor={name}>
                {label} {required ? "*" : ""}:
            </label>
        </div>
        <div>
            <input
                type="text"
                name={name}
                defaultValue={defaultValue}
                disabled={disabled}
            />
        </div>
    </td>
);

const TextareaBlock = ({
    name,
    label,
    defaultValue,
}: {
    name: string;
    label: string;
    defaultValue?: string | undefined;
}) => (
    <td className="px-2 py-1" colSpan={2}>
        <div>
            <label htmlFor={name}>{label}:</label>
        </div>
        <div>
            <textarea
                name={name}
                rows={4}
                className="w-full"
                defaultValue={defaultValue}
            />
        </div>
    </td>
);

export default async function Page({ searchParams }: { searchParams: any }) {
    let user: User = { username: "", email: "" };
    let isEditing = false;

    if (searchParams.username) {
        const data = await getServerUser(searchParams.username);
        const userData = await data.json();

        if (userData) {
            isEditing = true;

            user = {
                ...userData,
            };
        }
    }

    async function create(formData: FormData) {
        "use server";

        function getString(formName: string): string {
            return formData.get(formName)?.valueOf().toString() || "";
        }

        const rawFormData = {
            username: isEditing ? searchParams.username : getString("username"),
            dob: getString("dob"),
            email: getString("email"),
            phone: getString("phone"),
            roles: getString("roles"),
            content: JSON.parse(getString("content") || "{}"),
            settings: JSON.parse(getString("settings") || "{}"),
            preferences: JSON.parse(getString("preferences") || "{}"),
            statistics: JSON.parse(getString("statistics") || "{}"),
        };

        const dtoUser = {
            ...rawFormData,
            DOB: new Date(rawFormData.dob),
        };

        const response = isEditing
            ? await updateServerUser(dtoUser)
            : await createServerUser(dtoUser);
        const daoUser = await response.json();
    }

    const userDate = user?.DOB
        ? new Date(user?.DOB).toISOString()
        : new Date().toISOString();
    return (
        <form className="w-full" action={create}>
            <table className="w-full">
                <tbody>
                    <tr>
                        <InputBlock
                            name="username"
                            label="Username"
                            defaultValue={user.username}
                            disabled={isEditing}
                            required
                        />
                        <InputBlock
                            name="dob"
                            label="Date of Birth"
                            defaultValue={userDate}
                        />
                    </tr>
                    <tr>
                        <InputBlock
                            name="email"
                            label="Email"
                            required
                            defaultValue={user.email}
                        />
                        <InputBlock
                            name="phone"
                            label="Phone"
                            defaultValue={user.phone}
                        />
                    </tr>
                    <tr>
                        <InputBlock
                            name="roles"
                            label="Roles"
                            defaultValue={user.roles}
                        />
                    </tr>
                    <tr>
                        <TextareaBlock
                            name="content"
                            label="Content"
                            defaultValue={JSON.stringify(user.content)}
                        />
                    </tr>
                    <tr>
                        <TextareaBlock
                            name="settings"
                            label="Settings"
                            defaultValue={JSON.stringify(user.settings)}
                        />
                    </tr>
                    <tr>
                        <TextareaBlock
                            name="preferences"
                            label="Preferences"
                            defaultValue={JSON.stringify(user.preferences)}
                        />
                    </tr>
                    <tr>
                        <TextareaBlock
                            name="statistics"
                            label="Statistics"
                            defaultValue={JSON.stringify(user.statistics)}
                        />
                    </tr>
                </tbody>
            </table>
            <SubmitButton className="my-2 p-2 border border-black bg-white">
                {isEditing ? "Update User" : "Create User"}
            </SubmitButton>
        </form>
    );
}
