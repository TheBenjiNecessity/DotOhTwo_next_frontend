import jwt, { Secret } from "jsonwebtoken";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

async function getSignedToken(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });

    if (token !== null) {
        return jwt.sign(token, process.env.AUTH_SECRET as Secret, {
            algorithm: "HS256",
        });
    }

    return null;
}

function callApi(
    url: string,
    method: string = "GET",
    body: any,
    headers: any
): Promise<Response> {
    return fetch(url, {
        method,
        body,
        headers,
    });
}

export async function request(req: NextRequest): Promise<Response> {
    const signedToken = await getSignedToken(req);

    if (signedToken !== null) {
        const url = new URL(req.url || "");
        const api =
            req.method === "GET" ? process.env.READ_API : process.env.WRITE_API;

        return callApi(
            `${api}${url.pathname}${url.search}`,
            req.method,
            req.body,
            {
                ...req.headers,
                "Content-Type": "application/json",
                Authorization: `Bearer ${signedToken}`,
            }
        );
    }

    return new Promise((resolve, reject) => reject());
}

// return new Response("Error", {
//     status: 400,
// });
