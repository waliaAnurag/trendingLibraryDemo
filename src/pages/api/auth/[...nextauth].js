import { verifyPassword } from "@/helpers/auth";
import { connectDataBase } from "@/helpers/db-utils";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
//so NextAuth returns ann api handler function and in NextAuth function we are passing our configuration which helps us to configure next auth behvaiour

export default NextAuth({
    session:{
        jwt : true
    },
    providers:[
        CredentialsProvider({
            async authorize(credentials){
                const client = await connectDataBase();

                const userCollection = client.db("trendingBookLibrary").collection("users");
                const user = await userCollection.findOne({email:credentials.email})
                if(!user){ //user is undefined otherwise an object if found
                   
                    throw new Error("user not found !")
                }
                const isValid = await verifyPassword(credentials.password,user.password)
                if(!isValid){
                    throw new Error("couldn't login user");
                }
                client.close();
                return {email:user.email}
                
            }
        })
    ],
    secret:process.env.NEXT_AUTH_TOKEN
})