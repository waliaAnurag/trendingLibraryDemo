// pages/_middleware.js
import { NextResponse } from 'next/server';


export async function middleware(request) {


  const { pathname } = request.nextUrl


  // if (pathname.includes("dashboard") && !(request.cookies.get('next-auth.session-token')?.value)) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }
  if (((pathname === "/") || (pathname === "/auth/signup")) && (request.cookies.get('next-auth.session-token')?.value)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ['/dashboard/:path*', '/', '/auth/signup'],
}
