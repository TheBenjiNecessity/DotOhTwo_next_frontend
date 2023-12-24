import jwt, { Secret } from "jsonwebtoken";
import { getToken } from "next-auth/jwt";
import { type NextApiRequest } from "next";

async function getSignedToken(req: NextApiRequest) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });

    if (token !== null) {
        return jwt.sign(token, process.env.AUTH_SECRET as Secret, {
            algorithm: "HS256",
        });
    }

    return null;
}

async function callApi(
    url: string,
    method: string = "GET",
    body: any,
    headers: any
) {
    return await fetch(url, {
        method,
        body,
        headers,
    });
}

export async function request(req: NextApiRequest) {
    const signedToken = await getSignedToken(req);

    if (signedToken !== null) {
        const url = new URL(req.url || "");

        return await callApi(
            `http://${process.env.READ_API}${url.pathname}${url.search}`, // TODO http?s?
            req.method,
            req.body,
            {
                ...req.headers,
                "Content-Type": "application/json",
                Authorization: `Bearer ${signedToken}`,
            }
        );
    }

    return null;
}

// return new Response("Error", {
//     status: 400,
// });
