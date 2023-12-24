const callApi = (
    url: string | URL,
    method: string,
    headers: any,
    body: any = null
) => {
    return fetch(url, {
        method,
        body,
        headers: {
            ...headers,
            "Content-Type": "application/json",
        },
    });
};

export const get = (url: string | URL, headers: any = null) => {
    return callApi(url, "GET", headers);
};

export const post = (url: string | URL, headers: any, body: any) => {
    return callApi(url, "POST", headers, body);
};

export const put = (url: string | URL, headers: any, body: any) => {
    return callApi(url, "PUT", headers, body);
};

export const patch = (url: string | URL, headers: any, body: any) => {
    return callApi(url, "PATCH", headers, body);
};

export const del = (url: string | URL, headers: any) => {
    return callApi(url, "DELETE", headers);
};
