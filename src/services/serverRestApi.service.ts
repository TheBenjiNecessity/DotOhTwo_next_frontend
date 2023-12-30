import { getServerSession } from "next-auth";
import { config } from "../../auth";
import jwt, { Secret } from "jsonwebtoken";

async function getSignedToken() {
    const serverSession = await getServerSession(config);

    if (serverSession?.token !== null) {
        return jwt.sign(
            serverSession.token,
            process.env.AUTH_SECRET as Secret,
            {
                algorithm: "HS256",
            }
        );
    }

    return null;
}

async function request(
    urlString: string,
    method = "GET",
    headers = {},
    body = null
): Promise<any> {
    const signedToken = await getSignedToken();

    if (signedToken !== null) {
        const api =
            method === "GET" ? process.env.READ_API : process.env.WRITE_API;

        return fetch(`${api}${urlString}`, {
            method,
            body,
            headers: {
                ...headers,
                "Content-Type": "application/json",
                Authorization: `Bearer ${signedToken}`,
            },
        });
    }

    return null;
}

export const get = (url: string, headers: any = null) => {
    return request(url, "GET", headers);
};

export const post = (url: string, headers: any, body: any) => {
    return request(url, "POST", headers, body);
};

export const put = (url: string, headers: any, body: any) => {
    return request(url, "PUT", headers, body);
};

export const patch = (url: string, headers: any, body: any) => {
    return request(url, "PATCH", headers, body);
};

export const del = (url: string, headers: any) => {
    return request(url, "DELETE", headers);
};
