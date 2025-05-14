import { NextRequest, NextResponse } from "next/server";
import { mobilioSession } from "./constants/storage";
import { cookies } from "next/headers";

export const config = {
  matcher: [
    /*
     * Apply middleware to all routes except:
     * - API routes
     * - _next (static assets)
     * - static files like images from /public
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images|icons).*)",
  ],
};

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const auth_session = cookieStore.get(mobilioSession);

  const nextResponse = NextResponse.next();

  if (
    request.nextUrl.pathname.startsWith("/assets") ||
    request.nextUrl.pathname.startsWith("/public")
  ) {
    return nextResponse;
  }

  if (
    (request.url.includes("/auth/login") ||
      request.url.includes("/auth/register")) &&
    auth_session?.value
  ) {
    const response = NextResponse.redirect(
      new URL(`/dashboard/statistics`, request.url)
    );
    return response;
  }

  const isAuthPage =
    request.nextUrl.pathname.startsWith("/auth/login") ||
    request.nextUrl.pathname.startsWith("/auth/register");

  if (!auth_session?.value && !isAuthPage) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (auth_session?.value && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard/statistics", request.url));
  }
  return nextResponse;
}
