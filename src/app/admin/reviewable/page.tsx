import {
    ReviewableDTO,
    createDTOFromReviewable,
} from "@/models/dtos/reviewable.dto";
import { Reviewable } from "@/models/reviewable.model";
import {
    createReviewable,
    getReviewable,
    searchReviewables,
    updateReviewable,
} from "@/services/apis/server/reviewable.service";
import _ from "lodash";
import { redirect } from "next/navigation";
import { Form } from "../components/form/Form";
import { FORM_NAMES, ROWS } from "./contants";
import { getString } from "../utils/form.utils";
import { FormLabel } from "../components/form/FormLabel";
import { SubmitButton } from "@/components/form/SubmitButton";
import { ReviewableList } from "../components/reviewable/ReviewableList";

type SearchParams = {
    id: string;
    search: string;
};

type Props = {
    searchParams: SearchParams;
};

export default async function Page({ searchParams }: Props) {
    const { id, search } = searchParams;
    const rId = parseInt(id);
    const reviewableId = !isNaN(rId) ? rId : undefined;
    let reviewablesList: Array<Reviewable> = [];

    let reviewable: Reviewable = {
        id: reviewableId,
        type: "",
        title: "",
        description: "",
        content: {},
        info: {},
        statistics: {},
    };

    if (reviewableId) {
        const reviewableDTO = await getReviewable(reviewableId);

        reviewable = {
            id: reviewableDTO.id,
            type: reviewableDTO.type,
            title: reviewableDTO.title,
            description: reviewableDTO.description,
            content: reviewableDTO.content,
            info: reviewableDTO.info,
            statistics: reviewableDTO.statistics,
        };
    }

    if (search) {
        const data = await searchReviewables(search);
        reviewablesList = data.map((datum: any) => ({
            id: datum.id,
            type: datum.type,
            title: datum.title,
            description: datum.description,
            content: datum.content,
            info: datum.info,
            statistics: datum.statistics,
        }));
    }

    async function create(formData: FormData) {
        "use server";

        const dtoReviewable: ReviewableDTO = createDTOFromReviewable({
            type: getString(formData, FORM_NAMES.TYPE),
            title: getString(formData, FORM_NAMES.TITLE),
            description: getString(formData, FORM_NAMES.DESCRIPTION),
            content: JSON.parse(
                getString(formData, FORM_NAMES.CONTENT) || "{}"
            ),
            info: JSON.parse(getString(formData, FORM_NAMES.INFO) || "{}"),
            statistics: JSON.parse(
                getString(formData, FORM_NAMES.STATISTICS) || "{}"
            ),
        });

        if (reviewableId) {
            await updateReviewable(reviewableId, dtoReviewable);
        } else {
            const newDTO = await createReviewable(dtoReviewable);
            redirect(`/admin/reviewable?id=${newDTO.id}`);
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
                    list="reviewables"
                    className="w-full"
                />
                <SubmitButton className="my-2 p-2 border border-black bg-white">
                    Search
                </SubmitButton>
            </form>

            <div>
                <ReviewableList reviewables={reviewablesList} />
            </div>

            <hr className="border border-black my-1 border-top-width-0" />

            <Form
                action={create}
                submitButtonText={
                    reviewableId ? "Update Reviewable" : "Create Reviewable"
                }
                rows={ROWS}
                data={reviewable}
            />
        </div>
    );
}
