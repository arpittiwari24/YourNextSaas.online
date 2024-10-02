import authOptions from "@/utils/authOptions";
import User from "@/utils/models/users";
import supabaseClient from "@/utils/supabase-connect";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Admin() {
  const session = await getServerSession(authOptions as Object);
  const email = session?.user?.email;
  const { data: user } = await supabaseClient
    .from("users")
    .select("role")
    .eq("email", email);
  const { data } = await supabaseClient.from("users").select("*");

  console.log(await User.find());

  if (email && user && user[0].role === "admin") {
    return (
      <>
        {data ? (
          <div className="container mx-auto mt-8 text-center max-sm:p-2">
            <div className="py-5 pb-10">
              <h1 className="text-5xl">All Users </h1>
            </div>
            <table className="min-w-full bg-white border border-black text-black">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-r">ID</th>
                  <th className="py-2 px-4 border-b border-r">Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Role</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b border-r">{user.id}</td>
                    <td className="py-2 px-4 border-b border-r">{user.name}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                    <td className="py-2 px-4 border-b">{user.role}</td>
                    <td className="py-2 px-4 border-b">{user.active}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
  return <>not admin</>;
}
