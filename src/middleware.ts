import { NextRequest, NextResponse } from "next/server";

// Middleware function
export function middleware(req: NextRequest) {
  const pathname = new URL(req.url).pathname;
  const token = req.cookies.get("accessToken");

  if (pathname === "/reservations" && !token) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

// Middleware configuration
export const config = {
  matcher: ["/reservations"],
};
