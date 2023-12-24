/** @type {import('next').NextConfig} */
const nextConfig = {
    // async headers() {
    //     return [
    //         {
    //             source: "/read-api/:path*",
    //             headers: [
    //                 { key: "Access-Control-Allow-Credentials", value: "true" },
    //                 {
    //                     key: "Access-Control-Allow-Origin",
    //                     value: "localhost:3000", //TODO env
    //                 }, // replace this your actual origin
    //                 {
    //                     key: "Access-Control-Allow-Methods",
    //                     value: "GET,DELETE,PATCH,POST,PUT",
    //                 },
    //                 {
    //                     key: "Access-Control-Allow-Headers",
    //                     value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    //                 },
    //             ],
    //         },
    //     ];
    // },
    async rewrites() {
        return [
            {
                source: "/read-api/:path*",
                destination: "http://localhost:3000/api/:path*", // Proxy to Backend
            },
        ];
    },
};

module.exports = nextConfig;
