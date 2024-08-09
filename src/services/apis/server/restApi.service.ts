import axios, { AxiosResponse } from "axios";
import { cookies } from "next/headers";
import { HTTPMethod } from "../httpMethod.enum";

async function request<Type>(
    urlString: string,
    method = "GET",
    headers = {},
    body = null,
    params = null
): Promise<AxiosResponse<Type, any>> {
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

    return axios<Type>(config);
}

export function get<Type>(
    url: string,
    params: any = null,
    headers: any = null
): Promise<AxiosResponse<Type, any>> {
    return request<Type>(url, "GET", headers, null, params);
}

export function post<Type>(
    url: string,
    body: any,
    headers: any = null
): Promise<AxiosResponse<Type, any>> {
    return request<Type>(url, "POST", headers, body);
}

export function put<Type>(
    url: string,
    body: any,
    headers: any = null
): Promise<AxiosResponse<Type, any>> {
    return request<Type>(url, "PUT", headers, body);
}

export function patch<Type>(
    url: string,
    body: any,
    headers: any = null
): Promise<AxiosResponse<Type, any>> {
    return request<Type>(url, "PATCH", headers, body);
}

export function del<Type>(
    url: string,
    headers: any = null
): Promise<AxiosResponse<Type, any>> {
    return request<Type>(url, "DELETE", headers);
}
