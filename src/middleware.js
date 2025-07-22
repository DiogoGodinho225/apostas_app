import { middlewareAuth } from "@/middleware/authenticate";
import { verifyToken } from "./middleware/verifyToken";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const pathname = req.nextUrl.pathname;
  
  if (pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  if (pathname.startsWith('/api')) {
    const res = await verifyToken(req);
    if (res) return res;
  }

  
  return middlewareAuth(req);
}

export default middleware;

export const config = {
  matcher: [
    "/api/:path*",
    "/((?!api|_next/|favicon.ico|$).*)",
  ],
};
