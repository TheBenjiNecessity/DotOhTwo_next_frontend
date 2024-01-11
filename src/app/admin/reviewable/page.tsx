import { SubmitButton } from "@/components/form/SubmitButton";
import { ReviewableDTO } from "@/models/dtos/reviewable.dto";
import { Reviewable } from "@/models/reviewable.model";
import {
    createReviewable,
    getReviewable,
    updateReviewable,
} from "@/services/apis/server/reviewable.service";

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

export default async function Page({ params }: { params: any }) {
    const reviewableId = params.slug[0];
    let reviewable: Reviewable = {
        id: "",
        type: "",
        title: "",
        description: "",
        content: {},
        info: {},
        statistics: {},
    };
    let isEditing = false;

    if (reviewableId) {
        const data = await getReviewable(reviewableId);

        if (data.status === 404) {
            throw new Error("Reviewable not found");
        } else {
            const reviewableDTO = await data.json();

            isEditing = true;

            reviewable = { ...reviewableDTO };
        }
    }

    async function create(formData: FormData) {
        "use server";

        function getString(formName: string): string {
            return formData.get(formName)?.valueOf().toString() || "";
        }

        const dtoReviewable: ReviewableDTO = {
            type: getString("type"),
            title: getString("title"),
            description: getString("description"),
            content: JSON.parse(getString("content") || "{}"),
            info: JSON.parse(getString("info") || "{}"),
            statistics: JSON.parse(getString("statistics") || "{}"),
        };

        const response = isEditing
            ? await updateReviewable(dtoReviewable)
            : await createReviewable(dtoReviewable);
        reviewable = await response.json();
    }

    return (
        <form className="w-full" action={create}>
            <table className="w-full">
                <tbody>
                    <tr>
                        <InputBlock
                            name="title"
                            label="Title"
                            defaultValue={reviewable.title}
                        />
                        <InputBlock
                            name="description"
                            label="Description"
                            defaultValue={reviewable.description}
                        />
                    </tr>
                    <tr>
                        <InputBlock
                            name="type"
                            label="Type"
                            defaultValue={reviewable.type}
                            required
                        />
                    </tr>
                    <tr>
                        <TextareaBlock
                            name="content"
                            label="Content"
                            defaultValue={JSON.stringify(reviewable.content)}
                        />
                    </tr>
                    <tr>
                        <TextareaBlock
                            name="info"
                            label="Info"
                            defaultValue={JSON.stringify(reviewable.info)}
                        />
                    </tr>
                    <tr>
                        <TextareaBlock
                            name="statistics"
                            label="Statistics"
                            defaultValue={JSON.stringify(reviewable.statistics)}
                        />
                    </tr>
                </tbody>
            </table>
            <SubmitButton className="my-2 p-2 border border-black bg-white">
                {isEditing ? "Update Reviewable" : "Create Reviewable"}
            </SubmitButton>
        </form>
    );
}
