import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export async function middleware(request: Request) {
  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASSWORD;

  if (!user || !pass) {
    return new Response('認証設定エラー', { status: 500 });
  }

  const authHeader = request.headers.get('authorization');
  if (!authHeader) return unauthorized();

  const base64 = authHeader.replace('Basic ', '');
  const [authUser, authPass] = atob(base64).split(':');

  if (authUser === user && authPass === pass) {
    return NextResponse.next();
  }
  return unauthorized();
}

function unauthorized() {
  return new Response('認証が必要です', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Private Area"' },
  });
}