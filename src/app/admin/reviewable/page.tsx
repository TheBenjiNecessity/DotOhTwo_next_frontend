import {
    ReviewableDTO,
    createDTOFromReviewable,
} from "@/models/dtos/reviewable.dto";
import { Reviewable } from "@/models/reviewable.model";
import {
    createReviewable,
    getReviewable,
    updateReviewable,
} from "@/services/apis/server/reviewable.service";
import _ from "lodash";
import { redirect } from "next/navigation";
import { Form } from "../components/form/Form";
import { FORM_NAMES, ROWS } from "./contants";
import { getString } from "../utils/form.utils";

export default async function Page({ searchParams }: { searchParams: any }) {
    const id = parseInt(searchParams.id);
    const reviewableId = !isNaN(id) ? id : undefined;

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
        <Form
            action={create}
            submitButtonText={
                reviewableId ? "Update Reviewable" : "Create Reviewable"
            }
            rows={ROWS}
            data={reviewable}
        />
    );
}
