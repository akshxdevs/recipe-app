import { prismaClient } from "@/lib/db";
import NextAuth from "next-auth";
import GoogleProviders from "next-auth/providers/google";

const handler = NextAuth({
    providers:[
        GoogleProviders({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
    ],
    callbacks:{
        async signIn({user}) {
            const {name,email} = user;
            const Name = name ?? ""
            const Email = email ?? ""
            try {
                const username = "user" + Math.floor(Math.random() * 1000000000);
                const existingUser = await prismaClient.user.findFirst({
                            where:{
                                email:Email
                            }
                        })
                        if (!existingUser) {
                            await prismaClient.user.create({
                                data:{
                                    username: username ?? "",
                                    Name:Name,
                                    email: Email,
                                    type:"GOOGLE",
                                }
                            });
                            console.log("User created");
                        }else
                        console.log("User already exist");
                return true
            } catch (error) {
                console.error("Error during user creation",error);
                return false
            }
        },  
    },
});

export { handler as GET,handler as POST}