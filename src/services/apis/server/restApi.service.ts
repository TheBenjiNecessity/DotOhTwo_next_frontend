import axios, { AxiosResponse } from "axios";
import { cookies } from "next/headers";
import { HTTPMethod } from "../httpMethod.enum";

async function request(
    urlString: string,
    method = "GET",
    headers = {},
    body = null,
    params = null
): Promise<AxiosResponse<any, any>> {
    const cookieStore = cookies();
    const SESSION = cookieStore.get("SESSION");

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
        withCredentials: true,
        headers: {
            ...headers,
            "Content-Type": "application/json",
            Cookie: `SESSION=${SESSION?.value}`,
        },
    };

    if (method === HTTPMethod.GET || method === HTTPMethod.DELETE) {
        delete config.data;
    }

    return axios(config);
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
