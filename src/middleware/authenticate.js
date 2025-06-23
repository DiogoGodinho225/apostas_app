import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middlewareAuth(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;
  const url = req.nextUrl.clone();

  if (pathname === '/auth' && token) {
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  if (!token && pathname !== '/auth') {
    url.pathname = '/auth';
    url.searchParams.set('error', 'token_invalid');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
