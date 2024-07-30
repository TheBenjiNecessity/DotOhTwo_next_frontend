"use server";

import { z } from "zod";
import { CompleteProfileFormValues } from "@/stories/pages/CompleteProfile/CompleteProfile";

const schema = z.object({
    username: z.string().min(3, { message: "Username is too short" }),
    email: z.string().email({ message: "Invalid email" }),
});

export async function onFormAction(
    prevState: CompleteProfileFormValues,
    formData: FormData
) {
    // Process the data
    const validatedFields = schema.safeParse({
        username: formData.get("username"),
        email: formData.get("email"),
    });

    // Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    // TODO - send the data to the server

    return {
        errors: null,
    };
}
