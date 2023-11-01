import { NextResponse, type NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authToken = request.cookies.has("auth-token");

  if (request.nextUrl.pathname.startsWith("/admin")) {
    const isLoginPageRequested = request.nextUrl.pathname === "/admin/login";
    if (!isLoginPageRequested && !authToken) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    if (isLoginPageRequested && authToken) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*"],
};
