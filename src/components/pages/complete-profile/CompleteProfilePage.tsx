"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
    CompleteProfile,
    CompleteProfileFormValues,
} from "@/stories/pages/CompleteProfile/CompleteProfile";
import { onFormAction } from "./formAction";
import { User } from "@/models/user.model";

const initialState = {
    username: "",
    email: "",
};

const CompleteProfilePage = ({ user }: { user: User }) => {
    const defaultValues = {
        username: user.username,
        email: "",
    };
    const form = useForm<CompleteProfileFormValues>({
        defaultValues,
    });

    return (
        <CompleteProfile
            form={form}
            formAction={onFormAction}
            initialState={defaultValues}
        />
    );
};

export default CompleteProfilePage;
