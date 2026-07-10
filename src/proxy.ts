import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set(
    "Cache-Control",
    "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400",
  );
  return response;
}

export const config = {
  matcher: "/api/media/file/:path*",
};
