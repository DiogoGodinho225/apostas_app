import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function verifyToken(request){
    const token = await getToken({ req: request,  secret: process.env.NEXTAUTH_SECRET});
   
    const url = new URL(request.url);
    const pathname = url.pathname;

    if(pathname.startsWith("/api/auth")){
        return NextResponse.next();
    }

    if(!token){
        return NextResponse.json({error: 'Não autorizado'}, {status: 401});
    }


    return NextResponse.next();
}