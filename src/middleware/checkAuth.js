import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function checkAuth(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const url = req.nextUrl.clone();

  if (url.pathname === '/auth' && token) {
    url.pathname = '/HomePage';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}


