import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "../../components/Form/Form";
import Card, { CARD_WIDTH } from "../../components/Card/Card";
import React from "react";
import Input from "../../components/Input/Input";
import { UseFormReturn } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { CARD_ACTIONS_ALIGN } from "../../components/Card/Actions";
import { Typography } from "../../components/Typography/Typography";
import { useFormState } from "react-dom";

export interface CompleteProfileFormValues {
    username: string;
    email: string;
}

interface CompleteProfileProps {
    form: UseFormReturn<CompleteProfileFormValues, any, undefined>;
    formAction: (
        prevState: CompleteProfileFormValues,
        formData: FormData
    ) => any;
    initialState: CompleteProfileFormValues;
}

export const CompleteProfile = ({
    form,
    formAction,
    initialState,
}: CompleteProfileProps) => {
    const [state, action] = useFormState(formAction, initialState);

    return (
        <main className="flex justify-center items-center w-full h-full">
            <Card width={CARD_WIDTH.MEDIUM}>
                <Form {...form}>
                    <form action={action}>
                        <Card.Header centered>
                            <Typography variant="h3">
                                Complete Profile
                            </Typography>
                        </Card.Header>
                        <Card.Body>
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="username">
                                            User name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="User Name"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="email">
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </Card.Body>
                        <Card.Footer>
                            <Card.Actions align={CARD_ACTIONS_ALIGN.RIGHT}>
                                <Button type="submit" primary>
                                    Submit
                                </Button>
                            </Card.Actions>
                        </Card.Footer>
                    </form>
                </Form>
            </Card>
        </main>
    );
};
