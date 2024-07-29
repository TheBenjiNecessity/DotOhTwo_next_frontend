"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
    CompleteProfile,
    CompleteProfileFormValues,
} from "@/stories/pages/CompleteProfile/CompleteProfile";
import { onFormAction } from "./formAction";

const initialState = {
    username: "user",
    email: "",
};

const CompleteProfilePage = () => {
    const form = useForm<CompleteProfileFormValues>({
        defaultValues: initialState,
    });

    return (
        <CompleteProfile
            form={form}
            formAction={onFormAction}
            initialState={initialState}
        />
    );
};

export default CompleteProfilePage;
