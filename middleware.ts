import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
    const verify = req.cookies.get("next-auth.session-token")
    const environment = process.env.NODE_ENV
    const url = req.url
    if(!verify && url.includes("/dashboard")){
        if(environment === "development") {
            return NextResponse.redirect("http://localhost:3000")
        } else {
            return NextResponse.redirect("https://yournextsass.vercel.app")
        }
    }
}