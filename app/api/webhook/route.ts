import authOptions from "@/utils/authOptions";
import supabaseClient from "@/utils/supabase-connect";
import crypto from "crypto";
import { getServerSession } from "next-auth";

export async function POST(req : Request) {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email
  const {data} = await supabaseClient.from("users").select("id").eq("email",email)
  console.log(data);

  try {
    // Catch the event type
    const clonedReq = req.clone();
    const eventType = req.headers.get("X-Event-Name");
    const body = await req.json();

    // Check signature
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE!;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(await clonedReq.text()).digest("hex"),
      "utf8"
    );
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }

    console.log(body);

    // Logic according to event
    if (eventType === "order_created") {
      const userId : String = body.meta.custom_data.user_id;
      const isSuccessful = body.data.attributes.status === "paid";
    }

    return Response.json({ message: "Webhook received" });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}