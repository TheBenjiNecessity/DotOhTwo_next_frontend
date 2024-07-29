"use server";

import { CompleteProfileFormValues } from "@/stories/pages/CompleteProfile/CompleteProfile";

export async function onFormAction(
    prevState: CompleteProfileFormValues,
    formData: FormData
) {
    // console.log("onFormAction", prevState, formData);

    // console.log("username", formData.get("username"));
    // console.log("email", formData.get("email"));
    // Process the data
    return {
        username: "Form data processed",
        email: "",
    };
}
