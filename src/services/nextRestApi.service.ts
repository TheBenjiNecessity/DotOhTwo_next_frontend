import { NextRequest } from "next/server";
import { cookies } from "next/headers";

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
    const url = new URL(req.url || "");
    const api =
        req.method === "GET" ? process.env.READ_API : process.env.WRITE_API;
    const cookieStore = cookies();
    const SESSION = cookieStore.get("SESSION");

    return callApi(`${api}${url.pathname}${url.search}`, req.method, req.body, {
        ...req.headers,
        "Content-Type": "application/json",
        Cookie: `SESSION=${SESSION?.value}`,
    });
}

// return new Response("Error", {
//     status: 400,
// });
