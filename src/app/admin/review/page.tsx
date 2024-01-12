import { ROWS } from "./contants";
import { Form } from "../components/form/Form";
import { getString } from "../utils/form.utils";
import { Review, createReviewFromDTO } from "@/models/review.model";
import {
    createReview,
    getReview,
    updateReview,
} from "@/services/apis/server/review.service";
import { ReviewDTO } from "@/models/dtos/review.dto";

export default async function Page({ searchParams }: { searchParams: any }) {
    const id = parseInt(searchParams.id);
    const reviewId = !isNaN(id) ? id : undefined;
    let review: Review = {
        id: reviewId,
        comment: "",
        rating: -1,
        created: new Date(),

        content: {},
        info: {},

        user_id: -1,
        reviewable_id: -1,
    };

    if (reviewId) {
        const reviewDTO = await getReview(reviewId);
        review = createReviewFromDTO(reviewDTO);
    }

    async function create(formData: FormData) {
        "use server";

        const rawFormData = {
            comment: getString(formData, "comment"),
            rating: parseInt(getString(formData, "rating")),
            content: JSON.parse(getString(formData, "content") || "{}"),
            info: JSON.parse(getString(formData, "info") || "{}"),

            user_id: parseInt(getString(formData, "user_id")),
            reviewable_id: parseInt(getString(formData, "reviewable_id")),
        };

        const reviewDTO: ReviewDTO = {
            ...rawFormData,
        };

        if (reviewId) {
            await updateReview(reviewId, reviewDTO);
        } else {
            await createReview(reviewDTO);
        }
    }

    return (
        <Form
            action={create}
            submitButtonText={reviewId ? "Update Review" : "Create Review"}
            rows={ROWS}
            data={review}
        />
    );
}
