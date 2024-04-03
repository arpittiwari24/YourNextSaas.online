import supabaseClient from "@/utils/supabase-connect";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const reqData = await req.json()
        if(reqData === undefined) {
            NextResponse.json({message: "Empty request"},{status: 400})
        }
        await supabaseClient.from("contact").upsert({
            name: reqData.name,
            email: reqData.email,
            details: reqData.details
        })
        return NextResponse.json({message: "Data sent successfully"},{status: 201})
    } catch (error) {
        NextResponse.json({message: "Internal Server error"},{status: 500})
    }
} 