/** @format */

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { isAuthenticate } from "@/middlewares/authenticate"

export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname === "/") {
		return NextResponse.redirect(new URL("/dashboard", request.url))
	}

	if (request.nextUrl.pathname === "/login") {
		if (isAuthenticate(request)) {
			return NextResponse.redirect(new URL("/dashboard", request.url))
		} else {
			return NextResponse.next()
		}
	}

	if (isAuthenticate(request)) {
		return NextResponse.next()
	} else {
		const loginUrl = new URL("/login", request.url)

		loginUrl.searchParams.set("from", request.nextUrl.pathname)

		return NextResponse.redirect(loginUrl)
	}
}

export const config = {
	matcher: ["/", "/login", "/dashboard"],
}
