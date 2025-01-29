import { NextRequest, NextResponse } from "next/server";

// Middleware function
export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-request-path", pathname);

  const token = req.cookies.get("accessToken");

  if (pathname === "/reservations" && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set("x-request-path", pathname);

  return response;
}

// Middleware configuration
export const config = {
  matcher: "/:path*",
};
