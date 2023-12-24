"use client";

import { getUser } from "@/services/userApi.service";
import { useEffect, useState } from "react";

const UserInfo = ({ username }: { username: string }) => {
    const [user, setUser] = useState<any>(); // TODO SWR

    useEffect(() => {
        getUser(username).then((user) => {
            setUser(user);
        });
    }, [username]);

    return <div>{user?.email}</div>;
};

export default UserInfo;
