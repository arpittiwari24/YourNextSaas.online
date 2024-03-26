import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
    const token = req.cookies.get("next-auth.session-token")
    console.log(token);
    
    const url = req.url
    if(token === undefined && url.includes("/dashboard")){
        return NextResponse.redirect("https://yournextsass.vercel.app")
    }
}