import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(

  function middleware(req) {
    const baseUrl = req.nextUrl.origin;
   

    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token?.role != "admin"
    ) {
      return NextResponse.rewrite(new URL("/notfound", baseUrl));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/admin/:path*","/cart"] };