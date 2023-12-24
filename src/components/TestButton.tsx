"use client";

export default function TestButton() {
    async function handleClick() {
        console.log("handleClick");
        const response = await fetch(`/review?id=1234`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                //"x-api-key": process.env.CMS_API_KEY,
            },
            //body: JSON.stringify({ test: "test" }),
        });

        console.log("response", await response.text());
    }

    return <button onClick={() => handleClick()}>Test</button>;
}
