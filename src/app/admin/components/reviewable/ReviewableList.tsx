import { Reviewable } from "@/models/reviewable.model";
import { ReviewableButton } from "./ReviewableButton";

type ReviewableListProps = {
    reviewables: Array<Reviewable>;
};

export const ReviewableList = ({ reviewables }: ReviewableListProps) =>
    reviewables.map((reviewable: Reviewable, index: number) => (
        <ReviewableButton key={index} reviewable={reviewable} />
    ));
