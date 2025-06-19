import { middlewareAuth } from "@/middleware/authenticate";
import { checkAuth as checkAuthMiddleware } from "@/middleware/checkAuth";

export default async function middleware(req) {
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith('/auth')) {
    const res = await checkAuthMiddleware(req);
    if (res) return res;
  }

  return middlewareAuth(req);
}

export const config = {
  matcher: [
    "/auth",
    "/((?!api|_next/|favicon.ico|auth|$).*)",
  ],
};
