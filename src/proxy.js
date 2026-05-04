import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { auth } from './lib/auth'


export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log('reqest from proxy', request)
    // console.log('nextUrl:', request.nextUrl)
    // console.log('pathname:', request.nextUrl.pathname)
    const pathname = request.nextUrl.pathname

    if (session) {
        if (pathname === '/signin' || pathname === '/signup') {
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.next()
    }
    if (!session && pathname.startsWith('/profile')) {
        return NextResponse.redirect(new URL('/signin', request.url))
    }
}

export const config = {
    matcher: ['/tile/:path*', '/profile', '/profile/update', '/signin', '/signup'],
}