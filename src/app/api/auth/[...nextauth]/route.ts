import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

// console.log("GITHUB_ID", process.env.GITHUB_ID);
// console.log("GITHUB_SECRET", process.env.GITHUB_SECRET);

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
    callbacks: {
        async session(stuff) {
            //   session.user.id = token.id;
            //   session.accessToken = token.accessToken;
            //console.log("session stuff", stuff);
            return stuff.session;
        },
        async jwt(stuff) {
            //console.log("jwt stuff", stuff);
            return stuff.token;
        },
        async signIn(stuff) {
            //console.log("signIn stuff", stuff);
            return true;
        },
    },
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
        error: "/auth/error", // Error code passed in query string as ?error=
        verifyRequest: "/auth/verify-request", // (used for check email message)
        newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
