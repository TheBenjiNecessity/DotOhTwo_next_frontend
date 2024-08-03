import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { isLoggedIn } from "@/services/auth/auth.service";

interface LoggedInAreaProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {}

const LoggedInArea: React.FC<LoggedInAreaProps> = ({ children }) => {
    if (isLoggedIn()) {
        return children;
    }

    return null;
};

export default LoggedInArea;
