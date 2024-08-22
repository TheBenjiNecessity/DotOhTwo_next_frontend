import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Typography } from "../Typography/Typography";
import { DateTime } from "luxon";

interface DateLabelProps
    extends DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        React.AriaAttributes {
    format?: string;
    date?: Date;
}

export const DateLabel = ({
    date,
    format = "MMMM dd, yyyy",
}: DateLabelProps) => {
    // TODO move to date constants
    if (!date) {
        return null;
    }

    const dateTime = DateTime.fromJSDate(date);

    return <Typography variant="body1">{dateTime.toFormat(format)}</Typography>;
};
