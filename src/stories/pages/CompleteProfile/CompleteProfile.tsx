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
import { FieldValues, UseFormReturn } from "react-hook-form";
import { Button } from "../../components/Button/Button";

interface CompleteProfileProps {
    form: UseFormReturn<FieldValues, any, undefined>;
}

export const CompleteProfile = ({ form }: CompleteProfileProps) => {
    return (
        <section className="flex justify-center items-center w-full h-full">
            <Card width={CARD_WIDTH.MEDIUM}>
                <Card.Header centered>Complete Profile</Card.Header>
                <Card.Body>
                <Form {...form}>
                    <FormField
                        control={form.control}
                        name="username"
                        render={() => (
                            <FormItem>
                                    <FormLabel htmlFor="name">
                                        User name
                                    </FormLabel>
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
                </Card.Body>
                <Card.Footer>
                    <div className="flex justify-center items-center w-full">
                        <div className="flex-grow"></div>
                        <div className="flex-shrink">
                            <Button primary>Submit</Button>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </section>
    );
};
