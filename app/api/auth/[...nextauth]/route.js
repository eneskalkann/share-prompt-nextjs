import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

const handlers = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ], 
    async session ({session}){

    },
    async signIn ({profile}){
        try{
            // servelles _> lamdba function _> dynmodb
        } catch(error){

        }
    }
})

export {handlers as GET, handlers as POST} 