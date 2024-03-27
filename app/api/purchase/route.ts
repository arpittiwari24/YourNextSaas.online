import authOptions from "@/utils/authOptions";
import { lemonSqueezyApiInstance } from "@/utils/axios";
import supabaseClient from "@/utils/supabase-connect";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions as Object)
  const email = session?.user?.email
  const {data: user} = await supabaseClient.from("users").select("id").eq("email",email)
  console.log(user);
  try {
    const reqData = await req.json();

    if (!reqData.productId)
      return Response.json(
        { message: "productId is required" },
        { status: 400 }
      );

    const response = await lemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            custom: {
              user_id: user,
            },
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQUEEZY_STORE_ID?.toString(),
            },
          },
          variant: {
            data: {
              type: "variants",
              id: reqData.productId.toString(),
            },
          },
        },
      },
    });

    const checkoutUrl = response.data.data.attributes.url;

    console.log(response.data);

    return Response.json({ checkoutUrl });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "An error occured" }, { status: 500 });
  }
}