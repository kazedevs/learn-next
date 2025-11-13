import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "john@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;
        console.log(email, password);

        const user = {
          name: "John Doe",
          email: "john@example.com",
          id: "1",
        };

        if (user) {
          return user;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: "process.env.GOOGLE_CLIENT_ID",
      clientSecret: "process.env.GOOGLE_CLIENT_SECRET",
    }),

    GitHubProvider({
      clientId: "process.env.GITHUB_CLIENT_ID",
      clientSecret: "process.env.GITHUB_CLIENT_SECRET",
    }),
  ],
});

export { handler as GET, handler as POST };
