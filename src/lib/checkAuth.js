import { getToken } from "next-auth/jwt";

export async function checkAuth(req){
    const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET});
    if(!token) throw new Error('Unauthorized');
    return token;
}