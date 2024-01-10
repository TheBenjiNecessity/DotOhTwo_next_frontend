"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton({
    className,
    children,
}: {
    className: string;
    children: ReactNode;
}) {
    const { pending } = useFormStatus();

    return (
        <button type="submit" className={className} aria-disabled={pending}>
            {pending ? "Loading..." : children}
        </button>
    );
}
