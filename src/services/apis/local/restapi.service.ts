import axios from "axios";

const callApi = (
    url: string,
    method: string,
    headers: any,
    body: any = null
) => {
    return axios({
        method,
        url,
        data: body,
        headers: {
            ...headers,
            "Content-Type": "application/json",
        },
    });
};

export const get = (url: string, headers: any = null) => {
    return callApi(url, "GET", headers);
};

export const post = (url: string, headers: any, body: any) => {
    return callApi(url, "POST", headers, body);
};

export const put = (url: string, headers: any, body: any) => {
    return callApi(url, "PUT", headers, body);
};

export const patch = (url: string, headers: any, body: any) => {
    return callApi(url, "PATCH", headers, body);
};

export const del = (url: string, headers: any) => {
    return callApi(url, "DELETE", headers);
};
