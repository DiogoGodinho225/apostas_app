import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const middlewareAuth = withAuth(
    function middleware(req){
        console.log('Token:', req.nextauth.token);
        return NextResponse.next();
    },
    {
        callbacks:{
            authorized: ({token}) => !!token,
        },
        pages:{
            signIn: '/auth',
        },
    }
);


