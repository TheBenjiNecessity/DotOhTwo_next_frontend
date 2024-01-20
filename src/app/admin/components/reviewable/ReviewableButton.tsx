import { Reviewable } from "@/models/reviewable.model";

type ReviewableButtonProps = {
    reviewable: Reviewable;
};

export const ReviewableButton = ({ reviewable }: ReviewableButtonProps) => (
    <form className="w-full">
        <input type="hidden" name="id" value={reviewable.id?.toString()} />
        <button
            type="submit"
            className="my-2 p-2 border border-black bg-white w-full mt-1"
        >
            {reviewable.info["title"]["en"]}
        </button>
    </form>
);
