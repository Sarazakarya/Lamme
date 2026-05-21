import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret:
      process.env.NEXT_PUBLIC_NEXTAUTH_SECRET || process.env.NEXTAUTH_SECRET,
  });
  const protectedRoutes = ["/blog", "/dashboard"];
  const { pathname } = request.nextUrl;
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (!token && isProtected) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:path*", "/dashboard/:path*"],
};
