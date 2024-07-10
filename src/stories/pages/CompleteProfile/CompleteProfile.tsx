import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "../../components/Form/Form";
import Card from "../../components/Card/Card";
import React from "react";
import Input from "../../components/Input/Input";
import { FieldValues, UseFormReturn } from "react-hook-form";

interface CompleteProfileProps {
    form: UseFormReturn<FieldValues, any, undefined>;
}

export const CompleteProfile = ({ form }: CompleteProfileProps) => {
    return (
        <section>
            <Card>
                <Card.Header>Complete Profile</Card.Header>
                <Form {...form}>
                    <FormField
                        control={form.control}
                        name="username"
                        render={() => (
                            <FormItem>
                                <FormLabel htmlFor="name">User name</FormLabel>
                                <FormControl>
                                    <Input placeholder="User Name" />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={() => (
                            <FormItem>
                                <FormLabel htmlFor="name">Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </Form>
            </Card>
        </section>
    );
};
