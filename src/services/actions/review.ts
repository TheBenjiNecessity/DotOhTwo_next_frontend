"use server";

import { getAccessToken } from "@auth0/nextjs-auth0";

interface Review {
    text: string;
}

export async function addReview(review: Review) {
    const accessToken = await getAccessToken();

    const response = await fetch(`${process.env.WRITE_API}/review`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken.accessToken}`,
            //"x-api-key": process.env.CMS_API_KEY,
        },
        body: JSON.stringify({ review }),
    });

    const result = await response.json();

    return result;
}
