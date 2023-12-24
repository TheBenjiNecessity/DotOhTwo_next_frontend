import jwt, { Secret } from "jsonwebtoken";
import { getToken } from "next-auth/jwt";
import { type NextApiRequest, type NextApiResponse } from "next";

async function getSignedToken(req: NextApiRequest) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });

    if (token !== null) {
        return jwt.sign(token, process.env.AUTH_SECRET as Secret, {
            algorithm: "HS256",
        });
    }

    return null;
}

export async function getRequest(req: NextApiRequest, res: NextApiResponse) {
    const signedToken = await getSignedToken(req);

    if (signedToken !== null) {
        const url = new URL(req.url || "");

        return await fetch(
            `http://${process.env.READ_API}${url.pathname}${url.search}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${signedToken}`,
                },
                //body: {},
            }
        );
    }

    return null;
}
