import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { isLoggedIn } from "@/services/auth/auth.service";

interface NotLoggedInAreaProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        React.AriaAttributes {}

const NotLoggedInArea: React.FC<NotLoggedInAreaProps> = ({ children }) => {
    if (!isLoggedIn()) {
        return children;
    }

    return null;
};

export default NotLoggedInArea;
