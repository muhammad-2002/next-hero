import { NextResponse } from "next/server";

export function middleware(request) {

  const cookie = request.cookies.get('nextjs');
  console.log(cookie)
  const co = 'amar sonar bangl'
  if(cookie && cookie.value == co) {
    return NextResponse.next();
  }
  else{
    
    return NextResponse.redirect(new URL('/login', request.url));
  }
  }
  export const config = {
    matcher: ['/dashboard'],
  }