import { getServerSession } from "next-auth";
import { config } from "../../../../auth";
import jwt, { Secret } from "jsonwebtoken";
import axios, { AxiosResponse } from "axios";
import { HTTPMethod } from "../httpMethod.enum";

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
    body = null,
    params = null
): Promise<AxiosResponse<any, any>> {
    const signedToken = await getSignedToken();

    if (signedToken !== null) {
        const api =
            method === HTTPMethod.GET
                ? process.env.READ_API
                : process.env.WRITE_API;

        const config: any = {
            method,
            url: urlString,
            baseURL: api,
            data: body,
            params,
            headers: {
                ...headers,
                "Content-Type": "application/json",
                Authorization: `Bearer ${signedToken}`,
            },
        };

        if (method === HTTPMethod.GET || method === HTTPMethod.DELETE) {
            delete config.data;
        }

        return axios(config);
    }

    return new Promise((resolve, reject) => reject()); // TODO is there a better way to do this?
}

export const get = (url: string, params: any = null, headers: any = null) => {
    return request(url, "GET", headers, null, params); // TODO shouldn't need to pass null
};

export const post = (url: string, body: any, headers: any = null) => {
    return request(url, "POST", headers, body);
};

export const put = (url: string, body: any, headers: any = null) => {
    return request(url, "PUT", headers, body);
};

export const patch = (url: string, body: any, headers: any = null) => {
    return request(url, "PATCH", headers, body);
};

export const del = (url: string, headers: any = null) => {
    return request(url, "DELETE", headers);
};
