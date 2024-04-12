
import KoalaWelcomeEmail from "@/components/email/Email"
import authOptions from "@/utils/authOptions"
import supabaseClient from "@/utils/supabase-connect"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import {Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET(req: Request) {
  const session = await getServerSession(authOptions as Object)
  const email = session?.user?.email
  const name = session?.user?.name
  const {data} = await supabaseClient.from("users").select("welcome_email_sent").eq("email",email)
  console.log()

  try {
    if(data && JSON.stringify(data[0].welcome_email_sent === false)) {
      await resend.emails.send({
        from: 'bu@resend.dev',
        to: email!,
        subject: 'hello world',
        react: KoalaWelcomeEmail({userFirstname: name || ""}),
    })
    await supabaseClient.from("users").update({welcome_email_sent: true}).eq("email",email)
   return NextResponse.json({message: "Sent"},{status:200})
    } else {
      return NextResponse.json({message: "already sent"}, {status: 200})
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({message: "not sent"}, {status: 500})
  }
}